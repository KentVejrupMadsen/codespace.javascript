/**
 *
 */
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

    set GridSize( s )
    {
        this.size = s;
    }

    __grid_line( sp, ep, context )
    {
        context.moveTo( sp.X, sp.Y );
        context.lineTo( ep.X, ep.Y );
    }

    __set_color( context )
    {
        context.strokeStyle = 'rgba( 25, 25, 25, 0.4 )';
    }

    __reset_color( context )
    {
        context.strokeStyle = 'rgba( 0, 0, 0, 1.0 )';
    }
}


/**
 *
 */
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
            this.__set_color( canvasContext );

            canvasContext.beginPath();

            this.__draw_x_lines( canvasContext, screenSize );

            canvasContext.closePath();
            canvasContext.stroke();

            this.__reset_color( canvasContext );
        }
    }

    __draw_x_lines( context, screenSize )
    {
        const t = Math.ceil( screenSize.Y / this.GridSize );

        let y;

        for( y = 0;
             y < t;
             y++ )
        {
            const current = offsetByOne( y ) * this.GridSize;

            const pS = new PositionVector(0, calculateOffsetY( current, screenSize.Y ) );
            const pE = new PositionVector( screenSize.X , calculateOffsetY( current, screenSize.Y ) );

            this.__grid_line( pS, pE, context );
        }
    }
}


/**
 *
 */
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
            this.__set_color( canvasContext );

            canvasContext.beginPath();

            this.__draw_y_lines( canvasContext, screenSize );

            canvasContext.closePath();
            canvasContext.stroke();

            this.__reset_color( canvasContext );
        }
    }

    __draw_y_lines( context, screenSize )
    {
        this.__set_color( context );

        const t = Math.ceil( screenSize.X / this.GridSize );

        let x;

        for( x = 0;
             x < t;
             x++ )
        {
            const current = offsetByOne( x ) * this.GridSize;

            const pS = new PositionVector( current, calculateOffsetY(0, screenSize.Y ) );
            const pE = new PositionVector( current , calculateOffsetY( screenSize.Y, screenSize.Y ));

            this.__grid_line( pS, pE, context );
        }

    }
}


/**
 *
 */
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
        const ctx = canvasContext;

        if( this.Show )
        {
            this.yGrid.draw( ctx, this.Screen );
            this.xGrid.draw( ctx, this.Screen );
        }
    }
}
