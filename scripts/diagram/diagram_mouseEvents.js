var mouseDiagramEventHandler = null;
var mouseCanvas = null;


class DiagramMouseEventHandler
    extends PositionVector
{
    constructor()
    {
        super( 0, 0 );

    }

    static setup( canvas )
    {
        mouseDiagramEventHandler = new DiagramMouseEventHandler();
        mouseCanvas = canvas;

        canvas.addEventListener( "mousemove", function( e ){ diagram_event_mouse_move( e ) } );
    }
}


function diagram_event_mouse_move( e )
{
    var handler = mouseDiagramEventHandler;
    let boundary = mouseCanvas.getBoundingClientRect();

}