class Diagram
{
    constructor( id )
    {
        this.document = document.getElementById( id );
        this.context = this.document.getContext("2d" );
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

    draw()
    {

    }

    clean()
    {

    }

    line( b, e )
    {

    }
}