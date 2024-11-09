
/** op-webpack-js:/Translate_Language.js
 *
 * @created   2023-01-22
 * @version   1.0
 * @package   op-app-skeleton-2020-nep
 * @author    Tomoaki Nagahara <tomoaki.nagahara@gmail.com>
 * @copyright Tomoaki Nagahara All right reserved.
 */

/* <?php if( OP()->Config('execute')['translate'] ?? null ): ?> */

/* <?php OP()->WebPack()->Auto('asset:/webpack/js/d.js') ?> */

//	...
document.addEventListener('DOMContentLoaded', () => {
	//	...
	let item_language_list = "<?php echo OP()->Config('translate')['item_language_list'] ?? 'null'; ?>";
	let item_language_code = "<?php echo OP()->Config('translate')['item_language_code'] ?? 'null'; ?>";

	//	...
	let json = localStorage.getItem(item_language_list);
	if( json ){
		json = JSON.parse(json);
		Display(json);
	}else{
		Fetch();
	}

	//	...
	function Fetch(){
		//	...
		let URL = 'https://onepiece-framework.com/api/i18n/language?target=language';
		D(`Fetch: ${URL}`);
		fetch(URL)
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
				if(!json['result'] ){
					console.error('result is empty', json);
					return;
				}
				//	...
				if(!json['result']['language'] ){
					console.error('result is empty', json);
					return;
				}
				//	...
				localStorage.setItem(item_language_list, JSON.stringify(json));
				Display(json);
			});
	}

	//	...
	function Display(json){
		//	...
		let name = "<?php echo OP()->Config('translate')['language-area-id'] ?? 'null'; ?>";
		let area = document.querySelector(`#${name}`);
		if(!area ){
			D(`Does not found '#${name}'`);
			return;
		}

		//	...
		for(let key in json['result']['language'] ){
			let val  = json['result']['language'][key];
			let dir     = val['dir'];
			let english = val['name'];
			let native  = val['nativeName'];

			//	...
			let span = document.createElement('span');
				span.innerText       = native;
				span.style.direction = dir;
			let a    = document.createElement('a');
				a.appendChild(span);
				a.href  = key;
				a.title = english;
			let li   = document.createElement('li');
				li.appendChild(a);
				li.href = key;
				li.onclick = onClick;

			//	...
			area.appendChild(li);
		}
	};

	//	...
	function onClick(){
		//	...
		let language_code = this.href;
		localStorage.setItem(item_language_code, language_code);

		//	...
		location.reload();

		//	...
		return false;
	};
});

/* <?php endif; ?> */
