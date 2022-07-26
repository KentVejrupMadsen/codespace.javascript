module.exports=
    class NodeInputIterator
    {
        constructor( array=Array , s=0 )
        {

            this.iterate = array;

            this.current = s;
            this.end = array.length;
        }

        get Continue()
        {
            return this.current < this.end;
        }

        get Current()
        {
            return this.current;
        }

        set Current( value )
        {
            this.current = value;
        }

        get CurrentValue()
        {
            return this.iterate[this.Current];
        }

        get Next()
        {
            const cv = this.current;
            this.current = cv + 1;

            return this.current;
        }
    }