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
	 * @param {HTMLCanvasElement} elem - canvas node
	 */
	init: function( elem ){
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
	fillRect: function( x, y, w, h, color ){
		if ( color )
			this.ctx.fillStyle = color;

		this.ctx.fillRect( x, y, w, h );
	},


	strokeRect: function( x, y, w, h, lineWidth, strokeColor ){
		if ( lineWidth )
			this.ctx.lineWidth = lineWidth;
		if ( strokeColor )
			this.ctx.strokeStyle = strokeColor;

		this.ctx.strokeRect( x, y, w, h );
	},


	/**
	 * @return {CanvasRenderingContext2D}
	 */
	getContext: function(){
		return this.ctx;
	},


	/**
	 * @return {HTMLCanvasElement}
	 */
	getCanvas: function(){
		return this.canvas;
	}

});


// Рисуем на канвасе
$( function(){
	var elem = $( 'canvas.fill_screen' )[0],
		canvas = new C( elem );

	canvas.fillRect( 10 , 10 , 100, 100, '#5d9' );
	canvas.fillRect( 100, 100, 100, 100, '#d59' );
	canvas.fillRect( 190, 190, 100, 100, '#59d' );
	canvas.fillRect( 190, 10 , 100, 100, 'rgba(175, 175, 70, 0.7)' );
	canvas.strokeRect( 10, 190 , 100, 100, 5, '#aa7' );



	console.log( canvas.getContext(), canvas.getCanvas() );
});