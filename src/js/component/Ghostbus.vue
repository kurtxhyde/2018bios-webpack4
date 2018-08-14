<style lang="less" src="ghost-bus.less" scoped></style>
<template lang="pug">
.wrapper.relat(v-images-loaded:on.progress="imageProgress")
	
	.preload.abs
	.bg-all.abs
		
		.frame.abs
	.container.relat
		
		.title.title1.relat
			
			img.relat(src="../../img/dest/bus-tit.png")
		
		.video.yt.relat(data-id='3A1p5cukyLw')
			#player
		.list.realt
			.btn-j.btn1
				img.relat(src="../../img/dest/bus-btn1.png")
			.btn-j.btn2.relat
				img(src="../../img/dest/btn-gallery-else.png")
				.prd.abs
					img(src="../../img/dest/result-product.png")
</template>

<script>
//import $ from "jquery";
import { mapActions, mapMutations } from 'vuex';
import userForm from './userForm.vue';
import imagesLoaded from 'vue-images-loaded';
import {YTT_class} from 'youtubeiframe-jojo';

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
		
		let YT = new YTT_class( $('.yt').data('id') , 'player' , this.playVideoHandler);
		onYouTubeIframeAPIReady = function() {
		        YT.onYouTubeIframeAPIReady();
		
		};
		
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
		playVideoHandler() {
			console.log("yt playing....");
			this.videoplayed(true);
			//ga('send', 'event', 'index', 'video', 'play', 1);
		},
		init(){
			
		},
		killIntervals (){
			
			
		},
		bind(){
			
			
		}

		
	},
};



</script>