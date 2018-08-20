<style lang="less" src="rule.less" scoped></style>
<template lang="pug">
.wrapper.relat(v-images-loaded:on.progress="imageProgress")
	
	.preload.abs
	.bg-all.abs
		.abs.btm
			img(src="../../img/dest/rule-btm.png")
		.frame.abs
	.container.relat
		
		.title.title1.relat
			.blood1.abs
				img(src="../../img/dest/rule-blood.png")
			.blood2.abs
				img(src="../../img/dest/exam-blood1.png")
			img.relat(src="../../img/dest/rule-tit.png")
		.content
			p 活動日期：2018/08/21-2018/09/17 23:59截止。
			p 活動辦法：
			ul 
				li 活動辦法依本網站之公佈為準。
				li 完成網站肌膚檢測分享結果或分享都市傳說作品，填寫資料，就有機會參加抽獎。
				li 活動獎項與贈獎方式：
					p (1) 獎項：「BIO水感舒緩維他命B5原液30ml」乙組，共計20組。
					p (2) 本活動單位將於2018年09月21日公布得獎名單於活動網站，並於2018年09月26日以得獎者留下之電話或E-mail通知得獎者，得獎者需於2018年10月01日前以主辦單位規定之方式回覆確認得獎資料。
					p (3) 每位網友僅限一次得獎機會，不得重覆中獎。
				li 注意事項：
					p (1) 如資料填寫錯誤、不完整或未在主辦單位規定時間內回覆中獎通知者，視為放棄，主辦單位不另行通知。
					p (2) 獎項詳細內容與規格、顏色皆以實物為準，網頁產品包裝/行銷宣傳佈置物等，獎項圖片(示)僅供參考，中獎者亦不得要求獎項更換或轉讓。
					p (3) 依中華民國稅法相關規定，獎項價值在新台幣1,000元以上者免扣繳所得稅，仍須檢附中獎收據及身份證正反面影本以申報所得；超過新台幣20,001元以上者，得獎者需依規定填寫繳交相關收據並先行扣繳10%機會中獎所得稅。得獎人若不願意配合，則視為自動棄權，不具得獎資格。
					p (4) 參加本活動前，請務必詳閱本活動辦法內容，當您提供相關資料參加本活動時表示已同意『 蒐集個人資料告知事項與書面同意書 』內容。
					p (5) 參加者填寫或提出之資料均為真實，且未冒用或盜用任何第三人之資料，如冒用或盜用任何第三人之資料之法律責任由參加者自行負責，概與主辦單位無關。主辦單位保留隨時修正、暫停或終止本活動之一切權利，如有變動並將另行公告於活動網站。
					p (6) 本活動如有任何因電腦、網路、電話、技術或其他不可歸責於主辦單位之事由，而使參與本活動者所登錄之資料有所遺失、錯誤、無法辨識或毀損所導致資料無效之狀況，主辦單位及活動小組不負任何法律責任。參加者與得獎者亦不得異議。主辦單位將不做任何通知。
					p (7) 主辦單位保留隨時修正、暫停或終止本活動與贈品更換之一切權利，如有變動並將另行公告於活動網站。
					p (8) 本活動僅限於設籍於台灣、金門、澎湖、馬祖地區者參加。
			p.privacy 依據個人資料保護法等相關規定，以下告知事項請台端詳閱：
			ul 
				li 蒐集個人資料公司：沃盛有限公司(以下簡稱本公司)
				li 蒐集之目的：行銷或促銷活動。
				li 個人資料之類別：包括個人資料中之識別類（辨識個人者中之FB帳號、姓名、 電話、地址）
				li 個人資料利用之期間：自台端參加碧歐斯BIO水感舒緩維他命B5原液上市宣傳活動之日起至活動結束後三個月止。
				li 個人資料利用之地區：本公司營運範圍，僅限於台灣、金門、澎湖、馬祖等地區利用，且不會移轉至其他境外地區利用。
				li 個人資料利用之對象及方式：由本公司該業務承辦人員於辦理該活動之特定目的(含獎項贈送)必要範圍內，依通常作業所必要之方式利用此個人資料。 
				li 依個人資料保護法第三條規定台端得行使之權利及方式：台端得向碧歐斯粉絲團提出申請，以查詢、閱覽、製給複製本；或補充／更正、請求停止蒐集、處理、利用或刪除個人資料內容之一部或全部。（註：參加人申請查詢、閱覽、製給複製本時，將酌收必要成本費用。）
				li 台端填寫個人資料後，以任何方式遞送至本公司收執時，均視為台端已同意其所填寫之個人資料，供本公司於辦理碧歐斯BIO水感舒緩維他命B5原液上市宣傳活動之特定目的必要範圍內處理及利用；此外，台端可自行決定是否填寫相關之個人資料欄位，若台端選擇不願填寫，將無法參加本次活動所提供之相關服務。
				li 個人資料安全措施：本公司將依據相關法令之規定建構完善措施，保障台端個人資料之安全


		
		
		

		
		
	


			
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
			
		},
		killIntervals (){
			
			
		},
		bind(){
			
			
		}

		
	},
};



</script>