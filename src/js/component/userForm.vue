<style lang="less" src="userform.less" scoped></style>

<template lang="pug">
.row.userForm.relat
	.bg-rnd.abs
		
	.col-xs-12.subdesc.lrgt 活動說明：看影片回答問題並留下您的雀巢1000天計畫會員資料，即有機會抽<span class="strong">五星級親子飯店住宿券</span>
	.col-xs-11.pool
		
		p （請點選回答）
	.col-xs-12.qa
		
	.col-xs-12.row.anws
		
		.col-xs-4.btn-j.btn2(data-id="螢光塗鴉", v-on:click="choose('2')")
		.col-xs-4.btn-j.btn1(data-id="空中飛人", v-on:click="choose('1')")
		.col-xs-4.btn-j.btn3(data-id="跑跑賽車", v-on:click="choose('3')")
	.col-xs-12.desc-mid.lrgt 請留下雀巢1000天營養計畫會員資料<span class="weak">(姓名/身分證後六碼)</span>，並提供手機號碼以利中獎通知：

	.col-xs-12.form#form
		form(autocomplete="off")
			.form-group.row.inputname
				label.col-xs-4.col-sm-4.col-form-label(for="cname",) 
				.col-xs-8.col-sm-8
					input.form-control#cname(type="text",placeholder="請輸入姓名",data-ph="請輸入姓名",v-model="cname")
			.form-group.row.inputidcode
				label.col-xs-5.col-form-label(for="idcode") 
				.col-xs-7
					input.form-control#idcode(type="text",placeholder="請輸入後六碼",data-ph="請輸入後六碼",v-model="idcode")
			.form-group.row.inputtel
				label.col-xs-4.col-form-label(for="tel") 
				.col-xs-8
					input.form-control#tel(type="text",placeholder="請輸入手機號碼",data-ph="請輸入手機號碼",v-model="telnum")
			
			.form-check
				input.form-check-input#checkbox(type="checkbox" , v-model="checkedPrivate" )
				label(for="checkbox") 我已詳細閱讀並同意<a href="#/rule" target="_blank" class="" data-ga="privateAgree">隱私權以及活動辦法事項</a>。
			.form-check
				input.form-check-input#checkbox2(type="checkbox"  , v-model="checkedAgree")
				label(for="checkbox2") 我同意本人及寶寶的個人資料提供台灣雀巢故粉有限公司及合作夥伴做後續行銷活動之使用。
			.btn-j.btn-submit.relat(v-on:click="submit")
</template>

<script>

import { mapGetters } from 'vuex';
export default {
	data() {
	    return {
	    	choosed:0,
	        cname: '',
	        idcode:'',
	        telnum:'',
	        checkedPrivate:true,
	        checkedAgree:true,

	        submitActive:true,
	        
	    };
	},
	directives: {
		
	},
	computed: {
    	...mapGetters(['videoplayed']),
    	...mapGetters(['age']),
  	},
	components:{
		//Space,
	},
	created:function(){
		//initial data
		
	},
	mounted:function(){
		$('input#cname').focus(function(){
			route('form');
		})

		function route(hash) {
		    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		    const speed = 20;
		    let top;
		    top = $("#" + hash).offset().top;
		    let t = 1000 //Math.abs(GLOBAL.top - top) / speed
		    $body.animate({
		        scrollTop: top - 90
		    }, t);
		}
		
	},
	methods: {
		//////////////
		// 檢查表單送出資料 //
		//////////////
		validator:function(){
			const DOM = $('.form form');			
			const testmail = /^.+@.+\..{2,3}$/;
			const word = /^[A-Za-z]+$/;
			const num = /^[0-9]+$/;
			const specialChars = /^[a-zA-Z0-9]+$/;
			const Chinese = /^[\u4e00-\u9fa5]+$/;
			const cellPhone = /^09[0-9]|{8|}+$/;
			const idvalidator = /^[0-9]{6}$/;
			console.log("validating.......");
			let msg = '' , tof = true;

			
			if( !(this.age=='p' || this.age == 'o' || this.age == 'b') ){
				this.age = 'p'
			}
			if(this.choosed == 0){
				msg += '請選擇答案!\n'
				tof = false;
			}
			if (this.cname === '') {
				msg += '*請填入中文姓名以利確認雀巢1000天計畫會員資格\n';
				tof = false;
			} else if (!Chinese.test(this.cname)) {
				msg += '*請填入中文姓名以利確認雀巢1000天計畫會員資格\n';
				tof = false;
			}
			//////////
			// 身分證檢驗 //
			//////////
			 
			if ($.trim(this.idcode) === '') {
				msg += '請填入身分證後六碼以利確認雀巢1000天計畫會員資格\n';
				tof = false;
			} else if ($.trim(this.idcode).length != 6) {
				msg += '請填入身分證後六碼以利確認雀巢1000天計畫會員資格\n';
				tof = false;
			} else if (isNaN(this.idcode) || !(idvalidator.test(this.idcode)) ) {
				msg += '請填入身分證後六碼以利確認雀巢1000天計畫會員資格\n';
				tof = false;
			}
			//////////
			//TEL驗證 //
			//////////
			if ($.trim(this.telnum) === '') {
				msg += '請填入正確手機號碼以利中獎通知\n';
				tof = false;
			} else if (this.telnum.length < 9) {
				msg += '請填入正確手機號碼以利中獎通知\n';
				tof = false;
			} else if (isNaN(this.telnum) || !(cellPhone.test(this.telnum)) ) {
				msg += '請填入正確手機號碼以利中獎通知\n';
				tof = false;
			}
			/////////
			//同意驗證 //
			/////////
			if(this.checkedPrivate != true){
				msg += '您尚未勾選同意隱私條款及活動辦法！ !\n';
				tof = false;
			}
			if(this.checkedAgree != true){
				msg += '您尚未勾選同意個資提供台灣雀巢股份有限公司使用 !\n';
				tof = false;
			}
			//
			return {tof:tof,msg:msg};
		},
		////////////
		// 選擇按鈕處理 //
		////////////
		choose:function(a){
			
			let msg = '';

			if( this.videoplayed != true){
				msg += '請先觀賞影片後再回答最想與寶寶體驗的活動唷~ '
				this.showFeedback(msg);
				return;
			}
			
			this.choosed = a;
			console.log('choosed......'+ this.choosed)
			$(".userForm .anws >.btn-j").removeClass('act');
			$(".userForm .anws >.btn" + a).addClass('act');
		},

		afterSubmit:function(){
			this.$router.push('/result/'+this.age);
		},
		////////////
		// 送出表單處理 //
		////////////
		submit:function(){
			console.log("submiting.......");

			if(!this.submitActive) return;
			/**
			 * FB PIXEL TRACKING
			 */
			fbq('track', 'CompleteRegistration');

			let response = this.validator(),_this = this;
			let ages = {'p':'懷孕9個月' , 'b':'寶寶剛出生~1歲' , 'o': '寶寶1歲以上'};
			let options = {'1':'空中飛人' , '2':'螢光塗鴉' , '3': '跑跑賽車'};

			//AGE 對應
			/**
			 * 懷孕9個月 : p
			 * 寶寶剛出生~1歲 : b
			 * 寶寶1歲以上 : o
			 */
			//CHOOSE對應
			//1:空中飛人  2:螢光塗鴉  3:跑跑賽車
			let data = {
			    name: this.cname,
			    tel: this.telnum,
			    id6: this.idcode,
			    answer: options[this.choosed],
			    babyage: ages[this.age],
			};
			
			if(response.tof!==true){
				this.showFeedback(response.msg);
				return;
			}else{
				_this.submitActive = false;
				//ga('send', 'event', 'index', 'click', 'submit', 1);
				gtag('event' , 'shsh' , {'category':'index' , 'action':'click' , 'label':'submit'})
				getFormResponse(`./api/index.ashx?mode=savedata`).then(function (data)  {
			    	
			    	console.log('success!.....');
			    	_this.showFeedback('上傳成功！');
			    	_this.afterSubmit();
			    	
				} ,function (err){
					// Fail
					console.log(err);
					_this.showFeedback(err);
					_this.submitActive = true;


				})
			}

			function getFormResponse(url) {
			    return new Promise((resolve, reject) => {
			        $.post(url,
			            data,
			            (pResponse) => {
			                if (pResponse.state == 1) {
			                    resolve()
			                } else {
			                    reject(pResponse.msg);
			                }
			            }, 'json');
			    });
			}
			
		},
		showFeedback:function(msg){
			alert(msg)
		}
	},
	
};
</script>