
/** op-webpack-js:/Translate.js
 *
 * @created   2023-01-22
 * @version   1.0
 * @package   op-app-skeleton-2020-nep
 * @author    Tomoaki Nagahara <tomoaki.nagahara@gmail.com>
 * @copyright Tomoaki Nagahara All right reserved.
 */

/* <?php if( empty( $host = OP()->Config('translate')['host'] ?? null ) ){ return; } ?> */

/* <?php OP()->Unit()->WebPack()->Auto('asset:/webpack/js/Hash.js') ?> */

//	...
(function(){
	//	...
	if( typeof $OP === 'undefined' ){
		$OP = {};
	}

	//	...
	if( typeof $OP.Translate === 'undefined' ){
		$OP.Translate = {};
	}

	//	...
	$OP.Translate.Fetch = async function(html, callback){
		//	...
		let item_language_code = "<?php echo OP()->Config('translate')['item_language_code'] ?? 'null'; ?>";
		let lang    = localStorage.getItem(item_language_code);
		if(!lang ){
			D('Does not selected language code.');
			return;
		}

		//	For MS translator defect.
		html = html.replace(/\$/g, "&#36;");

		//	...
		let hash = await $OP['Hash'](`${lang}, ${html}`,'SHA-1');
		if(!hash ){
			console.error('Hash is empty.');
			return;
		}

		//	...
		let item = localStorage.getItem(hash);
		if( item ){
			callback(item);
			return item;
		}

		//	...
		Fetch(lang, html, function(result){
			let item = result[0];
			localStorage.setItem(hash, item);
			callback(item);
		});
	};

	//	...
	function Fetch(lang, html, callback){
		let URL     = 'https://<?= $host ?>/api/i18n/translate/';
		let method  = "POST";
		let data    = {
			to     : lang,
			string : html,
		};
		let body    = Object.keys(data).map((key)=>key+"="+encodeURIComponent(data[key])).join("&");
		let headers = {
			'Accept'       : 'application/json',
			'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8',
		};

		//	...
	//	D(`Fetch: ${URL}`, data);
		fetch(URL, {method, headers, body})
			.then((response) => response.json())
			.then((json) => {
				//	...
				if(!json['status'] ){
					console.error('status is not true', json);
					return;
				}
				//	...
				if( json['errors'] ){
					console.error('has errors', json);
					return;
				}
				//	...
				if( json['result'] === null ){
					console.error('result is empty', json);
					return;
				}
				//	...
				if( json['result']['translate'] === undefined ){
					console.error('translate is empty', json);
					return;
				}
				//	...
				callback( json['result']['translate'] );
			});
		//	fetch()
	} // Fetch()
})();
