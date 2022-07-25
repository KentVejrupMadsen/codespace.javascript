var mouseDiagramEventHandler = null;
var mouseCanvas = null;


class DiagramMouseEventHandler
    extends PositionVector
{
    constructor()
    {
        super( 0, 0 );
        this.debug = true;
    }

    static setup( canvas )
    {
        mouseDiagramEventHandler = new DiagramMouseEventHandler();
        mouseCanvas = canvas;

        canvas.addEventListener( "mousemove", function( e ){ diagram_event_mouse_move( e ) } );
    }

    static retrieveHandler()
    {
        return mouseDiagramEventHandler;
    }

    drawMouse()
    {
        if( this.debug )
        {
            let context = mouseCanvas.getContext('2d');


            const posX = calculateOffsetX(this.x, mouseCanvas.width);
            const posY = calculateOffsetY(this.y, mouseCanvas.height);

            context.beginPath();
            context.arc( posX, posY, 2, 0, 2 * Math.PI);
            context.closePath();

            context.stroke();
        }
    }
}


function diagram_event_mouse_move( e )
{
    let handler = mouseDiagramEventHandler;

    const canvas = mouseCanvas;
    const boundary = mouseCanvas.getBoundingClientRect();

    let x, y = 0;

    x = ((e.clientX - boundary.left)/(boundary.right - boundary.left)) * canvas.width;
    y = ((e.clientY - boundary.top)/(boundary.bottom - boundary.top)) * canvas.height;

    handler.X = x;
    handler.Y = y;
}