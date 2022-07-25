class Diagram
{
    constructor( id )
    {
        this.__initialise_canvas( id );
        this.__initialise_mouseEvent();

        this.cachedSize = null;

        this.origin = ZeroPositionVector.generate();

        this.axis = new PresentAxis();
        this.grid = new PresentGrid();
    }


    __initialise_mouseEvent()
    {
        DiagramMouseEventHandler.setup( this.document );
        this.mouseEventHandler = DiagramMouseEventHandler.retrieveHandler();
    }

    __initialise_canvas( id )
    {
        this.document = document.getElementById( id );
        this.context = this.document.getContext("2d" );
    }


    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/width
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/height
    __cache_size()
    {
        const width = this.document.width;
        const heigth = this.document.height;

        this.cachedSize = new Vector( width, heigth );
    }


    get Origin()
    {
        return this.origin;
    }


    get CachedSize()
    {
        if( this.CachedSizeIsEmpty )
        {
            this.__cache_size();
        }

        return this.cachedSize;
    }


    // Accessors
    get Width()
    {
        if( this.CachedSizeIsEmpty )
        {
            this.__cache_size();
        }

        return this.cachedSize.X;
    }

    get Heigth()
    {
        if( this.CachedSizeIsEmpty )
        {
            this.__cache_size();
        }

        return this.cachedSize.Y;
    }

    get CachedSizeIsEmpty()
    {
        return this.cachedSize == null;
    }


    // Code
    initialise()
    {
        console.log( { 'width': this.Width, 'heigth': this.Heigth } );
    }

    update()
    {

    }

    draw()
    {
        this.mouseEventHandler.drawMouse();

        this.grid.Screen = this.CachedSize;
        this.grid.draw( this.context );

    }

    test()
    {
        const ctx = this.context;



    }

    clean()
    {
        this.clearArea( this.origin,
                        this.cachedSize );
    }

    clearArea( pS, pE )
    {
        this.context.clearRect( pS.X, pS.Y,
                                pE.X, pE.Y );
    }
}
