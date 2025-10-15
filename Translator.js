
/** op-webpack-js:/Translator.js
 *
 *  Automatically translator.
 *  Translate target tag is data-i18n or data-translate = true.
 * 
 * @created   2023-01-23
 * @version   1.0
 * @package   op-webpack-js
 * @author    Tomoaki Nagahara
 * @copyright Tomoaki Nagahara All right reserved.
 */

/* <?php OP()->Unit()->WebPack()->Auto('asset:/webpack/js/Translate.js') ?> */

//	...
document.addEventListener('DOMContentLoaded', () => {
	//	...
	if( typeof $OP.Translate === 'undefined' ){
		return;
	}

		//	...
		['i18n','translate','translation','t9n'].forEach(key => {
			//	...
			document.querySelectorAll(`[data-${key}="true"]`).forEach(html => {
				//	...
				$OP.Translate.Fetch(html.innerHTML, function(result){
					html.innerHTML    =  result;
					html.dataset[key] = 'false';
				});
			});
		});
});
