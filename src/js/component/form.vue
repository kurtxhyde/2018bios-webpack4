<style lang="less" src="form.less" scoped></style>
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
			img.relat(src="../../img/dest/form-title.png")
		.sub.relat
			img.relat(src="../../img/dest/form-sub.png")
		.form#form
			form(autocomplete="off")
				.form-group.row.inputname
					label.col-xs-4.col-sm-4.col-form-label(for="cname",) 
						img(src="../../img/dest/label1.png")
					.col-xs-8.col-sm-8
						input.form-control#cname(type="text",placeholder="請輸入姓名",data-ph="請輸入姓名",v-model="cname")
				.form-group.row.inputtel
					label.col-xs-4.col-form-label(for="tel")
						img(src="../../img/dest/label2.png") 
					.col-xs-8
						input.form-control#tel(type="text",placeholder="請輸入手機號碼",data-ph="請輸入手機號碼",v-model="telnum")
				.form-group.row.inputeml
					label.col-xs-4.col-form-label(for="eml") 
						img(src="../../img/dest/label3.png")
					.col-xs-8
						input.form-control#eml(type="text",placeholder="請輸入e-mail",data-ph="請輸入e-mail",v-model="eml")
				
				
				.form-check.relat
					input.form-check-input#checkbox(type="checkbox" , v-model="checkedPrivate" )
					label(for="checkbox") <a href="#/rule" target="_blank" class="" data-ga="privateAgree"><img src="../../img/dest/privacy.png"></a>
				
				.btn-j.btn-submit.relat(v-on:click="submit")
					img(src="../../img/dest/form-btn.png")
		

		
		
	


			
</template>

<script>
//import $ from "jquery";
import { mapActions, mapMutations } from 'vuex';
import userForm from './userForm.vue';
import {GLOBAL} from '../utils/config.js';
import {FB_ASSET} from '../utils/fb_assets.js';

//import svgAnim from './svgAnim.vue';


import imagesLoaded from 'vue-images-loaded';


let MAX_img_count ;
let img_count = 0;
let fb = new FB_ASSET();

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
		submit(){
			let context = this;
			console.log('fb name ...' + GLOBAL.fbname)
			FormHandle();
			function  FormHandle(){
             let tof = validator();
             const DOM = $('.form form');

            
            console.log('sending data...');
            let cName = DOM.find('#cname');
            let tel = DOM.find('#tel');
            let email = DOM.find('#eml');
            // let babyname = DOM.find("#babyname");
            // console.log('birthtyp...' + birthtyp)
            if (tof) {
                //$("#loadingajax").show();
                $.post(`${GLOBAL.api_root}api/?mode=savedata`, {
                        name: cName.val(),
                        tel: tel.val(),
                        email: email.val(),
                        fbname: GLOBAL.fbname,
                        
                    },
                    (pResponse) => {
                        $("#loadingajax").hide();
                        //$('#loadingajax').fadeOut(400);
                        if (pResponse.state == '1') {
                            alert('資料成功送出！')
                            let id = pResponse.data
                            
                            setTimeout(function(){
                            	context.$router.replace('product');	
                            } ,200)
                        } else {
                            let msg = "出現錯誤，請稍後再試！"
                            alert(msg);
                        }
                    }, 'json');

            }

        }
        function validator(){
            
            function checkEmail(__email) {
                /* eslint max-len: ["error", 180] */
                /* eslint no-useless-escape: 0 */
                const EmailCheck = new RegExp(/^([a-zA-Z0-9]+)([\.\-\_]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9\_\-]+)+$/);
                if (EmailCheck.test(__email)) {
                    return true;
                }
                return false;
            }
            const DOM = $('.form form');

            var cName = DOM.find('#cname');     
            var tel = DOM.find('#tel');     
            let email = DOM.find('#eml');
           
           


            const testmail = /^.+@.+\..{2,3}$/;
            const word = /^[A-Za-z]+$/;
            const num = /^[0-9]+$/;
            const specialChars = /^[a-zA-Z0-9]+$/;
            const Chinese = /^[\u4e00-\u9fa5]+$/;
            const cellPhone = /^09[0-9]|{8|}+$/;


            let str = '';
            // CHECK DATA
            
            if (cName.val() === '') {
                str += '請填寫中文全名 !\n';
            } else if (!Chinese.test(cName.val())) {
                str += '請填寫中文全名 !\n';
            }
            
            if ($.trim(tel.val()) === '') {
                str += '請填寫手機號碼 !\n';
            } else if (tel.val().length < 8) {
                str += '請填寫完整手機號碼 !\n';
            } else if (isNaN(tel.val()) || !(cellPhone.test(tel.val()))  ) {
                str += '請以數字填寫手機號碼 !\n';
            }
                

            if (email.val() === '') {
                str += '請填寫電子信箱 !\n';
            } else if (!checkEmail(email.val())) {
                str += '電子信箱不正確 !\n';
            }

            
            
            if (!document.getElementById('checkbox').checked) {
                str += '請同意個資法條款及活動辦法！\n';
            }
           
            if (str !== '') {
                alert(str);         
                return false;
            }
            return true;
        }	

		}
		,
		bind(){
			
		
	
		}

		
	},
};



</script>