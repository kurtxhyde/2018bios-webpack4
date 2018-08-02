<style lang="less" src="canvas_Pixi.less" scoped></style>

<template lang="pug">

.bg.abs#canv(v-images-loaded:on.progress="imageProgress")
	.cover.cover1.abs
		img.inv.filter_image(src="../../img/dest/clouds.jpg")
		img.inv.cover__image(src="../../img/dest/index-bg.jpg")
		img.inv.cover__image(src="../../img/dest/index-bg.jpg")
	#canvas.abs

	.ghost1.abs
		img(src="../../img/dest/ghost-u.png")
	.ghost2.abs
		img(src="../../img/dest/ghost-d.png")

</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import imagesLoaded from 'vue-images-loaded';
import { mapGetters } from 'vuex';
import {CanvasSlideshow} from '../utils/CanvasSlideshow.js';
// import {getBrowserHeight} from '../utils/common.js';
let MAX_img_count ;
let img_count = 0;
//let __CanvasSlideshow = CanvasSlideshow;
export default {
	data() {
	    return {
	    	
	        
	    };
	},
	directives: {
		imagesLoaded,
		
	},
	computed: {
    	
  	},
	components:{
		//Space,
	},
	created:function(){
		//initial data
		if(MAX_img_count!=0)
		{

		}
		else{
			
		}
		
	},
	mounted:function(){

		MAX_img_count = $('.bg img').length;
		console.log("MAX_img_count:" + MAX_img_count)
		img_count = 0;

		
			
		
	},
	methods: {
		//////////////
		// 檢查表單送出資料 //
		//////////////
		validator:function(){
			
		},
		imageProgress(instance, image ) {
			const result = image.isLoaded ? 'loaded' : 'broken';
			console.log( 'image is ' + result + ' for ' + image.img.src );
			img_count ++;
			let per = parseInt(img_count/MAX_img_count * 100)
			if(img_count >= MAX_img_count){
				this.pngFix();
				this.init();
			}
		},
		init(){
			
			var spriteImages = document.querySelectorAll( '.cover__image' );
			var spriteImagesSrc = [];
			var texts = [];

			for ( var i = 0; i < spriteImages.length; i++ ) {
				var img = spriteImages[i];
				// Set the texts you want to display to each slide 
				// in a sibling element of your image and edit accordingly
				if ( img.nextElementSibling ) {
					texts.push(img.nextElementSibling.innerHTML);
				} else {
					texts.push('');
				}
				spriteImagesSrc.push( img.getAttribute('src' ) );
			}
      		let stageH = $('#canv').height();
			const initCanvasSlideshow = new CanvasSlideshow({
				stageWidth:750,
				stageHeight:stageH,
				sprites: spriteImagesSrc,
				displacementImage: $('.filter_image').attr('src'),
				autoPlay: true,
				autoPlaySpeed: [10, 20],
				displaceScale: [5000, 10000],
				interactive: true,
				interactionEvent: 'click', // 'click', 'hover', 'both' 
				displaceAutoFit: false,
				dispatchPointerOver: true, // restarts pointerover 
				//wacky:true,
			});
			
			initCanvasSlideshow.active(0);
			// function active(id){
			// 	switch(id){
			// 		case 0:
			// 			initCanvasSlideshow.moveSlider(0)
			// 			TweenMax.fromTo( $('.ghost1') , 1 ,  {y:-500 , opacity:0} , {delay:2,y:1 , opacity:1 })
			// 			TweenMax.fromTo( $('.ghost2') , 1 ,  {y:500 , opacity:0} , {delay:2,y:1 , opacity:1 })
			// 		break;
			// 	}

			// }
		},
		pngFix() {
			const self = $(this);
			self.find(`img[src$=".png"], img[src$=".gif"]`).each(() => {
			this.style.filter =
			`progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='image',src='${this.src}')`;
			});
		},
		////////////
		// 選擇按鈕處理 //
		////////////
		
		////////////
		// 送出表單處理 //
		////////////
		
	},
	
};
</script>