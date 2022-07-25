class Diagram
{
    constructor( id )
    {
        this.__initialise_canvas( id );
        this.__initialise_mouseEvent();

        this.dimensions = null;

        this.origin = ZeroPositionVector.generate();

        this.axis = new PresentAxis();
        this.grid = new PresentGrid();

        this.graphs = null;
    }


    __initialise_mouseEvent()
    {
        DiagramMouseEventHandler.setup( this.document );
        this.mouseEventHandler = DiagramMouseEventHandler.retrieveHandler();
    }

    __initialise_canvas( id )
    {
        this.document = document.getElementById( id );

        this.document.width = window.innerWidth - 200;
        this.document.height = window.innerHeight - 100;

        this.context = this.document.getContext("2d" );
    }




    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/width
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/height
    __cache_size()
    {
        const width = this.document.width;
        const heigth = this.document.height;

        this.dimensions = new Vector( width, heigth );
    }


    get Origin()
    {
        return this.origin;
    }


    get Dimensions()
    {
        if( this.DimensionsIsEmpty )
        {
            this.__cache_size();
        }

        return this.dimensions;
    }


    // Accessors
    get Axis()
    {
        return this.axis;
    }

    get Grid()
    {
        return this.grid;
    }

    get Width()
    {
        if( this.DimensionsIsEmpty )
        {
            this.__cache_size();
        }

        return this.dimensions.X;
    }

    get Heigth()
    {
        if( this.DimensionsIsEmpty )
        {
            this.__cache_size();
        }

        return this.dimensions.Y;
    }

    get DimensionsIsEmpty()
    {
        return this.dimensions == null;
    }



    // Code
    initialise()
    {
        console.log( { 'width': this.Width, 'heigth': this.Heigth } );

        this.grid.Screen = this.Dimensions;
        this.axis.Screen = this.Dimensions;
    }

    update()
    {

    }

    draw()
    {
        this.clean();

        this.mouseEventHandler.drawMouse();

        this.axis.draw( this.context );
        this.grid.draw( this.context );
    }


    clean()
    {
        this.clearArea( this.Origin,
                        this.Dimensions );
    }


    clearArea( pS, pE )
    {
        this.context.clearRect( pS.X, pS.Y,
                                pE.X, pE.Y );
    }
}
