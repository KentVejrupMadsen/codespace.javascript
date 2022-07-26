const NeuronInput = require( './neuronInput.js' );
const Activator = require( './sigmoidActivation.js' );
const Iterator = require( './nodeInputIterator.js' );

module.exports =
    class NeuronNode
    {
        constructor()
        {
            this.inputs = Array()
            this.output = 0;

            this.learn = 0.25;

            this.activator = new Activator();
        }


        // Trains the specific neuron for x amount of iterations. keep in mind counted in steps
        train( iterations, values )
        {

        }
        

        generateInputIterator()
        {
            return new Iterator( this.inputs );
        }

        calculateOutput()
        {
            let result = 0;
            let idx;

            for( idx = 0;
                 idx < this.inputs.length;
                 idx ++ )
            {
                const current = this.inputs[idx];
                result = result + current.sum;
            }

            this.output = result;
            return this.output;
        }


        // Accessors
        get Activator()
        {
            return this.activator;
        }

        set Activator( value )
        {
            this.activator = value;
        }

        get Learn()
        {
            return this.learn;
        }

        set Learn( value )
        {
            this.learn = value;
        }

        get Inputs()
        {
            return this.inputs;
        }

        set Inputs( value )
        {
            this.inputs = value;
        }

        get Output()
        {
            return this.output;
        }

        set Output( value )
        {
            this.output = value;
        }

        generate( n )
        {
            let x = 0;

            for( x = 0;
                 x < n;
                 x ++ )
            {
                let ni = new NeuronInput();
                this.inputs.push( ni );
            }
        }
    }