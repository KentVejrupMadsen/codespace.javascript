module.exports=
    class Dataset
    {
        constructor( inputX=Array(), result=0 )
        {
            this.inputs = inputX;
            this.expected = result;
        }

        generateInputs( n )
        {
            let idx;

            for( idx = 0;
                 idx < n;
                 idx++ )
            {
                this.inputs.push(0);
            }
        }

        get Expected()
        {
            return this.expected;
        }

        set Expected(value)
        {
            this.expected = value;
        }

        get Inputs()
        {
            return this.inputs;
        }

        set Inputs( values )
        {
            this.inputs = values;
        }
    }