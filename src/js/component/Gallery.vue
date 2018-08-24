<style lang="less" src="gallery.less" scoped></style>
<template lang="pug">
.wrapper.relat(v-images-loaded:on.progress="imageProgress")
	
	.preload.abs
	.bg-all.abs
		
		.frame.abs
	.container.relat
		
		.title.title1.relat
			.blood1.abs
				img(src="../../img/dest/gallery-blood.png")
			.blood2.abs
				img(src="../../img/dest/exam-blood1.png")
			img.relat(src="../../img/dest/gallery-tit.png")
		

		.list.realt
			router-link.btn-j.btn1(	data-ga="ghost-bus",data-href="",  :to="{name:'ghost-bus' , params:{typ:'gallery'}}")
				img.relat(src="../../img/dest/gallery-bg1.png")
				.t.abs
					img(src="../../img/dest/gallery-t1.png")
			router-link.btn-j.btn2(	data-ga="red-robe",data-href="",  :to="{name:'red-robe' , params:{typ:'gallery'}}")
				img(src="../../img/dest/gallery-bg2.png")
				.t.abs
					img(src="../../img/dest/gallery-t2.png")
			router-link.btn-j.btn3(	data-ga="hospital",data-href="",  :to="{name:'hospital' , params:{typ:'gallery'}}")
				img(src="../../img/dest/gallery-bg3.png")
				.t.abs.coming
					img(src="../../img/dest/gallery-t3.png")
			router-link.btn-j.btn4(	data-ga="office",data-href="",  :to="{name:'office' , params:{typ:'gallery'}}")
				img(src="../../img/dest/gallery-bg4.png")
				.t.abs.coming
					img(src="../../img/dest/gallery-t4.png")
		

		
		
	


			
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
		
		window.scrollTo(0, 0)
		
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
				TweenMax.fromTo($(this) , .7 ,{y: 30 , opacity:0} , {delay:1.2 + count *.2 ,y:0,opacity:1,ease:Sine.easeOut})	
				count ++
			})
			this.glitch1opts = {dom:$('.btn1 > .t >img') , typ:true, count :0 , intervals :[] }
  			this.glitch2opts = {dom:$('.btn2 > .t >img') , typ:false, count :0 , intervals :[] }
  			this.glitch3opts = {dom:$('.btn3 > .t >img') , typ:false, count :0 , intervals :[] }
  			this.glitch4opts = {dom:$('.btn4 > .t >img') , typ:false, count :0 , intervals :[] }
  			let context = this;
  			
  			
  			glitch(context.glitch1opts);
  			glitch(context.glitch3opts)
  			setTimeout( function(){
				glitch(context.glitch2opts)
				
				glitch(context.glitch4opts)
  			}, 3000)



			
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
						let offest = 5/opa 
						TweenMax.set(opt.dom , {opacity:opa });
						TweenMax.set(opt.dom , {x: Math.random()* offest - offest*.5});
						opt.typ = false;
					}
					opt.count++
					opt.intervals.push (setTimeout(function(){loop(opt)} , (ifrest)? Math.random()*3000 + 5000 : 20 + Math.random()*30 ))
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
			for (let i in context.glitch3opts.intervals){
				clearTimeout (context.glitch3opts.intervals[i]);
			}
			for (let i in context.glitch4opts.intervals){
				clearTimeout (context.glitch4opts.intervals[i]);
			}
			
		},
		bind(){
			
			
		}

		
	},
};



</script>