var mouseDiagramEventHandler = null;
var br = null;

class DiagramMouseEventHandler
    extends PositionVector
{
    constructor()
    {
        super( 0, 0 );

    }

    setup( canvas )
    {
        mouseDiagramEventHandler = new DiagramMouseEventHandler();
        br = canvas.getBoundingClientRect();

        console.log({'boundary': br});

        canvas.addEventListener( "mousemove", function( e ){ diagram_event_mouse_move( e ) } );
    }
}


function diagram_event_mouse_move( e )
{
    
}