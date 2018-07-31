import {LoadModle,getParameterByName,redirectHandle,checkVersion} from './common.js';
import {GLOBAL} from './config.js';
import {INDEX} from './pages/index.js';
import {PROD} from './pages/prod.js';
import {MENU} from './menu.js';
import {FB_ASSET} from './fb_assets.js';
import {GA} from './ga.js';
var app = {};
function APP(){
	const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
	    function(callback) {
	        window.setTimeout(callback, 1000 / 60);
	    };
	window.requestAnimationFrame = requestAnimationFrame;

	function route() {
		let page = $('#page').val()
		switch(page){
			case 'index':
				new INDEX();
				//app.menu.getupdateState(0)	
				return true;				
			break;
			case 'prod':
				new PROD();
				return true;	
			break;
			default:
				//new UPDATE();
				return true;
			break;
		}
		
	}
	
	function init() {
		/*mobile,pc redirect */
		
		redirectHandle(`.tw/EssentialEnergy`);
		/*ga*/
		
		/*loading*/
		

		
		new LoadModle($('body img') , ()=>{
			
			//FastClick.attach(document.body);
			
			GLOBAL.ga = new GA();
			let tof = route();
			app.menu = new MENU();
			if(tof){
				setTimeout(()=>{
					$('.loading').fadeOut();
				} , 1500);
				
			}
				
		});
		
	};
	init();
	console.log('app start.....')
}
app.start = new APP();

	



