<style lang="less" src="result1.less" scoped></style>
<template lang="pug">

.wrapper.relat(v-images-loaded:on.progress="imageProgress")
	
		

	.preload.abs
	.container.relat
		
		.title.title1.relat
			.sub.abs
				img.relat(src="../../img/dest/result-sub.png")
			.blood1.abs
				img(src="../../img/dest/result-blood.png")
			.blood2.abs
				img(src="../../img/dest/exam-blood1.png")
			img.relat(src="../../img/dest/result1-tit.png")
		.sub.relat
			img.relat(src="../../img/dest/result1-sub.png")
		.btn-j.btn1.relat
			img(src="../../img/dest/result1-btna.png")
		router-link.btn-j.btn2.relat(data-ga="product",data-href="",  :to="{name:'product' , params:{typ:'result1'}}")
			img(src="../../img/dest/result1-btnb.png")
			.prd.abs
				img(src="../../img/dest/result-product.png")
	.pop.pop-fblogin.fix.inv
		.bgx.abs
		.btnlogin.relat 請先登入FB
		.btn.btn-close.abs
			span.ico.ico1 
			span.ico.ico2 
</template>

<script>
//import $ from "jquery";
import { mapActions, mapMutations,mapGetters } from 'vuex';
import userForm from './userForm.vue';
import {GLOBAL} from '../utils/config.js';
import {FB_ASSET} from '../utils/fb_assets.js';
import {setCookie , getCookie} from '../utils/common.js';
//import svgAnim from './svgAnim.vue';


import imagesLoaded from 'vue-images-loaded';


let MAX_img_count ;
let img_count = 0;
let fb = new FB_ASSET();

//var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
export default {
	data() {
		return {
		};
	},
	directives: {
		imagesLoaded
	},
	components:{
		userForm,
		// svgAnim,
		
		
	},
	computed: {
    	...mapGetters(['path']),

  	},
	created:function(){

		if(MAX_img_count!=0)
		this.showPageLoading(true);
		else
		this.showPageLoading(false);

			
	},
	mounted:function(){
		MAX_img_count = $('.wrapper img').length;
		console.log("MAX_img_count:" + MAX_img_count)
		img_count = 0;
		setCookie('prev' , 'exam' , '1')
		
		
	},
	beforeDestroy:function(){
		//$('.carousel').slick('unslick');
		console.log('destroy.........');
		this.killIntervals();
	},
	methods: {
		...mapActions(['showPageLoading']),
		...mapMutations(['percentLoading','videoplayed']),
		
		/**/
		imageProgress(instance, image ) {
			const result = image.isLoaded ? 'loaded' : 'broken';
			console.log( 'image is ' + result + ' for ' + image.img.src );
			img_count ++;
			//console.log( 'img_count is ' + img_count );
			let per = parseInt(img_count/MAX_img_count * 100)
			this.percentLoading (per);
			if(img_count >= MAX_img_count){
				this.pngFix();
				this.showPageLoading(false);
				this.init();
				this.bind();
			}
		},
		pngFix() {
			const self = $(this);
			self.find(`img[src$=".png"], img[src$=".gif"]`).each(() => {
			this.style.filter =
			`progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='image',src='${this.src}')`;
			});
		},
		init(){
			let title = $('.title >img') , t_sub = $('.title .sub') ,sub = $('.container > .sub') , blood1 =  $('.blood1') , blood2 =  $('.blood2') , btn1 = $('.btn-j.btn1')  , btn2 = $('.btn-j.btn2') , prd = btn2.find('.prd');

			TweenMax.fromTo(title , .5 , {scaleX:2 , scaleY:2 , opacity:0},{delay:1 ,scaleX:1 , scaleY:1 , opacity:1,ease:Back.easeOut})
			
			TweenMax.fromTo(t_sub , .7 , {opacity:0},{delay:.5 ,scaleX:1 , scaleY:1 , opacity:1,ease:Sine.easeOut})
			
			TweenMax.fromTo(sub ,1 , {opacity:0 , y:20},{delay:1.5,y:0 , opacity:1,ease:Sine.easeOut})

			
			TweenMax.fromTo (blood1 ,3, {opacity:0 ,scaleY:0 } , {delay:1 , scaleY:1 ,opacity:1 , transformOrigin:'50% 0%',ease:Sine.easeOut})

			TweenMax.fromTo (blood2 ,.8, {opacity:0 ,scaleX:0,scaleY:0 } , {delay:.8 , scaleX:1,scaleY:1 ,opacity:1 , transformOrigin:'0% 100%',ease:Quad.easeIn})
			let count =0
			$('.btn-j').each(function(){
				TweenMax.fromTo($(this) , .7 ,{opacity:0} , {delay:2.5 + count *.1 ,y:0,opacity:1,ease:Expo.easeOut})	
				count ++
			})
			TweenMax.fromTo(prd ,.8, {opacity:0 ,y:-50 } , {delay:2.8 , y:0,opacity:1 , ease:Back.easeOut})

		},
		killIntervals (){
			
			
		},
		chkFbInitial() {
        	if (fb.get_FBID() == '0') {
            	console.log('fb login')
            	
            	return false;
        	}
        	return true;
        //console.log("fbid..." + fb.get_FBID());
    	},
		bind(){
			let context = this;
			$('.pop-fblogin .btn-close').off('click').click(function(){
				$('.pop-fblogin').fadeOut(300);
			})
			$('.btnlogin').click(function(){
				let url = `${GLOBAL.host}${context.path}.html`;
				
            	fb.get_login(cb , url);
        	})
			$('.btn1').click(function(){
				GLOBAL.ga.GT( '/result1'  , '.btn.share')
				if ( !context.chkFbInitial()  ) {
                	$('.pop-fblogin').fadeIn(500);
                	return;
            	}else{
            		shareHandle();
            	}
			})
			function cb(){
            	$('.pop-fblogin').fadeOut(500);
        	}
        	function shareHandle(){
                fb.get_ui_post('現形吧!肌膚鬼怪', '快來檢測妳的肌膚鬼怪，有機會獲得碧歐斯維他命B5原液喔！', "", GLOBAL.host+ context.path + '.html', [], afterPost);
                // let hashtag = encodeURIComponent('#現加入高鐵TGO有機會抽價值1000元的紅利點數');
                // location.href="https://www.facebook.com/dialog/feed?app_id="+GLOBAL.fbAppId+"&display=popup&amp;caption="+"test!"+"&link="+"https://www.toyota.com.tw/event/toyotaandboty/"+"&hashtag="+hashtag+"&redirect_uri="+GLOBAL.host+"form.html";
             	function afterPost(){
             		context.$router.replace('form');
             	}
        	}
			
		}

		
	},
};



</script>