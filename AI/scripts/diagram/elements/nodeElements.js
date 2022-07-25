const stateLabelActive   = 'active';
const stateLabelInactive = 'Inactive';
const stateLabelLink     = 'link';


class NodeState
{
    constructor()
    {
        this.assignLink();
    }

    
    // Accessors
    set State( v )
    {
        this.state = v;
    }

    get State()
    {
        return this.state;
    }


    //
    assignActive()
    {
        this.State = stateLabelActive;
    }

    assignInactive()
    {
        this.State = stateLabelInactive;
    }

    assignLink()
    {
        this.State = stateLabelLink;
    }
}


class NodeElement
{
    constructor()
    {
        this.state = new NodeState();
        this.neighbors = null;
    }

    get State()
    {
        return this.state;
    }

    get Neighbors()
    {
        return this.neighbors;
    }

    set Neighbors( v )
    {
        this.neighbors = v;
    }


}


class NodeList
{
    constructor( n )
    {

    }

}