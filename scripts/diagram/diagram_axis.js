class PresentAxisOperation
{
    constructor( show )
    {
        this.show = show;
        this.size = 50;

    }


}


class PresentXAxisOperation
    extends PresentAxisOperation
{
    constructor()
    {
        super( true );

    }

    draw( canvasContext )
    {

    }

}


class PresentYAxisOperation
    extends PresentAxisOperation
{
    constructor()
    {
        super( true );

    }

    draw( canvasContext )
    {

    }

}

class PresentAxis
{
    constructor()
    {
        this.yAxis = new PresentYAxisOperation();
        this.xAxis = new PresentXAxisOperation();

        this.showAxis = true;
    }

    draw( canvasContext )
    {

    }
}