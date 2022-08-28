class Diagram
{
    constructor( id )
    {
        this.__initialise_canvas( id );
        this.__initialise_mouseEvent();

        this.dimensions = null;
        this.dimensionsIsChanged = false;

        this.origin = ZeroPositionVector.generate();

        this.axis = new PresentAxis();
        this.grid = new PresentGrid();

        this.layers = new NodeNetwork(4, 12, 8, 3 );
        this.layers.connectNeighbors();

        this.useDiagram = new DiagramGraph( this.context, this.Dimensions, this.layers );
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

    get Layers()
    {
        return this.layers;
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
        this.__update_dimensions();

    }

    __calc_window_width()
    {
        return window.innerWidth - 100;
    }

    __calc_window_height()
    {
        return window.innerHeight - 200;
    }

    __update_dimensions()
    {
        if( this.dimensionsIsChanged )
        {
            const widthDimension = this.__calc_window_width();
            const heightDimension = this.__calc_window_height();

            this.document.width = widthDimension;
            this.document.height = heightDimension;

            this.dimensions.assign( widthDimension, heightDimension );

            this.dimensionsIsChanged = false;
        }
    }

    draw()
    {
        this.update();
        this.clean();

        this.mouseEventHandler.drawMouse();

        this.axis.draw( this.context );
        this.grid.draw( this.context );

        this.useDiagram.draw();
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
