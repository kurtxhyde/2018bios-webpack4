<style lang="less" src="index.less" scoped></style>


<template lang="pug">

//-input#page.inv(type="text",value = "index")

.wrapper.relat(v-images-loaded:on.progress="imageProgress")
	.preload.abs
	
	.container.relat
		.title.title1.relat
			.shadow.abs
				img(src="../../img/dest/index-tit-1-s.png")
			.blood1.abs
				img(src="../../img/dest/blood1.png")
			
			img.relat(src="../../img/dest/index-tit-1.png")
			img.abs.glitch(src="../../img/dest/index-tit-1.png")
			
		.title.title2.relat
			.shadow.abs
				img(src="../../img/dest/index-tit-2-s.png")
			.blood2.abs
				img(src="../../img/dest/blood2.png")
			.blood3.abs
				img(src="../../img/dest/blood3.png")

			img.relat(src="../../img/dest/index-tit-2.png")
			img.abs.glitch(src="../../img/dest/index-tit-2.png")

		.sub.sub1.relat
			img(src="../../img/dest/index-sub1.png")
		.sub.sub2.relat
			img(src="../../img/dest/index-sub2.png")
		.sub.sub3.relat
			img(src="../../img/dest/index-sub3.png")
		a.btn-j.btn1(href="#/exam")
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

		if(device.desktop()){
  				//scrollCenter();
			}
			function scrollCenter() {
        		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

        		let top = 300;

        		//TweenMax.set(window, {scrollTo:{y:top}});
        		$body.delay(1500).animate({
        		    scrollTop: top -120
        		}, 0);
        		


    		}
	},
	mounted:function(){
		MAX_img_count = $('.wrapper img').length;
		console.log("MAX_img_count:" + MAX_img_count)
		img_count = 0;
		
		
		
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
			console.log('starting anim....');
			let count =0;


			
			$('.title').each(function(){
				TweenMax.fromTo($(this) , 2 ,{y:0, opacity:0} , {delay:1.5 + count *.5,y:0 ,opacity:1})	
				count ++
			})

			TweenMax.fromTo ($('.blood1'),3, {scaleY:0 } , {delay:2 , scaleY:1 , transformOrigin:'50% 0%',ease:Sine.easeOut})
			TweenMax.fromTo ($('.blood2'),5, {scaleY:0 } , {delay:2.5 , scaleY:1 , transformOrigin:'50% 00%',ease:Sine.easeOut})

			TweenMax.fromTo ($('.blood3'),3, {scaleY:0 } , {delay:3.5 , scaleY:1 , transformOrigin:'50% 0%',ease:Sine.easeOut})



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
  			this.glitch1opts = {dom:$('.title1 > img.glitch') , typ:true, count :0 , intervals :[] }
  			this.glitch2opts = {dom:$('.title2 > img.glitch') , typ:false, count :0 , intervals :[] }
  			let context = this;
  			
  			setTimeout( function(){
  				
  				glitch(context.glitch1opts)
				glitch(context.glitch2opts)
  			}, 3000)
  			
			
			function glitch(opt){
				loop(opt)
				function loop(opt){
					let ifrest 
					if(opt.count > 20 && Math.random() > .8 ){
						ifrest = true;
						opt.count = 0 ;
					}else{
						ifrest = false;
					}
					
					if(!opt.typ || ifrest){
						TweenMax.set(opt.dom , {x: 0, y:0,opacity:1});
						opt.typ = true;
					}else{
						let opa = Math.random() * .5 + .3;
						let offest = 10/opa 
						TweenMax.set(opt.dom , {opacity:opa });

						TweenMax.set(opt.dom , {x: Math.random()* offest - offest*.5});
						//TweenMax.set(opt.dom , {y:0});
						opt.typ = false;
					}
					opt.count++
					opt.intervals.push (setTimeout(function(){loop(opt)} , (ifrest)? Math.random()*3000 + 3000 : 20 + Math.random()*20 ))
				}
			}
		},
		killIntervals (){
			let context = this;
			
			for (let i in context.glitch1opts.intervals){
				clearTimeout (context.glitch1opts.intervals[i]);
			}
			for (let i in context.glitch2opts.intervals){
				clearTimeout (context.glitch2opts.intervals[i]);
			}
		},
		bind(){
			let context = this;
			$('.btn-j').each(function(){
				$(this).hover(function(){
					TweenMax.to($(this) , .3 ,{scaleX:.98,scaleY:.98,ease:Expo.easeOut} )	
				} , function(){
					TweenMax.to($(this) , .3 ,{scaleX:1,scaleY:1,ease:Expo.easeOut} )	
				})
			})
			$('.btn-j').click(function(){
				//context.killIntervals();
			})
		}

		
	},
};





</script>