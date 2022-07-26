module.exports=
    class NeuronInput
    {
        constructor()
        {
            this.Weight = 0;
            this.Input = 0;
        }

        get Input()
        {
            return this.input;
        }

        set Input( value )
        {
            this.input = value;
        }

        get Weight()
        {
            return this.weight;
        }

        set Weight( value )
        {
            this.weight = value;
        }


        get sum()
        {
            return this.weight * this.input;
        }
    }