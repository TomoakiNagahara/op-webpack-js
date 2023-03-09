<?php
/** op-webpack-js:/action.php
 *
 * v2.0 is automatically entry.
 *
 * @created   2018-04-12
 * @version   2.0
 * @package   op-webpack-js
 * @author    Tomoaki Nagahara <tomoaki.nagahara@gmail.com>
 * @copyright Tomoaki Nagahara All right reserved.
 */

/** Declare strict
 *
 */
declare(strict_types=1);

/** namespace
 *
 */
namespace OP;

//	...
$return = [];

//	...
foreach( glob(__DIR__.'/*.js') as $file ){
	//	...
	if( $file === 'index.js' ){
		//	Why?
		continue;
	}

	//	...
	if( $file[0] === '.' or $file[0] === '_' ){
		continue;
	}

	//	...
	$name = substr($file, 0, -3);

	//	...
	$return[] = $name;
}

//	...
return $return;
