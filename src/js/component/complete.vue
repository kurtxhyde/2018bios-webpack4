<style lang="less" src="comp.less" scoped></style>
<template lang="pug">
.wrapper.relat(v-images-loaded:on.progress="imageProgress")
	
	.preload.abs
	.bg-all.abs
		.frame.abs
	.container.relat
		
		.title.title1.relat
			.blood1.abs
				img(src="../../img/dest/form-blood.png")
			.blood2.abs
				img(src="../../img/dest/exam-blood1.png")
			img.relat(src="../../img/dest/complete-title.png")
		.sub.relat
			img.relat(src="../../img/dest/complete-sub.png")
		
		a.btn-j.relat.btngallery(href="#/gallery")
			img(src="../../img/dest/index-btn-1.png")
		a.btn-j.relat.btnexam.inv(href="#/exam")
			img(src="../../img/dest/index-btn-2.png")
		a.btn-j.btn2.relat(href="#/product")
			img(src="../../img/dest/complete-btn.png")
		

		
		
	


			
</template>

<script>
//import $ from "jquery";
import { mapActions, mapMutations } from 'vuex';
import userForm from './userForm.vue';
import { getCookie} from '../utils/common.js';
//import svgAnim from './svgAnim.vue';


import imagesLoaded from 'vue-images-loaded';


let MAX_img_count ;
let img_count = 0;

let prev;
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
		prev = getCookie('prev');
		console.log('prev .... ' + prev);
		if(prev == 'exam'){
			$('.btngallery').show();
			$('.btnexam').hide();
		}else{
			$('.btngallery').hide();
			$('.btnexam').show();
		}
		
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
			TweenMax.to($('.bg-all') , 1 , {delay:1, opacity:1});


			let title = $('.title >img') , t_sub = $('.title .sub') ,sub = $('.container > .sub') , blood1 =  $('.blood1') , blood2 =  $('.blood2') , btn1 = $('.btn-j.btn1')  , btn2 = $('.btn-j.btn2') ;

			TweenMax.fromTo(title , 1, {y:30 , opacity:0},{delay:.5 ,y:0 , opacity:1,ease:Sine.easeOut})
			
			
			TweenMax.fromTo(sub , 1 , {opacity:0 , y:20},{delay:1.5,y:0 , opacity:1,ease:Sine.easeOut})

			
			TweenMax.fromTo (blood1 ,3, {opacity:0 ,scaleY:0 } , {delay:1 , scaleY:1 ,opacity:1 , transformOrigin:'50% 0%',ease:Sine.easeOut})

			TweenMax.fromTo (blood2 ,.8, {opacity:0 ,scaleX:0,scaleY:0 } , {delay:.8 , scaleX:1,scaleY:1 ,opacity:1 , transformOrigin:'0% 100%',ease:Quad.easeIn})
			let count =0
			
			$('.btn-j').each(function(){
				TweenMax.fromTo($(this) , 1 ,{y: 30 , opacity:0} , {delay:1 + count *.2 ,y:0,opacity:1,ease:Sine.easeOut})	
				count ++
			})
		},
		killIntervals (){
			
			
		},
		bind(){
			
			
		}

		
	},
};



</script>