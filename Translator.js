
/** op-webpack-js:/Translator.js
 *
 *  Automatically translator.
 *  Translate target tag is data-i18n or data-translate = true.
 * 
 * @created   2023-01-23
 * @version   1.0
 * @package   op-app-skeleton-2020-nep
 * @author    Tomoaki Nagahara <tomoaki.nagahara@gmail.com>
 * @copyright Tomoaki Nagahara All right reserved.
 */

/* <?php OP()->WebPack()->Auto('asset:/webpack/js/Translate.js') ?> */

//	...
document.addEventListener('DOMContentLoaded', () => {
	//	...
	if( typeof $OP.Translate === 'undefined' ){
		return;
	}

		//	...
		['i18n','translate'].forEach(key => {
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
