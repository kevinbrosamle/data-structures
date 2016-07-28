

// Instantiate a new graph
var Graph = function(node) {
  this.node = node || null;
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.edges.push(new Graph(node));
  // console.log(this);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // if (searched === undefined) {
  //   var searched = [];
  // }

  // var found = false;
  // for (var i = 0; i < searched.length; i++) {
  //   if (searched[i] === node) {
  //     found = true;
  //   }
  // }
  // if (!found) {
  //   if (this.node === node) {
  //     return true;
  //   }
  //   searched.push(node);
  //   for (var i = 0; i < this.edges.length; i++) {
  //     this.edges[i].contains(node, searched);
  //   }
  // }
  // return false;
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].node === node) {
      return true;
    }
  }
  return false;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var targets;

  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].node === node) {
      targets = this.edges[i].edges;
    }
  }
  for (i = 0; i < targets.length; i++) {
    this.removeEdge(node, targets[i].node);
  }

  for (i = 0; i < this.edges.length; i++) {
    if (this.edges[i].node === node) {
      this.edges.splice(i, 1);
      i--;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    var currentNode = this.edges[i];
    if (currentNode.node === fromNode) {
      for (var j = 0; j < currentNode.edges.length; j++) {
        if (currentNode.edges[j].node === toNode) {
          return true;
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // iterate through all nodes to find the node that contains the value fromNode. Store this node in temp1
  // iterate through all nodes to find the node that contains the value toNode. Store this node in temp2
  // use forEachNode to travers nodes.
  // push each node to the others edges array
  var temp1, temp2;
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].node === fromNode) {
      temp1 = this.edges[i];
    }
    if (this.edges[i].node === toNode) {
      temp2 = this.edges[i];
    }
  }
  temp1.edges.push(temp2);
  temp2.edges.push(temp1);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var allNodes = this.edges;
  for (var i = 0; i < allNodes.length; i++) {
    internalEdges = allNodes[i].edges;
    if (allNodes[i].node === fromNode) {
      for (var j = 0; j < internalEdges.length; j++) {
        if (internalEdges[j].node === toNode) {
          internalEdges.splice(j, 1);
          j--;
        }
      }
    } else if (allNodes[i].node === toNode) {
      for (var j = 0; j < internalEdges.length; j++) {
        if (internalEdges[j].node === fromNode) {
          internalEdges.splice(j, 1);
          j--;
        }
      }
    }
  }
  // for (var i = 0; i < this.edges.length; i++) {
  //   if (this.edges[i].node === fromNode) {
  //     for (var j = 0; j < this.edges[i].edges.length; j++) {
  //       console.log(this.edges[i].edges[j]);
  //       if (this.edges[i].edges[j] === toNode) {
  //         console.log('test');
  //         this.edges[i].edges.splice(j, 1);
          
  //         j--;
  //       }
  //     }
  //   }
  // }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.edges.length; i++) {
    console.log(this.edges[i]);
    cb(this.edges[i].node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


