
/** op-webpack-js:/Hash.js
 *
 * @created   2023-01-23
 * @version   1.0
 * @package   op-webpack-js
 * @author    Tomoaki Nagahara
 * @copyright Tomoaki Nagahara All right reserved.
 */
//	...
(function(){
	//	...
	if( typeof $OP === 'undefined' ){
		$OP = {};
	}

	//	...
	$OP.Hash = async function(text, algorithm){
		if(!algorithm ){
			algorithm = 'SHA-256';
		}
		const uint8  = new TextEncoder().encode(text)
		const digest = await crypto.subtle.digest(algorithm, uint8)
		return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('')
	}
})();
