<style lang="less" src="ghost-bus.less" scoped></style>
<template lang="pug">
.wrapper.relat(v-images-loaded:on.progress="imageProgress")
	
	.preload.abs
	.bg-all.abs
		
		.frame.abs
	.container.relat
		
		.title.title1.relat
			
			img.relat(src="../../img/dest/hospital-tit.png")
		
		.video.yt.relat(data-id='DR2vXnfc_Ng')
			#player
		.list.realt
			.btn-j.btn1
				img.relat(src="../../img/dest/btn-hospital-btn1.png")
			router-link.btn-j.btn2.relat(data-ga="gallery",data-href="",  :to="{name:'gallery' , params:{typ:'hospital'}}")
				img(src="../../img/dest/btn-gallery-else.png")
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
import {YTT} from '../utils/youtube.js';

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
		setCookie('prev' , 'hospital' , '1');
		window.scrollTo(0, 0)
	},

	beforeDestroy:function(){
		console.log('destroy.........');
		this.killIntervals();
	},

	methods: {
		...mapActions(['showPageLoading']),
		...mapMutations(['percentLoading','videoplayed']),
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
			let YT = new YTT( $('.yt').data('id') , 'player' , this.playVideoHandler);
			// onYouTubeIframeAPIReady = function() {
		 //        YT.onYouTubeIframeAPIReady();
		
			// };
			if (typeof onYouTubeIframeAPIReady == 'undefined') {
		    onYouTubeIframeAPIReady = function() {
		        YT.onYouTubeIframeAPIReady();
		       
		    };
		}
		else{
			console.log('onYouTubeIframeAPIReady ready...')
			onYouTubeIframeAPIReady();
		}
			TweenMax.to($('.bg-all') , 1 , {delay:1, opacity:1});
			let title = $('.title >img') , t_sub = $('.title .sub') ,sub = $('.container > .sub') , blood1 =  $('.blood1') , blood2 =  $('.blood2') , btn1 = $('.btn-j.btn1')  , btn2 = $('.btn-j.btn2') , prd = btn2.find('.prd');

			TweenMax.fromTo(title , 1 , {y:30 , opacity:0},{delay:1 ,y:0 , opacity:1,ease:Back.easeOut})
			
			TweenMax.fromTo(t_sub , .7 , {opacity:0},{delay:.5 ,scaleX:1 , scaleY:1 , opacity:1,ease:Sine.easeOut})
			
			TweenMax.fromTo(sub ,1 , {opacity:0 , y:20},{delay:1.5,y:0 , opacity:1,ease:Sine.easeOut})

			
			TweenMax.fromTo (blood1 ,3, {opacity:0 ,scaleY:0 } , {delay:1 , scaleY:1 ,opacity:1 , transformOrigin:'50% 0%',ease:Sine.easeOut})

			TweenMax.fromTo (blood2 ,.8, {opacity:0 ,scaleX:0,scaleY:0 } , {delay:.8 , scaleX:1,scaleY:1 ,opacity:1 , transformOrigin:'0% 100%',ease:Quad.easeIn})
			let count =0
			$('.btn-j').each(function(){
				TweenMax.fromTo($(this) , .7 ,{opacity:0} , {delay:1.5 + count *.1 ,y:0,opacity:1,ease:Expo.easeOut})	
				count ++
			})
			TweenMax.fromTo(prd ,.8, {opacity:0 ,y:-50 } , {delay:1.8 , y:0,opacity:1 , ease:Back.easeOut})

		},
		killIntervals (){
			
			
		},
		chkFbInitial() {
        	if (fb.get_FBID() == '0') {
            	console.log('fb not login')
            	
            	return false;
        	}
        	return true;
        //console.log("fbid..." + fb.get_FBID());
    	},
    	playVideoHandler() {
			console.log("yt playing....");
			this.videoplayed(true);
			//ga('send', 'event', 'index', 'video', 'play', 1);
		},
		bind(){
			let context = this;
			$('.pop-fblogin .btn-close').off('click').click(function(){
				$('.pop-fblogin').fadeOut(300);
			})
			$('.btnlogin').click(function(){
				let url = `${GLOBAL.host}${context.path}.html`;
            	fb.get_login(cb , url);
        	});
			$('.btn1').click(function(){
				GLOBAL.ga.GT( '/hospital'  , '.btn.share')
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
                fb.get_ui_post('敏感體質的我，總是能感應到身邊的詭異磁場，這天．．．', '都市傳說恐佈新解，分享有機會獲得BIO水感舒緩維他命B5原液', "", GLOBAL.host+ context.path + '.html', [], afterPost);
             	function afterPost(){
             		context.$router.replace('form');
             	}
        	}
			
		}

		
	},
};



</script>