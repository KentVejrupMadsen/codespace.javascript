function main( id )
{
    Properties.initialise( id );
    generate( );
}


function generate()
{   
    draw_layout();          
}

function draw_layout()
{
    var size_of_canvas = Properties.getCanvasSize();
    var x, y;

    x = 4;
    y = 4;

    space_x = size_of_canvas.x / x;
    space_y = size_of_canvas.y / y;

    var g = generate_grid(x, y);

    var grid_w_idx = 0;
    var grid_h_idx = 0;

    var start_cursor_pos_height = 0;

    for( grid_h_idx = 0; 
         grid_h_idx < y; 
         grid_h_idx ++ )
    {
        var start_cursor_pos_width = 0;

        for( grid_w_idx = 0; 
             grid_w_idx < x; 
             grid_w_idx++ )
        {

        }

    }
}

function line( startV2, endV2 )
{
    var drawBegin = startV2;
    var drawEnd = endV2;

    var canvas_size = Properties.getCanvasSize();

    drawBegin.y = invert_cordinates(drawBegin, canvas_size);
    drawEnd.y = invert_cordinates(drawEnd, canvas_size);

    var ctx = Properties.getCanvasContext();

    ctx.moveTo(drawBegin.x, drawBegin.y);
    ctx.lineTo(drawEnd.x, drawEnd.y);

    Properties.draw_strokes();
}

function generate_grid( width_size_of_grid=4, height_size_of_grid=4 )
{
    var grid = [];

    var index_height = 0;
    var index_width = 0;

    for( index_height = 0; 
         index_height < height_size_of_grid; 
         index_height++ )
    {
        var toAppendWith = [];

        for( index_width = 0; 
             index_width < width_size_of_grid; 
             index_width ++ )
        {
            toAppendWith.push(generate_vector());
        }

        grid.push(toAppendWith);
    }

    return grid;
}
