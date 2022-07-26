module.exports=
    class Activation
    {
        constructor()
        {

        }

        activate( value, slope, threshold )
        {
            let upper = 1 * threshold;

            let sub = -value * slope;
            let below = 1 + Math.exp(sub);

            return upper/below;
        }
    }