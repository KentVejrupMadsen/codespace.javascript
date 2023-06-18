function generate_vector( x = 0.0, y = 0.0 )
{
    return {
        x, 
        y
    };
}


function invert_cordinates( position, area_v2 )
{
    return area_v2.y - position.y;
}


