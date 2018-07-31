<style lang="less" src="rule.less" scoped></style>


<template lang="pug">

//-input#page.inv(type="text",value = "index")

.wrapper.relat(v-images-loaded:on.progress="imageProgress")
	.preload.abs

	.deco.abs
		
	.container.relat
		.sec1.relat
			.row
	footerComp


			
</template>

<script>

import { mapActions, mapMutations } from 'vuex';


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
		
		footerComp,
	},
	
	created:function(){
		if(MAX_img_count!=0)
		this.showPageLoading(true);
		else
		this.showPageLoading(false);
	
	},
	mounted:function(){
		const context = this
		MAX_img_count = $('.wrapper img').length;
		console.log("MAX_img_count:" + MAX_img_count)
		img_count = 0;

		$('.btn-winner').click(function(){
			context.showWinner(true);
		})

	},
	methods: {
		...mapActions(['showPageLoading']),
		...mapMutations(['percentLoading','videoplayed' ,'showWinner']),
		

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

		
		
	},
};





</script>