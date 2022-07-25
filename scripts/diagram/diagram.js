class Diagram
{
    constructor( id )
    {
        this.document = document.getElementById( id );
        this.context = this.document.getContext("2d" );

        this.mouseEventHandler = new DiagramMouseEventHandler();

        DiagramMouseEventHandler.setup( this.document );
    }


    // Accessors
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/width
    width()
    {
        return this.document.width;
    }

        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/height
    heigth()
    {
        return this.document.height;
    }

    // Code
    initialise()
    {
        console.log({'width': this.width(), 'heigth': this.heigth()});
    }

    update()
    {

    }

    draw()
    {

    }

    clean()
    {
        this.context.clearRect(0, 0, this.width(), this.heigth());
    }
}
