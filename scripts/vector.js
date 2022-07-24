class BaseVector
{
    constructor( x, y )
    {
        this.X( x );
        this.Y( y );
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

    logState()
    {
        console.log( { 'X' : this.X, 'Y' : this.Y } )
    }
}


/**
 * A vector, which has a length and a direction, that it is moving in
 */
class Vector
    extends BaseVector
{
    constructor( x, y )
    {
        super( x, y );
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