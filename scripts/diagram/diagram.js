class Diagram
{
    constructor( id )
    {
        this.__initialise_canvas( id );
        this.__initialise_mouseEvent();

        this.cachedSize = null;

        this.axis = new PresentAxis();
        this.grid = new PresentGrid();
    }

    __initialise_grid()
    {

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


    __cache_size()
    {
        const width = this.document.width;
        const heigth = this.document.height;

        this.cachedSize = new Vector( width, heigth );
    }


    // Accessors
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/width
    get Width()
    {
        if( this.cachedSize == null )
        {
            this.__cache_size();
        }

        return this.cachedSize.X;
    }

        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/height
    get Heigth()
    {
        if( this.cachedSize == null )
        {
            this.__cache_size();
        }

        return this.cachedSize.Y;
    }


    // Code
    initialise()
    {
        console.log({'width': this.Width, 'heigth': this.Heigth});
    }

    update()
    {

    }

    draw()
    {
        this.mouseEventHandler.drawMouse();

        this.grid.Screen = this.cachedSize;
        this.grid.draw( this.context );

    }

    clean()
    {
        this.context.clearRect(0, 0, this.Width, this.Heigth);
    }
}
