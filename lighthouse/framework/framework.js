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
            this.test_in();
        }

        test_in()
        {
            console.log('lighthouse ------- Running Test');

            let n = new Node();
            n.generate(2);

            let it = n.generateInputIterator();

            while ( it.Continue )
            {
                let currentValue = it.CurrentValue;

                currentValue.Weight = Math.random();
                currentValue.Input = Math.random() * 0.8;

                it.Next;
            }

            console.log("=====================================================");
            console.log( n.activate() );

            console.log("=====================================================");
            console.log( n );
            console.log(n.OutputValue);


            console.log("=====================================================");
            let ds1 = n.mapDataSet();
            n.train(2, ds1);

            console.log("trained");
            console.log(ds1);
            console.log(n);

        }
    }