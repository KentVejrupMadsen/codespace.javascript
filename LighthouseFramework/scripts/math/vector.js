/**
 *
 */
class BaseVector
{
    constructor( x, y )
    {
        this.X = x;
        this.Y = y ;
    }

    // Accessors
        // Getters
    get X()
    {
        return this.x;
    }

    get Y()
    {
        return this.y;
    }

        // Setters
    set X( x )
    {
        this.x = x;
    }

    set Y( y )
    {
        this.y = y;
    }

    flip()
    {
        return this.flipX(), this.flipY();
    }

    flipX()
    {
        return -this.X;
    }

    flipY()
    {
        return -this.Y;
    }

    logState()
    {
        console.log( { 'X' : this.X, 'Y' : this.Y } )
    }
}


/**
 * A vector, which has a length and a direction, that it is moving in, x & y indicates in which direction
 */
class Vector
    extends BaseVector
{
    constructor( x, y )
    {
        super( x, y );
    }

    assign( x, y )
    {
        this.X = x;
        this.Y = y;
    }

    length()
    {
        const px2 = Math.pow( this.X, 2 );
        const py2 = Math.pow( this.Y, 2 );

        return Math.sqrt( ( px2 + py2 ) );
    }
}


/**
 * Position Vector, indicates a given position in a 2 dimensional space.
 */
class PositionVector
    extends BaseVector
{
    constructor( x, y )
    {
        super( x, y );
    }

}


//
let z = null;


/**
 *
 */
class ZeroPositionVector
{
    constructor()
    {
        this.x = 0;
        this.y = 0;
    }

    get X()
    {
        return this.x;
    }

    get Y()
    {
        return this.y;
    }


    static generate()
    {
        if( z == null )
        {
            z = new ZeroPositionVector();
        }

        return z;
    }
}