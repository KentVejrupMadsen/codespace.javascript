class PresentAxisOperation
{
    constructor( show )
    {
        this.show = show;

    }

    get Show()
    {
        return this.show;
    }

    __drawLine( ctx, sP, eP )
    {
        ctx.moveTo( sP.X, sP.Y );
        ctx.lineTo( eP.X, eP.Y );
    }
}


class PresentXAxisOperation
    extends PresentAxisOperation
{
    constructor()
    {
        super( true );

    }

    draw( canvasContext, screenSize )
    {
        if( this.Show )
        {
            const pS = ZeroPositionVector.generate();
            const pE = new PositionVector( screenSize.X, 0 );

            canvasContext.beginPath();

            this.__drawLine( canvasContext, pS, pE );

            canvasContext.closePath();
            canvasContext.stroke();
        }

    }

}


class PresentYAxisOperation
    extends PresentAxisOperation
{
    constructor()
    {
        super( true );

    }

    draw( canvasContext, screenSize )
    {
        if( this.Show )
        {
            const pS = ZeroPositionVector.generate();
            const pE = new PositionVector(0, screenSize.Y );

            canvasContext.beginPath();

            this.__drawLine( canvasContext, pS, pE );

            canvasContext.closePath();
            canvasContext.stroke();
        }
    }
}

class PresentAxis
{
    constructor()
    {
        this.yAxis = new PresentYAxisOperation();
        this.xAxis = new PresentXAxisOperation();

        this.screenSize = null;

        this.showAxis = true;
    }

    get Screen()
    {
        return this.screenSize;
    }

    set Screen( v )
    {
        this.screenSize = v;
    }

    draw( canvasContext )
    {
        canvasContext.lineWidth = 4;

        if( this.ShowAxis )
        {
            this.xAxis.draw( canvasContext, this.Screen );
            this.yAxis.draw( canvasContext, this.Screen );
        }

        canvasContext.lineWidth = 1;
    }

    get ShowAxis()
    {
        return this.showAxis;
    }
}