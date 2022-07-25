class NodeGraphLayer
{
    constructor( n )
    {
        this.nodes = Array();

        this._generateElements( n );
    }

    Element( idx )
    {
        return this.nodes[idx];
    }

    _generateElements( n )
    {
        let idx;

        for( idx = 0;
             idx < n;
             idx ++ )
        {
            this.nodes.push( new NodeElement( idx ) );
        }
    }


    /**
     * Returns an array of the layers content
     */
    toElementArray()
    {
        const sizeOf = this.nodes.length;
        let elements = Array();

        let idx;

        for( idx = 0;
             idx < sizeOf;
             idx++ )
        {
            let current = this.Element( idx );
            elements.push( current );
        }

        return elements;
    }

    get Size()
    {
        return this.nodes.length;
    }


    // Accessors
    set Nodes( Values )
    {
        this.nodes = Values;
    }

    get Nodes()
    {
        return this.nodes;
    }
}


class NodeNetwork
{
    constructor( input, x, y, output )
    {
        this.inputLayer = new NodeGraphLayer( input );
        this.middleLayer = Array();
        this.outputLayer = new NodeGraphLayer( output );

        this.generateMiddle( x, y );
    }

    generateMiddle( x, y )
    {
        let idx;

        for( idx = 0;
             idx < y;
             idx++ )
        {
            this.middleLayer.push( new NodeGraphLayer( y ) );
        }
    }

    getMiddleLayerSize()
    {
        return this.middleLayer.length;
    }

    getMiddleLayer( idx )
    {
        return this.middleLayer[idx];
    }

    connectNeighbors()
    {
        this._connect_input_layer();
        this._connect_middleLayerInternally(0 );
        this._connect_middleLayerToOutput();
    }

    _connect_middleLayerInternally( indexedLayer )
    {
        let layer = this.getMiddleLayer(indexedLayer);
        let sizeOfLayer = layer.Size;

        let nextLayer = this.__connect_middleLayer_next( indexedLayer );

        let idx;

        for( idx = 0;
             idx < sizeOfLayer;
             idx++ )
        {
            let c = layer.Element( idx );
            c.Neighbors = nextLayer;
        }

        let next = indexedLayer + 1;
        if( next < ( this.getMiddleLayerSize() - 1 ) )
        {
            this._connect_middleLayerInternally( next );
        }
    }

    __connect_middleLayer_next( idx )
    {
        let nextLayer = this.getMiddleLayer(idx + 1);
        return nextLayer.toElementArray();
    }


    _connect_middleLayerToOutput()
    {
        let lastElements = this.__retrieve_lastMiddleLayer();
        const sizeOf = lastElements.length;

        let idx;
        let neighbors = this.outputLayer.toElementArray();

        for( idx = 0;
             idx < sizeOf;
             idx++ )
        {
            let current = lastElements[idx];
            current.Neighbors = neighbors;
        }
    }

    _connect_input_layer()
    {
        let Elements = this.inputLayer.toElementArray();
        const sizeOf = Elements.length;

        let idx;

        let neigh = this.__retrieve_firstMiddleLayer();

        for( idx = 0;
             idx < sizeOf;
             idx++)
        {
            let current = Elements[idx];
            current.Neighbors = neigh;
        }
    }

    __retrieve_firstMiddleLayer()
    {
        let l = this.getMiddleLayer(0);
        return l.toElementArray();
    }

    __retrieve_lastMiddleLayer()
    {
        const last = this.getMiddleLayerSize() - 1;

        let l = this.getMiddleLayer( last );
        return l.toElementArray();
    }
}