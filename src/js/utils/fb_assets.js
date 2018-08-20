
import {GLOBAL} from './config.js';
import { getCookie,setCookie} from './common.js';

export {FB_ASSET as FB_ASSET}
function FB_ASSET() {
	const context = this;
	const PARAM_SCOPE = 'public_profile,email';
	const albIds = [];
	const albNames = [];
	const albCovers = [];
	let FB_STATE = 'init';
	let FB_ID = '0';
	let FB_NAME = 'DEFAULT';
	let scr;
	let scr2;
	let loginCb;

	(function (d, s, id) {
		
	 var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/zh_TW/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	function getFBInfo(cb) {
		FB.api('/me', (response) => {
			FB_ID = response.id;
			FB_NAME = response.name;
			console.log('fbname...' + FB_NAME)
			GLOBAL.fbid = FB_ID;
			GLOBAL.fbname = FB_NAME;
			setCookie('fbid' , FB_ID , '1')
			setCookie('fbname' , FB_NAME , '1')
			if(cb)
			cb();
		});
	}
	function statusChangeCallback2(cb, response) {
		if (response.status === 'connected') {
			getFBInfo(cb);
			FB_STATE = 'in';
		} else {
			// _jconsole('non connected..........');
		}
	}

	function statusChangeCallback(cb, response) {
		$('.loading').hide();
		if (response.status === 'connected') {
			if (FB_STATE !== 'in') {
				getFBInfo(cb);
			} else {
				getFBInfo(cb);
			}
			FB_STATE = 'in';
		} else {
			//updateImg($('#cfa_index img'), 'img/btn_fb.png');
			FB_STATE = 'out';
		}
	}
	function checkLoginState2(cb) {
		FB.getLoginStatus((response) => {
			statusChangeCallback2(cb, response);
		});
	}
	function checkLoginState(cb) {
		FB.getLoginStatus((response) => {
			statusChangeCallback(cb, response);
		});
	}
	function fbLogin(cb , url) {
		const isSafari = navigator.userAgent.indexOf('Safari') > -1;
		const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
		var isLine = window.navigator.userAgent.toLowerCase().indexOf('line') ;


		if (isLine<0) {
			FB.login((response) => {
				checkLoginState(cb);
			}, { scope: PARAM_SCOPE });
		} else {
			
			let redUrl = url;	
			
			let state = '{uid=splitline'+GLOBAL.linestate+'splitline}' //'{uid='+GLOBAL.uid+'}'
			location.href = `https://www.facebook.com/v3.0/dialog/oauth?client_id=${GLOBAL.fbAppId}&redirect_uri=${redUrl}&state=${state}`;			
		}
	}
	function uiPost(title, msg, picurl, url, hash=null , cb ) {
		const isSafari = navigator.userAgent.indexOf('Safari') > -1;
		const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
		const isFB = navigator.userAgent.indexOf("FB") > -1;
		var isLine = window.navigator.userAgent.toLowerCase().indexOf('line') ;
		let hashtag = encodeURIComponent('#肌膚的都市傳說');
		//alert('navigator.userAgent..'+navigator.userAgent)
		if (isFB) {
			FB.ui({
			        method: 'feed',
			        
			        // description: msg,
			        //hashtag:hash,
			        link: url,
			        //hashtag:hashtag,
			        /*picture: picurl,*/
			        // privacy:{'value':'EVERYONE'},
			    },
			    (response) => {
			        if (cb)
			            cb();
					if (response && response.post_id) {
			            GLOBAL.isSHARE = 1;
			        } else {
			            GLOBAL.isSHARE = 0;
			        }
			    });
		}else{

			location.href="https://www.facebook.com/dialog/feed?app_id="+GLOBAL.fbAppId+"&display=popup&amp;caption="+title+"&link="+url+"&hashtag="+hashtag+"&redirect_uri="+GLOBAL.host+"form.html";
		}
		
	}
	function createAlbsNodes() {
		
	}

	function createPhotosFromAlbum(imgurl) {
		// var arr = $('.cover_detail')
		// var len = $(arr).length;
	}

	function albumClk(ind) {
	
	}
	let nextCount = 0;
	const MAX_PAGING = 2;
	function getPhotos(albId, next) {
		let photosStatus;
		if (!next) {
			nextCount = 0;
			photosStatus = 'load';
			FB.api(`/${albId}/photos?pretty=0&limit=50`, (response) => {
				const obj = response.data;
				for (const index of obj) {
					const photo = obj[index];
					const imgs = photo.images;
					const len = imgs.length;
					const imgb = imgs[len - 1];
					const imgUrl = imgb.source;
					createPhotosFromAlbum(imgUrl);
				}
				const pg = response.paging;
				if (!pg) {
					photosStatus = 'ready';
					if (!scr2) {
						scr2 = new ScrollerOBJ();
						scr2.set_obj($('.photos_alb'));
						scr2.init();
					}
					return;
				}
				const cur = pg.cursors;
				if (!cur) {
					photosStatus = 'ready';
					if (!scr2) {
						scr2 = new ScrollerOBJ();
						scr2.set_obj($('.photos_alb'));
						scr2.init();
					}
					return;
				}
				// console.log("next" + next);
				if (cur.after) {
					getPhotos(albId, cur.after);
				}
			});
		} else {
			nextCount++;
			FB.api(`/${albId}/photos?pretty=0&after=${next}&limit=50`, (response) => {
				const obj = response.data;
				for (const index of obj) {
					const photo = obj[index];
					const imgs = photo.images;
					const imgb = imgs[0];
					const imgUrl = imgb.source;
					createPhotosFromAlbum(imgUrl);
				}
				const pg = response.paging;
				if (!pg || nextCount > MAX_PAGING) {
					photosStatus = 'ready';
					if (!scr2) {
						scr2 = new ScrollerOBJ();
						scr2.set_obj($('.photos_alb'));
						scr2.init();
					}
					return;
				}
				const cur = pg.cursors;
				if (!cur) {
					photosStatus = 'ready';
					if (!scr2) {
						scr2 = new ScrollerOBJ();
						scr2.set_obj($('.photos_alb'));
						scr2.init();
					}
					return;
				}
				if (cur.after) {
					getPhotos(albId, cur.after);
				}
			});
		}
	}
	function getAlbums() {
		FB.api('/me/albums', (response) => {
			if (response) {
				const obj = response.data;
				for (const index of obj) {
					const album = obj[index];
					albIds.push(album.id);
					albNames.push(album.name);
					if (album.cover_photo) {
						albCovers.push(album.cover_photo);
					} else {
						albCovers.push('0');
					}
				}
				createAlbsNodes();
				scr = new ScrollerOBJ();
				scr.set_obj($('.album_list'));
				scr.init();
				getPhotos(albIds[0], false);
			} else {
				// 未取得權限	偵測後可通知
			}
		});
	}
	function coverPhoto(id) {
		FB.api(`/${id}?fields=picture&type=small`, (responseIn) => {

		});
	}
	this.get_FBID = function () {
		if(FB_ID!='0'){
			
		}else if(getCookie('fbid')!=null){
			FB_ID = getCookie('fbid')
			GLOBAL.fbid = FB_ID;
			
		}else{
			
		}
		return FB_ID;
		
	};
	this.get_FBNAME = function () {
		if(FB_ID!='0'){
			
		}else  if(getCookie('fbname')!=null){
			FB_NAME = getCookie('fbname');
			GLOBAL.fbname = FB_NAME;
		}else{
			
		}
		return FB_NAME;
	};
	this.get_state = function () {
		return FB_STATE;
	};
	this.get_ui_post = function (title, msg, purl, url, hash=null , cb) {
		uiPost(title, msg, purl, url, hash , cb);
	};
	this.get_login = function (cb,url) {
		fbLogin(cb, url);
	};
	this.get_checkLoginState =	function (cb) {
		checkLoginState2(cb);
	};
	this.initialize = function (cb) {
		console.log(`fb app start:${GLOBAL.fbAppId}.....`);
		loginCb = cb;
	};
	window.fbAsyncInit = function () {
		FB.init({
				appId: GLOBAL.fbAppId, //'108536939812687',
			    xfbml: true,
			    version: 'v3.1',
		});
		FB.AppEvents.logPageView();  
		context.get_checkLoginState(null);
	};
	
}
