<style lang="less" src="redrobe.less" scoped></style>
<template lang="pug">
.wrapper.relat(v-images-loaded:on.progress="imageProgress")
	.preload.abs
	.bg-all.abs
		.frame.abs
	.container.relat
		.gradblk.abs
		.title.title1.relat
			img.relat(src="../../img/dest/redrobe-tit.png")
		.content.relat
			.blk.relat.b1
				.p.relat
					img(src="../../img/dest/redrobe1.png")
				.t.t1.abs
					img(src="../../img/dest/redrobet01.gif")
				.t.t2.abs
					img(src="../../img/dest/redrobet02.gif")

			.blk.relat.b2
				.p.relat
					img(src="../../img/dest/redrobe2.png")

				.t.t1.abs
					img(src="../../img/dest/redrobet03.gif")
				
				.t.t2.abs
					img(src="../../img/dest/redrobet04.gif")
			.blk.relat.b3
				.p.relat
					img(src="../../img/dest/redrobe3.png")

				.t.t1.abs
					img(src="../../img/dest/redrobet05.gif")
			
			.blk.relat.b4
				.p.relat
					img(src="../../img/dest/redrobe4.png")

				.t.t1.abs
					img(src="../../img/dest/redrobet06.gif")
				.t.t2.abs
					img(src="../../img/dest/redrobet07.gif")
			.blk.relat.b5
				.p.relat
					img(src="../../img/dest/redrobe5.png")

				.t.t1.abs
					img(src="../../img/dest/redrobet08.gif")
				//- .t.t2.abs
				//- 	img(src="../../img/dest/redrobet09.gif")
			.blk.relat.b6
				.p.relat
					img(src="../../img/dest/redrobe6.png")

				.t.t1.abs
					img(src="../../img/dest/redrobet09.gif")
				.t.t2.abs
					img(src="../../img/dest/redrobet010.gif")
			.blk.relat.b7
				.p.relat
					img(src="../../img/dest/redrobe7.png")

				.t.t1.abs
					img(src="../../img/dest/redrobet011.gif")
				.t.t2.abs
					img(src="../../img/dest/redrobet012.gif")
			.blk.relat.b8
				.p.relat
					img(src="../../img/dest/redrobe8.png")

				//- .t.t1.abs
				//- 	img(src="../../img/dest/redrobet011.gif")
				//- .t.t2.abs
				//- 	img(src="../../img/dest/redrobet012.gif")
			.blk.relat.b9
				.p.relat
					img(src="../../img/dest/redrobe9.png")
				.t.t1.abs
					img(src="../../img/dest/redrobet013.gif")
			.blk.relat.b10
				.p.relat
					img(src="../../img/dest/redrobe10.png")
				.t.t1.abs
					img(src="../../img/dest/redrobet014.gif")
				.t.t2.abs
					img(src="../../img/dest/redrobet015.gif")
			.blk.relat.b11
				.p.relat
					img(src="../../img/dest/redrobe-b.png")
					.lgt.abs.l1
						img(src="../../img/dest/redrobe11-lgt.png")
					.lgt.abs.l2
						img(src="../../img/dest/redrobe11-lgt.png")
					.lgt.abs.l3
						img(src="../../img/dest/redrobe11-lgt.png")
					.front.abs
						img(src="../../img/dest/redrobe11-a.png")
					.framez.abs
		.list.realt
			.btn-j.btn1
				img.relat(src="../../img/dest/redrobe-btn.png")
			.btn-j.btn2.relat
				img(src="../../img/dest/btn-gallery-else.png")
				//- .prd.abs
				//- 	img(src="../../img/dest/result-product.png"
	.pop.pop-fblogin.fix.inv
		.bgx.abs
		.btnlogin.relat 請先登入FB	
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
		setCookie('prev' , 'red-robe' , '1')
		
		
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
			let title = $('.title >img') ;
			TweenMax.to($('.bg-all') , 1 , {delay:1, opacity:1});
			TweenMax.fromTo(title , .5 , {scaleX:1.2 , scaleY:1.2 , opacity:0},{delay:.5 ,scaleX:1 , scaleY:1 , opacity:1,ease:Back.easeOut})
			
			

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
			
			$('.btnlogin').click(function(){
				let url = `${GLOBAL.host}${context.path}.html`;
				
            	fb.get_login(cb , url);
        	})
			$('.btn1').click(function(){
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
             	function afterPost(){
             		context.$router.replace('form');
             	}
        	}
			
		}

		
	},
};



</script>