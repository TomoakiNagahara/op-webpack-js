
/** op-webpack-js:/Hash64.js
 *
 * @created   2025-10-12
 * @version   1.0
 * @package   op-webpack-js
 * @author    Tomoaki Nagahara
 * @copyright Tomoaki Nagahara All right reserved.
 */

/** To hash 64bit likely.
 *
 * ```
 * Usage:
 * console.log( Hash64("Hello new world 🌏") );
 * ```
 */
function Hash64(str){
	//	...
	const utf8 = new TextEncoder().encode(str);
	let h1 = 0xdeadbeef, h2 = 0x41c6ce57;

	//	...
	for (let i = 0; i < utf8.length; i++) {
		const ch = utf8[i];
		h1 = Math.imul(h1 ^ ch, 2654435761);
		h2 = Math.imul(h2 ^ ch, 1597334677);
	}

	//	...
	h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
	     Math.imul(h2 ^ (h2 >>> 13), 3266489909);
	//	...
	h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
	     Math.imul(h1 ^ (h1 >>> 13), 3266489909);

	// 64bit like
	return ((h2 >>> 0).toString(16).padStart(8, '0') +
			(h1 >>> 0).toString(16).padStart(8, '0'));
}
