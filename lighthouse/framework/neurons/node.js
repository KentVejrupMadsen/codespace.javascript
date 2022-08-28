const NeuronInput = require( './neuronInput.js' );
const Activator = require( './sigmoidActivation.js' );
const Iterator = require( './nodeInputIterator.js' );
const DataSet = require('./dataset.js');

module.exports =
    class NeuronNode
    {
        constructor()
        {
            this.inputs = Array()
            this.output = 0;
            this.bias = 2;

            this.learn = 0.25;
            this.threshold = 0.75;

            this.activator = new Activator();
        }


        // Trains the specific neuron for x amount of iterations. keep in mind counted in steps
        train( iterations, TrainWith )
        {
            if( TrainWith instanceof Array )
            {
                this._trainWithArrayDataset( TrainWith, iterations );
                return;
            }

            if( TrainWith instanceof DataSet )
            {
                this._trainWithDataset( TrainWith, iterations );
                return;
            }

            throw new Error();
        }

        _trainWithArrayDataset( array, iterations, iterate=0 )
        {
            if( !(iterate === iterations) )
            {
                const next = iterate + 1;
                this._trainWithArrayDataset( array, iterations, next );
            }
        }

        _trainWithDataset( dataset, iterations, iterate=0 )
        {

            if( !(iterate === iterations) )
            {
                const next = iterate + 1;
                this._trainWithDataset(dataset, iterations, next);
            }
        }

        mapDataSet()
        {
            let r = new DataSet();
            r.generateInputs( this.inputs.length );

            return r;
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

            return result;
        }

        activate()
        {
            const v = this.activator.activate( this.calculateOutput(), this.bias, 1);
            this.Output = v;

            return v;
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

        get Threshold()
        {
            return this.threshold;
        }

        set Threshold( value )
        {
            this.threshold = value;
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

        get Bias()
        {
            return this.bias;
        }

        set Bias( value )
        {
            this.bias = value;
        }

        get Output()
        {
            return this.output;
        }

        get OutputValue()
        {
            if( this.Output > this.threshold )
            {
                return 1;
            }

            return 0;
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