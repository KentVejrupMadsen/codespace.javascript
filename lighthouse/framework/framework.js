const Storage = require( './storage.js' );
const IO = require( './io.js' );

const Node = require('./neurons/node.js');


module.exports =
    class Framework
    {
        constructor()
        {

        }

        initialise()
        {

        }

        execute()
        {

        }

        clean()
        {

        }


        test()
        {
            console.log('lighthouse ------- Running Test');

            let n = new Node();
            n.generate(15);

            console.log( n.Activator.activate(4, 0.2, 1) );
            console.log(n.inputs);
        }
    }