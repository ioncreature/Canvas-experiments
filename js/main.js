/**
 * @author Marenin Alex
 * March 2012
 */


/**
 * Простое создание класса без наследования
 * @param {Object} proto
 * @return funtion
 */
function Class( proto ){
	var c = function(){
			this.init && this.init.apply( this, arguments );
		},
		properties = Object.getOwnPropertyNames( proto );

	for ( var i = 0; i < properties.length; i++ )
		c.prototype[properties[i]] = proto[properties[i]];
	return c;
}


/**
 * Класс для рисования на канве
 */
var C = Class({

	/**
	 * Constructor
	 * @param {Element} elem - canvas node
	 */
	init: function( /*Element*/ elem ){
		this.canvas = elem;
		this.ctx = this.canvas.getContext( '2d' );
	},


	/**
	 * @param {int} x
	 * @param {int} y
	 * @param {int} w
	 * @param {int} h
	 * @param {string} color
	 */
	fillRectangle: function( x, y, w, h, color ){
		if ( color )
			this.ctx.fillStyle = color;

		this.ctx.fillRect( x, y, w, h );
	},


	/**
	 * @return {CanvasRenderingContext2D}
	 */
	getContext: function(){
		return this.ctx;
	},


	/**
	 * @return {Element}
	 */
	getCanvas: function(){
		return this.canvas;
	}

});


// Рисуем на канвасе
$( function(){
	var elem = $( 'canvas.fill_screen' )[0],
		canvas = new C( elem );

	canvas.fillRectangle( 10 , 10 , 100, 100, '#5d9' );
	canvas.fillRectangle( 100, 100, 100, 100, '#d59' );
	canvas.fillRectangle( 190, 190, 100, 100, '#59d' );

	console.log( canvas.getContext(), canvas.getCanvas() );
});