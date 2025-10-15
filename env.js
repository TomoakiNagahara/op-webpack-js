
/** op-webpack-js:/env.js
 *
 * @created   2019-04-27
 * @version   1.0
 * @package   op-webpack-js
 * @author    Tomoaki Nagahara
 * @copyright Tomoaki Nagahara All right reserved.
 */

//	...
(function(){
	/** Env
	 *
	 * @created  2019-04-27
	 */
	$OP.Env= {};

	/** Is localhost.
	 *
	 *  Return value is string.
	 *
	 * @created  2019-04-27
	 * @return   string
	 */
	$OP.Env.isLocalhost = function(){
		return '<?= \OP\Env::isLocalhost() ? 1: 0; ?>';
	};

	/** Is admin.
	 *
	 *  Return value is string.
	 *
	 * @created  2019-04-27
	 * @return   string
	 */
	$OP.Env.isAdmin = function(){
		return '<?= \OP\Env::isAdmin() ? 1: 0; ?>';
	};
})();
