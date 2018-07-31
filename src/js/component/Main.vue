<style lang="less" src="index.less"></style>


<template lang="pug">

//-input#page.inv(type="text",value = "index")

.wrapper.relat(v-images-loaded:on.progress="imageProgress")
	.preload.abs
	.bg.abs#canv
		
		.ghost1.abs
			img(src="../../img/dest/ghost-u.png")
		.ghost2.abs
			img(src="../../img/dest/ghost-d.png")
	.container.relat
		.title.title1.relat
			.blood1.abs
				img(src="../../img/dest/blood1.png")
			.blood2.abs
				img(src="../../img/dest/blood2.png")
			img.relat(src="../../img/dest/index-tit-1.png")
			
		.title.title2.relat
			.blood3.abs
				img(src="../../img/dest/blood3.png")
			img.relat(src="../../img/dest/index-tit-2.png")

		.sub.sub1.relat
			img(src="../../img/dest/index-sub1.png")
		.sub.sub2.relat
			img(src="../../img/dest/index-sub2.png")
		.sub.sub3.relat
			img(src="../../img/dest/index-sub3.png")
		.btn-j.btn1
			img(src="../../img/dest/index-btn-1.png")
		.btn-j.btn2
			img(src="../../img/dest/index-btn-2.png")
	footerComp


			
</template>

<script>
//import $ from "jquery";
import { mapActions, mapMutations } from 'vuex';
import userForm from './userForm.vue';
//import svgAnim from './svgAnim.vue';

import footerComp from './footerComp.vue';
import imagesLoaded from 'vue-images-loaded';


let MAX_img_count ;
let img_count = 0;


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
		
		footerComp,
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
		
		
		
	},
	beforeDestroy:function(){
		//$('.carousel').slick('unslick');
		
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
			}
		},
		pngFix() {
			const self = $(this);
			self.find(`img[src$=".png"], img[src$=".gif"]`).each(() => {
			this.style.filter =
			`progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='image',src='${this.src}')`;
			});
		},

		playVideoHandler() {
			console.log("yt playing....");
			this.videoplayed(true);
			//ga('send', 'event', 'index', 'video', 'play', 1);
			gtag('event' , 'shsh' , {'category':'index' , 'action':'click' , 'label':'video'})
		},
		
	},
};





</script>