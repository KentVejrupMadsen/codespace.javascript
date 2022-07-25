const stateLabelActive   = 'active';
const stateLabelInactive = 'Inactive';
const stateLabelLink     = 'link';

var counter = 0;


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
        this.id = counter;
        this.state = new NodeState();

        NodeElement.forwardCounter();

        // connected to it's neighbors
        this.neighbors = null;
    }

    static forwardCounter()
    {
        counter = counter + 1;
    }

    get Identifier()
    {
        return this.id;
    }

    set Identifier( v )
    {
        this.id = v;
    }

    //
    get State()
    {
        return this.state;
    }

    //
    get Neighbors()
    {
        return this.neighbors;
    }

    set Neighbors( v )
    {
        this.neighbors = v;
    }


}