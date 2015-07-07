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
  var solutionCount = 0;
        // var testBoard = new Board({n: n});

        // seedFirstRow(testBoard);

        // var seedFirstRow = function(board){
        //   var randomIndex;
          
        //   // Only add a piece if one doesn't exist already
        //   if (_.indexOf(board.attributes[0], 1) === -1) {
        //     randomIndex = Math.floor(Math.random() * board.attributes.n);
        //     board.attributes[0][randomIndex] = 1;
        //   }
        // };

        // var firstRow = testBoard.attributes[0];

        // var getChildren = function(array) {

        //   var n = array.length;
        //   var newRow = Array.apply(null, Array(n)).map(Number.prototype.valueOf,0);
        //   var parentIndex = null;
        //   var insertAt = null;

        //   // Discover where rook exists in passed array
        //   for (var i = 0; i < n; i++) {
        //     if (array[i] === 1 && parentIndex === null) {
        //       parentIndex = i;
        //     }
        //   }

        //   // Generate empty rows based on passed array size
        //   for (var i = 0; i < n - 1; i++) {
        //     newArray.push(newRow);
        //   }

        //   console.log(n);
        //   // Iterate over new arrays and add 1s where applicable
        //   for (var i = 0; i < n - 1; i++) {


        //     //console.log("adding 1 at array[" + i + "][" + insertAt + "]");
        //     console.log(i);
        //     newArray[i][i] = 1;
            

        //     //console.log("i: " + i + " | insertAt: " + insertAt);
        //   }
        //   return tree.children;
        // };

  // var result = makeNewRows([1,0,0]);

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
