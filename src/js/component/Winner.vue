<style lang="less" src="winner.less" scoped></style>
<template lang="pug">
.wrapper.relat(v-images-loaded:on.progress="imageProgress")
	.preload.abs
	.container.relat
		.title.title1.relat
			
			.blood1.abs
				img(src="../../img/dest/winner-blood.png")
				
			.blood2.abs
				img(src="../../img/dest/exam-blood1.png")
			img.relat(src="../../img/dest/winner-tit.png")
		.sub.relat
			img.sub1(src="../../img/dest/winner-sub.png")
		.hand.abs
			img(src="../../img/dest/hand.png")
		.content.relat
			img(src="../../img/dest/winners.png")
</template>

<script>
//import $ from "jquery";
import { mapActions, mapMutations } from 'vuex';
import userForm from './userForm.vue';

//import svgAnim from './svgAnim.vue';

import {GLOBAL} from '../utils/config.js';
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
  				//scrollTop()
			}
			function scrollTop() {
        		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

        		let top = 0;

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
			let count =0 , context = this ;
			$('.title').each(function(){
				TweenMax.fromTo($(this) , 2 ,{y:0, opacity:0} , {delay:1.5 + count *.5,y:0 ,opacity:1})	
				count ++
			})
			TweenMax.fromTo ($('.blood1'),3, {scaleY:0 } , {delay:1 , scaleY:1 , transformOrigin:'50% 0%',ease:Sine.easeOut})
			TweenMax.fromTo ($('.blood2'),.7, {scaleX:0,scaleY:0 } , {delay:1.5 , scaleX:1,scaleY:1 , transformOrigin:'0% 70%',ease:Quad.easeIn})
			count =0
			$('.sub .sub1, .content').each(function(){
				TweenMax.fromTo($(this) , 1 ,{y:0 ,opacity:0} , {delay:2 + count * .2 ,y:0,opacity:1})	
				count ++
			})
			
			$('.hand').each(function(){
				TweenMax.fromTo($(this) , .7 ,{y:20 ,opacity:0} , {delay:2.5 ,y:0,opacity:1})	
				
			})
			function bind(){
				
				ring.mousedown(function(){
					GLOBAL.ga.GT( '/exam'  , '.btn.go')
					$('.sub .sub2').each(function(){
						TweenMax.fromTo($(this) , .5 ,{y:20 ,opacity:0} , {delay:.5,y:0,opacity:1})
						
					})
					$('.sub .sub1').each(function(){
						TweenMax.to($(this) , .5 ,{y:20 ,opacity:0} )	
						
					})
					
					TweenMax.killTweensOf($('.circ .ring, .circ .bg'));
					
					TweenMax.set(line , {opacity:1});
					
					TweenMax.to(line , 1.5, {delay:.5, y:450 , ease:Linear.easeNone,repeat:-1 , yoyo:true , onUpdate:function(){
						meter.setRandom();
					}} );

					TweenMax.set( glowup, {opacity:0} )
					TweenMax.to(glowup , 1.5 ,  { delay:0 , opacity:1 , ease:Expo.easeInOut , repeat:-1 , yoyo:true } );
					TweenMax.set( glowdown, {opacity:1} )
					TweenMax.to(glowdown , 1.5 , {delay:0 , opacity:0 , ease:Expo.easeInOut , repeat:-1 , yoyo:true } );
					/*A*/
					setTimeout(function(){
						 let rnd = Math.ceil(Math.random() * 4)
						 context.$router.push('result'+rnd );

					}, 3000 * Math.random() + 4000)


					ring.off('mousedown');

				})
			}
			
  		// 	this.glitch1opts = {dom:$('.title1 > img.glitch') , typ:true, count :0 , intervals :[] }
  		// 	this.glitch2opts = {dom:$('.ghost3 > img') , typ:false, count :0 , intervals :[] }
  			
  		// 	setTimeout( function(){
  		// 		glitch(context.glitch1opts)
				// vibrate(context.glitch2opts)
  		// 	}, 3000)
  			
  			

			function glitch(opt){
				loop(opt)
				function loop(opt){
					let ifrest 
					if(opt.count > 20 && Math.random() > .6 ){
						ifrest = true;
						opt.count = 0 ;
					}else{
						ifrest = false;
					}
					
					if(!opt.typ || ifrest){
						TweenMax.set(opt.dom , {opacity:1});
						TweenMax.set(opt.dom , {x: 0, y:0});
						opt.typ = true;
					}else{
						let opa = Math.random() * .6 + .1;
						let offest = 15/opa 
						TweenMax.set(opt.dom , {opacity:opa });

						TweenMax.set(opt.dom , {x: Math.random()* offest - offest*.5});
						//TweenMax.set(opt.dom , {y: Math.random()*5 -2});
						opt.typ = false;
					}
					opt.count++
					opt.intervals.push (setTimeout(function(){loop(opt)} , (ifrest)? Math.random()*3000 + 3000 : 20 + Math.random()*30 ))
				}
			}
			function vibrate(opt){
				loop(opt)
				function loop(opt){
					
					if(opt.count > 20 && Math.random() > .6 ){
						
						opt.count = 0 ;
					}else{
						
					}
					
					if(!opt.typ){
						TweenMax.set(opt.dom , {opacity:1});
						TweenMax.set(opt.dom , {x: 0, y:0});
						opt.typ = true;
					}else{
						
						let offest = 10 
						

						TweenMax.set(opt.dom , {x: Math.random()* offest - offest*.5});
						TweenMax.set(opt.dom , {y: Math.random()*5 -2});
						opt.typ = false;
					}
					opt.count++
					opt.intervals.push (setTimeout(function(){loop(opt)} , 50 + Math.random()*100 ))
				}
			}
		},
		killIntervals (){
			let context = this;
			
			for (let i in context.glitch1opts.intervals){
				clearTimeout (context.glitch1opts.intervals[i]);
				clearTimeout (context.glitch2opts.intervals[i]);
			}
			
		},
		bind(){
			let context = this;
			
		}

		
	},
};


function meterRun(){
	const dom = $('.cord') , num1 = dom.find('.num1'), num2 = dom.find('.num2'), num3 = dom.find('.num3');

	this.setRandom=function(){
		if(Math.random() >.7)
			updateNumber(num1  , Math.ceil(Math.random() * 99))
		if(Math.random() >.8)
			updateNumber(num2  , Math.ceil(Math.random() * 99))
		if(Math.random() >.7)
			updateNumber(num3  , Math.ceil(Math.random() * 99))
	}
	function updateNumber(dom , val){
		dom.html(val);
	}
	function init(){
		updateNumber(num1  , 0)
		updateNumber(num2  , 0)
		updateNumber(num3  , 0)
	}
	init();
}


</script>