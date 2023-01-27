
/** op-webpack-js:/Translator.js
 *
 * @created   2023-01-23
 * @version   1.0
 * @package   op-app-skeleton-2020-nep
 * @author    Tomoaki Nagahara <tomoaki.nagahara@gmail.com>
 * @copyright Tomoaki Nagahara All right reserved.
 */

/* <?php if( OP()->Config('execute')['translate'] ?? null ): ?> */

//	...
(function(){
	//	...
	if(!$OP ){
		$OP = {};
	}

	//	...
	$OP['Translator'] = function(){
		//	...
		['i18n','translate'].forEach(key => {
			//	...
			document.querySelectorAll(`[data-${key}="true"]`).forEach(html => {
				//	...
				$OP['Translate'](html.innerHTML, function(result){
					html.innerHTML    =  result;
					html.dataset[key] = 'false';
				});
			});
		});
	};
})();

//	...
document.addEventListener('DOMContentLoaded', () => {
	//	...
	$OP['Translator']();
});

/* <?php endif; ?> */
