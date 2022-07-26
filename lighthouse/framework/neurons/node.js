const NeuronInput = require('./neuronInput.js');
const Activator = require('./sigmoidActivation.js');


module.exports =
    class NeuronNode
    {
        constructor()
        {
            this.inputs = Array()
            this.output = 0;
            this.activator = new Activator();
        }


        get Activator()
        {
            return this.activator;
        }

        set Activator( value )
        {
            this.activator = value;
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