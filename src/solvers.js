/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting



// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  // Check if there are any row or column conflicts in each square
  for (var i = 0; i < n; i++) {
    // Loop through each row
    for (var j = 0; j < n; j++) {
      solution.attributes[i][j] = 1;

      if (!solution.hasRowConflictAt(i) && !solution.hasColConflictAt(j)){
        continue;
      } else {
        solution.attributes[i][j] = 0;
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

// Copied from hackreactor 2015-06-data-structures/sprint-two/src/tree.js repo solution branch
var Tree = function(value){
  var newTree = {};
  newTree.value = value;


  extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};



var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};


var treeMethods = {};

treeMethods.addChild = function(value){

  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){

  var found = false;
  var subroutine = function(node){
    if ( node.value === target ){
      found = true;
      return;
    }
    for ( var i = 0; i < node.children.length; i++ ){
      var child = node.children[i];
      subroutine(child);
    }
  }
  subroutine(this);
  return found;
};

treeMethods.traverse = function(callback){
  callback(this.value);

  if ( !this.children ){ return; }
  for ( var i = 0; i < this.children.length; i++ ){
    var child = this.children[i];
    debugger;
    child.traverse(callback);
  }
};
