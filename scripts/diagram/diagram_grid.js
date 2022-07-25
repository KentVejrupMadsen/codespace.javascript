class PresentGridOperation
{
    constructor( Show )
    {
        this.Show = Show;
        this.GridSize = 25;

    }

    get Show()
    {
        return this.show;
    }

    set Show( X )
    {
        this.show = X;
    }

    get GridSize()
    {
        return this.size;
    }

    set GridSize(s)
    {
        this.size = s;
    }

    __grid_line( sp, ep, context )
    {
        context.moveTo( sp.X, sp.Y );
        context.lineTo( ep.X, ep.Y );
    }
}


class PresentXGridOperation
    extends PresentGridOperation
{
    constructor()
    {
        super( true );

    }

    draw( canvasContext, screenSize )
    {

        if( this.Show )
        {
            canvasContext.beginPath();

            this.__draw_x_lines( canvasContext, screenSize );

            canvasContext.closePath();

            canvasContext.stroke();
        }
    }

    __draw_x_lines( context, screenSize )
    {
        const t = Math.ceil( screenSize.Y / this.GridSize );

        let y;

        for( y = 0; y < t; y++ )
        {
            const current = y * this.GridSize;

            let pS = new PositionVector(0, current);
            let pE = new PositionVector( screenSize.X , current );

            this.__grid_line( pS, pE, context );
        }
    }
}


class PresentYGridOperation
    extends PresentGridOperation
{
    constructor()
    {
        super( true );

    }

    draw( canvasContext, screenSize )
    {
        if( this.Show )
        {
            canvasContext.beginPath();

            this.__draw_y_lines( canvasContext, screenSize );

            canvasContext.closePath();
            canvasContext.stroke();
        }
    }

    __draw_y_lines( context, screenSize )
    {
        const t = Math.ceil( screenSize.X / this.GridSize );

        let x;

        for( x = 0; x < t; x++ )
        {
            const current = x * this.GridSize;

            let pS = new PositionVector(current, 0);
            let pE = new PositionVector( current , screenSize.Y );

            this.__grid_line( pS, pE, context );
        }
    }

}


class PresentGrid
{
    constructor()
    {
        this.yGrid = new PresentYGridOperation();
        this.xGrid = new PresentXGridOperation();

        this.screen = null;

        this.showGrid = true;
    }

    get Y()
    {
        return this.yGrid;
    }

    get X()
    {
        return this.xGrid;
    }

    get Screen()
    {
        return this.screen;
    }

    set Screen( v )
    {
        this.screen = v;
    }

    get Show()
    {
        return this.showGrid;
    }


    draw( canvasContext )
    {
        if( this.Show )
        {
            this.yGrid.draw( canvasContext, this.Screen );
            this.xGrid.draw( canvasContext, this.Screen );
        }
    }
}