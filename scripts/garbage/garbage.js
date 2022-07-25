line( b, e )
{
    this.context.moveTo(b.X, b.Y);
    this.context.lineTo(e.X, e.Y);
}

lines( pS, form )
{

}

fullCircle( pS )
{
    this.context.beginPath();
    this.context.arc( pS.X, pS.Y, 50, 0,2*Math.PI );
    this.context.closePath();
}

grid( width, height )
{
    this.grid_y( width );
    this.grid_x( height );
}

// Paints lines along the x axis, that goes along the y axis, in a straight line like |
grid_y( widthVar )
{
    this.context.beginPath();

    this.setting_guide();

    let t = Math.ceil(this.width() / widthVar);

    let x;
    for( x = 0;
         x < t;
         x ++ )
    {
        let current = x * widthVar;

        var pS = new PositionVector(current, 0);
        var pE = new PositionVector(current, this.heigth());

        this.line(pS, pE);
    }

    this.context.closePath();
    this.draw_canvas();
}

// Draw a stright line along the x axis. which hits the bottom and top of the y axis. ----
grid_x( heigthVar )
{
    this.context.beginPath();

    this.setting_guide();

    let y;
    let t = Math.ceil(this.heigth() / heigthVar);

    for( y = 0;
         y < t;
         y++)
    {
        let current = y * heigthVar;

        var pS = new PositionVector(0, current);
        var pE = new PositionVector(this.width(), current);

        this.line(pS, pE);
    }

    this.context.closePath();
    this.draw_canvas();
}


setting_guide()
{
    this.context.strokeStyle = 'rgba(1, 1, 1, 0.4)';
}

setting_elements()
{
    this.context.strokeStyle = 'rgba(1, 1, 1, 1)';
}

setting_offline()
{
    this.context.strokeStyle = 'rgba(1, 0, 0, 1)';
}

setting_online()
{
    this.context.strokeStyle = 'rgba(0, 1, 0, 1)';
}

setting_between()
{
    this.context.strokeStyle = 'rgba(0, 0, 1, 1)';
}