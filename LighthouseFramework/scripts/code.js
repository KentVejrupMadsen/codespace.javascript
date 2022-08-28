let diagram = null;

let lock = false;


function onSizeChange( e )
{
    if( !lock )
    {
        lock = true;

        diagram.dimensionsIsChanged = true;

        lock = false;
    }
}

function main()
{
    diagram = new Diagram("mainCanvas" );
    diagram.initialise();

    draw();
}

function draw()
{
    diagram.clean();
    diagram.draw();

    requestAnimationFrame( draw );
}

addEventListener("resize", function (e){onSizeChange(e)});

addEventListener("load", function (e){main();});