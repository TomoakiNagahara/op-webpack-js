
/** op-webpack-js:/Hash64.js
 *
 * @created   2025-10-12
 * @version   1.0
 * @package   op-webpack-js
 * @author    Tomoaki Nagahara
 * @copyright Tomoaki Nagahara All right reserved.
 */

/** $OP
 *
 */
if( typeof $OP === 'undefined' ){
	$OP = {};
}

/** To hash 64bit likely.
 *
 * - 64bit equivalent
 * - Base36(0-9a-z)
 * - Fixed length 13
 *
 * ```
 * Usage:
 * console.log( $OP.Hash64("Hello new world 🌏") );
 * ```
 */
$OP.Hash64 = function(str){
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

	/*
	// 64bit like
	return ((h2 >>> 0).toString(16).padStart(8, '0') +
			(h1 >>> 0).toString(16).padStart(8, '0'));
	*/

	//	8byte(64bit) --> BigInt
	const bytes = new Uint8Array(8);
	const dv = new DataView(bytes.buffer);
	dv.setUint32(0, h2 >>> 0); // Higher
	dv.setUint32(4, h1 >>> 0); // Lower

	//	...
	let v = 0n;
	for(let i = 0; i < 8; i++){ v = (v << 8n) | BigInt(bytes[i]) };

	//	Base36 string. 64 bits theoretically require 13 digits.
	return v.toString(36).padStart(13, '0');
};
