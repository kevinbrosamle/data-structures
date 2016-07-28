

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
  // remove reference to node in graph edges
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].node === node) {
      this.edges.splice(i, 1);
      i--;
    }
  }

  // iterate through edges in graph
    // if current index's edges array contains 'node', 
      // remove 'node' from the array


};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  console.log(this);
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
    } else if (this.edges[i].node === toNode) {
      temp2 = this.edges[i];
    }
  }
  temp1.edges.push(temp2);
  temp2.edges.push(temp1);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.edges.length; i++) {
    cb(this.edges[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


