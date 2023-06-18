var canvas_object_id = null;
var canvas_context_area = null;


class Properties
{
    static initialise( id )
    {
        Properties.construct( id );
    }

    static construct( id ) 
    {
        if( canvas_object_id == null )
        {
            var canvas_obj = document.getElementById( id );
            canvas_object_id = canvas_obj;

            canvas_context_area = canvas_object_id.getContext( "2d" );
        }
    }

    static getObject()
    {
        return canvas_object_id;
    }

    static getCanvasContext()
    {
        return canvas_context_area;
    }

    static getCanvasSize()
    {
        var c = Properties.getObject();
        return generate_vector( c.width, c.height );
    }

    static draw_strokes()
    {
        var c = Properties.getCanvasContext();
        c.stroke();
    }
}