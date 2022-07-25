let diagram = null;


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

    diagram.test();

    diagram.update();

    requestAnimationFrame( draw );
}