let diagram = null;

function main()
{
    diagram = new Diagram("mainCanvas");
    diagram.initialise();

    draw();
}


function draw()
{
    diagram.clean();
    diagram.draw();

    requestAnimationFrame( draw );
}