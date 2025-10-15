
/** op-webpack-js:/TranslatePopup.js
 *
 * @created   2023-03-06
 * @version   1.0
 * @package   op-webpack-js
 * @author    Tomoaki Nagahara
 * @copyright Tomoaki Nagahara All right reserved.
 */

/* <?php if( OP()->Config('execute')['translate'] ?? null ): ?> */

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
	$OP.Translate.Popup = async function(node){
		//	...
		node.addEventListener('mouseover', async function(e){
			let target = e.target;
			let minwin = GetFloatingWindow();
				minwin.style.top  = e.clientY + 10 + 'px';
				minwin.style.left = e.clientX + 10 + 'px';
				minwin.style.display = '';
			if( minwin.innerHTML !== '' ){
				return;
			}else if( minwin.innerHTML === '?' ){
				return;
			}else{
				minwin.innerHTML = '?';
			}
			//	...
			$OP.Translate.Fetch(target.innerHTML, function(translate){
				minwin.innerHTML = translate;
			});
		}, false);

		//	...
		node.addEventListener('mouseleave', async function(){
			let minwin = GetFloatingWindow();
				minwin.style.top  = 0+'px';
				minwin.style.left = 0+'px';
				minwin.style.display = 'none';
				minwin.innerHTML  = '';
		}, false);
	}

	//	...
	function GetFloatingWindow(){
		//	...
		let minwin = document.querySelector('#translated_window');
		if(!minwin ){
			minwin = document.createElement('span');
			minwin.id = 'translated_window';
			minwin.style.zIndex   = 100;
			minwin.style.position = 'fixed';
			document.querySelector("body").appendChild(minwin);
		}

		//	...
		minwin.innerHTML = '';

		//	...
		return minwin;
	}
})();

/* <?php endif; ?> */
