<style lang="less" src="index.less"></style>


<template lang="pug">

//-input#page.inv(type="text",value = "index")

.wrapper.relat(v-images-loaded:on.progress="imageProgress")
	.preload.abs
	
	.container.relat
		.title.title1.relat
			.blood1.abs
				img(src="../../img/dest/blood1.png")
			
			img.relat(src="../../img/dest/index-tit-1.png")
			
		.title.title2.relat
			.blood2.abs
				img(src="../../img/dest/blood2.png")
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
	


			
</template>

<script>
//import $ from "jquery";
import { mapActions, mapMutations } from 'vuex';
import userForm from './userForm.vue';

//import svgAnim from './svgAnim.vue';


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
		console.log('destroy.........');
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
			console.log('starting anim....');
			let count =0;
			$('.title').each(function(){
				TweenMax.fromTo($(this) , 2 ,{opacity:0} , {delay:1.5 + count *.2 ,opacity:1})	
				count ++
			})

			TweenMax.fromTo ($('.blood1'),5, {scaleY:0 } , {delay:2 , scaleY:1 , transformOrigin:'50% 0%',ease:Sine.easeOut})
			TweenMax.fromTo ($('.blood2'),5, {scaleY:0 } , {delay:2.5 , scaleY:1 , transformOrigin:'50% 00%',ease:Sine.easeOut})

			TweenMax.fromTo ($('.blood3'),6, {scaleY:0 } , {delay:3.5 , scaleY:1 , transformOrigin:'50% 0%',ease:Sine.easeOut})



			count =0
			$('.sub').each(function(){
				TweenMax.fromTo($(this) , 2 ,{y:20 ,opacity:0} , {delay:3.5 + count *.4 ,y:0,opacity:1})	
				count ++
			})
			$('.btn-j').each(function(){
				TweenMax.fromTo($(this) , .5 ,{opacity:0} , {delay:4 + count *.4 ,y:0,opacity:1})	
				count ++
			})
			// const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  	// 		window.requestAnimationFrame = requestAnimationFrame;
  			this.glitch1opts = {dom:$('.title1') , typ:true, count :0 , intervals :[] }
  			this.glitch2opts = {dom:$('.title2') , typ:false, count :0 , intervals :[] }

  			setTimeout( function(){
  				glitch()
				glitch({dom:$('.title2') , typ:false , count :0})
  			}, 5000)
			
			function glitch(opt){
				loop(opt)
				function loop(opt){
					let ifrest 
					if(opt.count > 15 && Math.random() > .7 ){
						ifrest = true;
						opt.count = 0 ;
					}else{
						ifrest = false;
					}
					
					if(!opt.typ || ifrest){
						TweenMax.set(opt.dom , {opacity:1});
						TweenMax.set(opt.dom , {x: 0});
						opt.typ = true;
					}else{
						TweenMax.set(opt.dom , {opacity:.5 + Math.random() * .4});	
						TweenMax.set(opt.dom , {x: Math.random()* 6 - 3});
						opt.typ = false;
					}
					opt.count++
					this.glitch1opts.push (setTimeout(function(){loop(opt)} , (ifrest)? Math.random()*2000 + 2000 : 10 + Math.random()*40 ))
				}
			}
		},
		bind(){
			$('.btn-j').each(function(){
				$(this).hover(function(){
					TweenMax.to($(this) , .1 ,{scaleX:.98,scaleY:.98} )	
				} , function(){
					TweenMax.to($(this) , .1 ,{scaleX:1,scaleY:1} )	
				})
			})
		}

		
	},
};





</script>