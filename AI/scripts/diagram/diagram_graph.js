class DiagramGraph
{
    constructor( ctx, size, networkGraph )
    {
        this.context = ctx;
        this.dimensions = size;
        this.networkGraph = networkGraph;
        this.radius = 20;
    }

    get Context()
    {
        return this.context;
    }

    set Context( value )
    {
        this.context = value;
    }

    get Dimensions()
    {
        return this.dimensions;
    }

    set Dimensions( value )
    {
        this.dimensions = value;
    }

    get NetworkGraph()
    {
        return this.networkGraph;
    }

    set NetworkGraph( values )
    {
        this.networkGraph = values;
    }

    draw()
    {
        const centerX = this.Dimensions.X/2;
        const centerY = this.Dimensions.Y/2;

        let cPos = this._convertToPosition( centerX, centerY );

        this._drawNodes( cPos, this.networkGraph );
    }

    _drawNodes( position, layer )
    {
        let e = layer.inputLayer.toElementArray();


    }

    // -----------------------------------------------------------------------------------

    _convertToPosition( x, y )
    {
        return new PositionVector( x, calculateOffsetY( y, this.dimensions.Y ) );
    }

    // -----------------------------------------------------------------------------------
    _drawNode( pos )
    {
        this.context.fillStyle = 'white';
        this.context.beginPath();

        this.context.arc( pos.X, pos.Y, this.radius, 0, 2 * Math.PI );

        this.context.closePath();
        this.context.stroke();
        this.context.fill();
    }

    _drawBoundary( pos, form )
    {

    }
}