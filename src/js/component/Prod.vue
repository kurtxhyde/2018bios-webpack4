<style lang="less" src="prod.less" scoped></style>
<template lang="pug">
.wrapper.relat(v-images-loaded:on.progress="imageProgress")
	
	.preload.abs
	.bg-all.abs
		
	.container.relat
		.title.title1.relat
			img.relat(src="../../img/dest/biologo.png")
		

		.btns.realt.btn-route
			.btn-j(data-id='1')
				img.relat(src="../../img/dest/prd-btn1.jpg")
			.btn-j(data-id='2')
				img.relat(src="../../img/dest/prd-btn2.jpg")
			.btn-j(data-id='4')
				img.relat(src="../../img/dest/prd-btn3.jpg")
			.btn-j(data-id='3')
				img.relat(src="../../img/dest/prd-btn4.jpg")
		.content.relat
			.part.part1.relat#part1
				.sec1.relat#sec1
					.bgx.abs.animobj
						img.relat(src= "../../img/dest/prd-part1.jpg")
					
					.tit.relat.animobj 
						p BIO水感舒緩
						p 維他命B5原液
					.ico.relat.animobj
						img(src="../../img/dest/prd-ico1.jpg")
					.sub.relat.animobj
						p 專為乾燥、脫屑及敏弱肌膚量身打造
					.desc.relat.animobj
						p 30ml / $950
					.prd.relat.animobj
						img(src="../../img/dest/prd-prd1.png")
				.sec2.relat#sec2
					.feature.relat.animobj
						p 化妝水後多一道
						p 肌膚更加穩定保濕
					.wave.relat.animobj
						img(src="../../img/dest/prd-wave2.png")
					.bubles.relat
						.bub1.abs.animobj
							img(src="../../img/dest/prd-bub1.png")
						.bub2.abs.animobj
							img(src="../../img/dest/prd-bub2.png")
				.sec3.relat#sec3
					.feature2.relat.animobj
						img(src="../../img/dest/prd-feature2.jpg")
				.sec3.relat#sec3a
					.feature3.relat
						.p.animobj
							img(src="../../img/dest/prd-ico2.jpg")
						.p.animobj
							img(src="../../img/dest/prd-ico2t.jpg")
						.feat-t-set.relat.animobj
							.ico.relat
								img(src="../../img/dest/prd-ico3.png")
							.feat-t.relat
								p 無添加Paraben防腐劑、精及香料。經皮膚測試，溫和配方適用於乾燥、脫屑及敏弱肌膚。
				.sec3.relat#sec3b
					.btns.relat
						a.animobj.btn-j.btn1.tracklink(data-ga="part1.web" ,href="https://www.bioessence.com.tw/products/bio-essence%E7%A2%A7%E6%AD%90%E6%96%AF-bio%E6%B0%B4%E6%84%9F%E8%88%92%E7%B7%A9%E7%B6%AD%E4%BB%96%E5%91%BDb5%E5%8E%9F%E6%B6%B230ml",target="_blank")
							img(src="../../img/dest/prd-btnweb.jpg")
							img.abs.ico(src="../../img/dest/prd-btnweb-ico.png")
						a.animobj.btn-j.btn2.tracklink(data-ga="part1.wat" , href="https://www.watsons.com.tw/bio%E6%B0%B4%E6%84%9F%E8%88%92%E7%B7%A9%E7%B6%AD%E4%BB%96%E5%91%BDb5%E5%8E%9F%E6%B6%B230ml/p/BP_158026?text=b5&page=0" , target="_blank")
							img(src="../../img/dest/prd-btnwat.jpg")
							img.abs.ico(src="../../img/dest/prd-btnwat-ico.png")
						.animobj.btn-j.btn3.btncoupon(data-ga="part1.coupon")
							img(src="../../img/dest/prd-btncoupon.jpg")
							img.abs.ico(src="../../img/dest/prd-btncoupon-ico.png")
			.part.part2.relat#part2
				.sec.sec4.relat
					.bgx.abs.animobj
						img.relat(src= "../../img/dest/prd-part2.jpg")
					
					.tit.relat.animobj 
						p BIO水感舒緩
						p 微礦能量噴霧
					.ico.relat.animobj
						img(src="../../img/dest/prd-ico11.jpg")
					.sub.relat.animobj
						p 敏弱肌專用健康水
					.desc.relat.animobj
						p 100ml / $300
						p 300ml / $680
					.prd.relat.animobj
						img(src="../../img/dest/prd-prd2.png")
				.sec.sec5.relat
					.feature.relat
						img.animobj(src="../../img/dest/prd-feature3.jpg")
						.feat-t-set.relat.animobj
							span 鹽分極少，不帶走肌膚水分，保濕力加倍。
							span.black 富含微量礦物元素與少量普通礦物元素，增加肌膚抵抗力，舒緩肌膚敏感。
						
						.feat-t-btn-set.relat
							.animobj.item.relat(data-expanded='true')
								.btn-j
									img(src="../../img/dest/prd-btn5.png")
									.plus
										.icon-bar
										.icon-bar.hr
								.desc
									p 獨特配方生物能量複合素™
									p 高科技活性能量注入
									p 有效肌活細胞，還原健康肌底
									p 肌膚更加穩定保濕
							.animobj.item.relat
								.btn-j
									img(src="../../img/dest/prd-btn6.png")
									.plus
										.icon-bar
										.icon-bar.hr 
								.desc 
									p 普通礦物元素少，能降低膚溫
									p 舒緩敏感發炎情形
							.animobj.item.relat

								.btn-j
									img(src="../../img/dest/prd-btn7.png")
									.plus
										.icon-bar
										.icon-bar.hr 
								.desc
									p 鹽含量少，不帶走肌膚水分
									p 補水效果更好
							.animobj.item.relat
								.btn-j
									img(src="../../img/dest/prd-btn8.png")
									.plus
										.icon-bar
										.icon-bar.hr 
								.desc
									p 超細緻噴霧水分子
									p 生物能量成分均勻滲透肌底
							.animobj.item.relat
								.btn-j
									img(src="../../img/dest/prd-btn9.png")
									.plus
										.icon-bar
										.icon-bar.hr 
								.desc
									p 豐富微量礦物元素和溫和pH值
									p 有效強化肌膚防禦力
					.btns.relat
						a.animobj.btn-j.btn1.tracklink(data-ga="part2.web" ,href="https://www.bioessence.com.tw/products/bio-essence%E7%A2%A7%E6%AD%90%E6%96%AF-bio%E6%B0%B4%E6%84%9F%E8%88%92%E7%B7%A9%E5%BE%AE%E7%A4%A6%E8%83%BD%E9%87%8F%E9%9B%99%E4%BB%B6%E7%B5%84-1" , target = "_blank")
							img(src="../../img/dest/prd-btnweb.jpg")
							img.abs.ico(src="../../img/dest/prd-btnweb-ico.png")
						a.animobj.btn-j.btn2.tracklink(data-ga="part2.wat" ,href="https://www.watsons.com.tw/bio%E6%B0%B4%E6%84%9F%E8%88%92%E7%B7%A9%E5%BE%AE%E7%A4%A6%E8%83%BD%E9%87%8F%E5%99%B4%E9%9C%A7300ml/p/BP_154858?text=BIO%E6%B0%B4%E6%84%9F%E8%88%92%E7%B7%A9%E5%BE%AE%E7%A4%A6%E8%83%BD%E9%87%8F%E5%99%B4%E9%9C%A7&page=0" , target = "_blank")
							img(src="../../img/dest/prd-btnwat.jpg")
							img.abs.ico(src="../../img/dest/prd-btnwat-ico.png")
						.animobj.btn-j.btn3.btncoupon(data-ga="part2.coupon" )
							img(src="../../img/dest/prd-btncoupon.jpg")
							img.abs.ico(src="../../img/dest/prd-btncoupon-ico.png")
			.part.part3.relat#part3
				.sec.sec6.relat
					.animobj.bgx.abs
						img.relat(src= "../../img/dest/prd-part3.jpg")
					
					.animobj.tit.relat 
						p BIO水感舒緩
						p 微礦控油噴霧
					.animobj.ico.relat
						img(src="../../img/dest/prd-ico111.jpg")
					
					.animobj.desc.relat
						p 100ml / $420
					.animobj.prd.relat
						img(src="../../img/dest/prd-prd3.png")
				.sec.sec7.relat
					.feature.relat
						img.animobj(src="../../img/dest/prd-feature33.jpg")
						.animobj.feat-t-set.relat
							span 以BIO水感舒緩微礦能量噴霧為基底， 再添加
							span.green 控油淨化配方：水楊酸&抗空污配方
							span ，減少毛孔堵塞，提高肌膚對環境傷害的保護力，有效控油，鎮靜肌膚 。
						.feat-t-btn-set.relat
							.animobj.item.relat(data-expanded='true')
								.btn-j
									img(src="../../img/dest/prd-btn10.png")
									.plus
										.icon-bar
										.icon-bar.hr
								.desc
									p 使用「包覆型水楊酸」溫和不刺激
									p 水楊酸可以輕鬆瓦解肌膚表面多餘的皮脂
									p 也能清潔毛孔
							.animobj.item.relat
								.btn-j
									img(src="../../img/dest/prd-btn11.png")
									.plus
										.icon-bar
										.icon-bar.hr
								.desc
									p 於肌膚上形成隱形屏障，對抗空污
									p 阻隔空氣懸浮微粒保護肌膚
									p 免受空氣污染所造成的傷害
					.animobj.feature.relat.featpart3
						img(src="../../img/dest/prd-feature-part3.jpg")
					.btns.relat
						a.animobj.btn-j.btn1.tracklink(data-ga="part3.web" ,href="https://www.bioessence.com.tw/products/bio-essence%E7%A2%A7%E6%AD%90%E6%96%AF-bio%E6%B0%B4%E6%84%9F%E8%88%92%E7%B7%A9%E5%BE%AE%E7%A4%A6%E4%BA%AE%E7%99%BD%E5%99%B4%E9%9C%A7100ml-1",target="_blank")
							img(src="../../img/dest/prd-btnweb.jpg")
							img.abs.ico(src="../../img/dest/prd-btnweb-ico.png")
						a.animobj.btn-j.btn2.tracklink(data-ga="part3.wat" ,href="https://www.watsons.com.tw/bio%E6%B0%B4%E6%84%9F%E8%88%92%E7%B7%A9%E5%BE%AE%E7%A4%A6%E6%8E%A7%E6%B2%B9%E5%99%B4%E9%9C%A7-100ml/p/BP_154851?text=BIO%E6%B0%B4%E6%84%9F%E8%88%92%E7%B7%A9%E5%BE%AE%E7%A4%A6%E6%8E%A7%E6%B2%B9%E5%99%B4%E9%9C%A7&page=0",target="_blank")
							img(src="../../img/dest/prd-btnwat.jpg")
							img.abs.ico(src="../../img/dest/prd-btnwat-ico.png")
						.animobj.btn-j.btn3.btncoupon(data-ga="part3.coupon" )
							img(src="../../img/dest/prd-btncoupon.jpg")
							img.abs.ico(src="../../img/dest/prd-btncoupon-ico.png")
			.part.part4.relat#part4
				.sec.sec8.relat
					.animobj.bgx.abs
						img.relat(src= "../../img/dest/prd-part4.jpg")
					
					.animobj.tit.relat 
						p BIO水感舒緩
						p 微礦亮白噴霧

					.animobj.ico.relat
						img(src="../../img/dest/prd-ico1111.jpg")
					
					.animobj.desc.relat
						p 100ml / $420
					.animobj.prd.relat
						img(src="../../img/dest/prd-prd4.png")
				.sec.sec9.relat
					.feature.relat
						img.animobj(src="../../img/dest/prd-feature3333.jpg")
						.animobj.feat-t-set.relat
							span 以BIO水感舒緩微礦能量噴霧為基底，再添加
							span.red 高濃度5%的維他命B3注入，是適合敏弱肌的有效濃度，
							span 有效改善暗沉，提亮膚色，使肌膚透出健康光澤。
							
						.feat-t-btn-set.relat
							.animobj.item.relat(data-expanded='true')
								.btn-j
									img(src="../../img/dest/prd-btn12.png")
									.plus
										.icon-bar
										.icon-bar.hr
								.desc
									p 獨特配方生物能量複合素™
									p 高科技活性能量注入
									p 有效肌活細胞，還原健康肌底
									p 肌膚更加穩定保濕
							
					.animobj.feature.relat.featpart3
						img(src="../../img/dest/prd-feature-part4.jpg")
					.btns.relat
						a.animobj.btn-j.btn1.tracklink(data-ga="part4.web" ,href="https://www.bioessence.com.tw/products/bio-essence%E7%A2%A7%E6%AD%90%E6%96%AF-bio%E6%B0%B4%E6%84%9F%E8%88%92%E7%B7%A9%E5%BE%AE%E7%A4%A6%E4%BA%AE%E7%99%BD%E5%99%B4%E9%9C%A7100ml",target="_blank")
							img(src="../../img/dest/prd-btnweb.jpg")
							img.abs.ico(src="../../img/dest/prd-btnweb-ico.png")
						a.animobj.btn-j.btn2.tracklink(data-ga="part4.wat" ,href="https://www.watsons.com.tw/bio%E6%B0%B4%E6%84%9F%E8%88%92%E7%B7%A9%E5%BE%AE%E7%A4%A6%E4%BA%AE%E7%99%BD%E5%99%B4%E9%9C%A7-100ml/p/BP_154848?search2=BIO",target="_blank")
							img(src="../../img/dest/prd-btnwat.jpg")
							img.abs.ico(src="../../img/dest/prd-btnwat-ico.png")
						.animobj.btn-j.btn3.btncoupon(data-ga="part4.coupon" )
							img(src="../../img/dest/prd-btncoupon.jpg")
							img.abs.ico(src="../../img/dest/prd-btncoupon-ico.png")
				.end
		.strip.abs.top
		.strip.abs.left
		.strip.abs.right
	.pop-coupon.fix.inv
		.content.relat
			img(src = "../../img/dest/coupon.jpg")
		.btn.btnclose
			img(src="../../img/dest/close.png")
</template>

<script>
//import $ from "jquery";
import { mapActions, mapMutations } from 'vuex';
import userForm from './userForm.vue';
import {STEP} from '../utils/component.js';
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
			let count = 0
			$('.btns .btn-j .ico').not('.btn3 .ico').each(function(){
				let _x = 0
				let __x = 30
				TweenMax.fromTo($(this) , .4 ,  {x:_x} , {delay:.5 + count *.1 , x:__x  ,yoyo:true , repeat:-1,ease:Linear.easeNone , repeatDelay:.1})
				count++
			})
			

			window.onscroll = function() {_scrollHandle();}
			function _scrollHandle() {
			    let top = $(window).scrollTop();
			   // console.log('top:' + top)
			    GLOBAL.top = top;		    
			}
			_scrollHandle();
			
			this.STEPS =
			[new STEP("#sec1", "#sec2" ,cb),
			new STEP("#sec2", "#sec3" ,cb),
			new STEP("#sec3", "#sec3a" ,cb),
			new STEP("#sec3a", "#sec3b" ,cb),
			new STEP("#sec3b", ".sec4" ,cb),


			new STEP(".sec4", ".sec5" ,cb),
			new STEP(".sec5", ".sec6" ,cb),
			new STEP(".sec6", ".sec7" ,cb),
			new STEP(".sec7", ".sec8" ,cb),
			new STEP(".sec8", ".sec9" ,cb),
			new STEP(".sec9", ".end" ,cb)]

        
        
        function cb(typ , SEC){
             if(typ == true){
             	console.log('SEC...' + SEC);

             	if(SEC =="#sec1"){
             		GLOBAL.ga.GT( '/product'  , '.pv.part1')
             	}else if (SEC==".sec4"){
             		GLOBAL.ga.GT( '/product'  , '.pv.part2')
             	}
             	else if (SEC==".sec6"){
             		GLOBAL.ga.GT( '/product'  , '.pv.part3')
             	}
           		else if (SEC==".sec8"){
           			GLOBAL.ga.GT( '/product'  , '.pv.part4')
           		}

             	animFac(true ,SEC);
             }else{
                animFac(typ ,SEC);
             }
        }
        function animFac(typ,SEC){
       
        const ease = Cubic.easeOut
        if(typ){
            switch(SEC){
            	
                default:
                {
                	let dom = $(SEC);
                	let count =0 ;
                	dom.find('  .animobj').each(function(){
                		TweenMax.to($(this) , .5, {delay:.1 * count ,y:0,opacity:1,scaleX:1,scaleY:1,ease:Sine.easeOut})
                		count++
                	})

                }
				break;
            }
            
        }else{
            switch(SEC){
            	
                default:
                {
                    let dom = $(SEC);
                	let count =0 ;
                	dom.find(' .animobj').each(function(){
                		TweenMax.to($(this) , .5, {y:30,opacity:.7 ,scaleX:1.01,scaleY:1.01,ease:Cubic.easeOut})
                	})

                }
				break;
                
            }
        }

    	}



		},
		killIntervals (){
			for(let i in this.STEPS){
				this.STEPS[i].kill();
			}
			
		},
		bind(){
			$('.btn-route >.btn-j').click(function(){
				let id = $(this).data('id');
				route('part' + id)
			})

			$('.tracklink').click(function(e){
				e.preventDefault();
				let url  = $(this).attr('href');
				let ga = $(this).data('ga');
				GLOBAL.ga.GT( '/product'  , '.btn.'+ga)
				window.open(url , '_blank');
				return false;
			})
			
			$('.btncoupon').click(function(){
				let id = $(this).data('id');

				let ga = $(this).data('ga');
				GLOBAL.ga.GT( '/product'  , '.btn.'+ga)
				$('.pop-coupon').fadeIn(500);
			})
			$('.pop-coupon .btnclose').click(function(){
				$('.pop-coupon').fadeOut(500);
			})

			//init
			let count =0 
			$('.feat-t-btn-set .item').each(function(){
				count++;
				let desc = $(this).find('.desc');
				let h = desc.height();
				$(this).attr('data-expanded' , 'false');
				$(this).attr('data-h' , h);
				$(this).attr('data-id' , count);
				desc.css ('height' , 0);
				
				$(this).find('.btn-j').click(function(){
					clkhandle($(this).parent());
				})
			})

			function clkhandle(dom){
				console.log('clk...'+dom.attr('data-expanded'))

				let target = dom.data('id');

				$('.feat-t-btn-set .item').each(function(){
					let id = $(this).data('id');
					if(target == id){
						if( $(this).attr('data-expanded' ) == 'false'){
							active($(this))	
						}else{
							deactive($(this))
						}
						
					}else{
						deactive($(this))
					}
					
				})
			}
			function active(dom){
				let hr = dom.find('.hr');
				let h  = dom.data('h')
				dom.attr('data-expanded' , 'true');	
				TweenMax.to(hr , .7,  {rotation:0,ease:Expo.easeOut});

				TweenMax.to(dom.find('.desc') , .7 , {height:h + 20,ease:Expo.easeOut})
			}
			function deactive(dom){
				let hr = dom.find('.hr');
				dom.attr('data-expanded' , 'false');	
				TweenMax.to(hr , .7,  {rotation:90,ease:Expo.easeOut})
				TweenMax.to(dom.find('.desc') , .7 , {height:0,ease:Expo.easeOut})
			}

		}

		
	},
};


function route(hash) {

    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        const speed = 1;
        let top;
        top = (hash == 0)? 0: $("#"+hash).offset().top;

        let t =  1500//Math.abs(GLOBAL.top - top) / speed 

        //TweenMax.set(window, {scrollTo:{y:top}});
        $body.animate({
            scrollTop: top 
        }, t);


}
</script>