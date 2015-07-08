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

  var placeRook = function(rowIndex){
    
    for (var i = 0; i < n; i++) {
      solution.togglePiece(rowIndex, i);      
      
      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(rowIndex, i);
      } else {
        if (rowIndex < n - 1) {
          placeRook(rowIndex + 1);
        }
      }
    }
  };
  placeRook(0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  
  var solutionCount = 0;
  var testBoard = new Board({n: n});

  var placeRook = function(rowIndex){
    
    for (var i = 0; i < n; i++) {
      testBoard.togglePiece(rowIndex, i);      
      
      if (testBoard.hasAnyRooksConflicts()) {
        testBoard.togglePiece(rowIndex, i);
      } else {
        if (rowIndex === n - 1) {
          solutionCount++;
          testBoard.togglePiece(rowIndex, i);
          return;
        }
        if (rowIndex < n - 1) {
          placeRook(rowIndex + 1);
        }
      } 
      if (testBoard.attributes[rowIndex][i] === 1) {
        testBoard.togglePiece(rowIndex, i);
      }
    }
  };

  placeRook(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};





// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var solution = new Board({n: n});
  var isSolution = false;

  var countQueens = function(board) {
    var queens = 0;

    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (board.attributes[i][j] === 1) {
          queens++;
        }
      }
    }
    return queens;
  }

  var placeQueen = function(rowIndex) {
 
    for (var i = 0; i < n; i++) {
      solution.togglePiece(rowIndex, i);

      if (solution.hasAnyQueensConflicts()) {
        solution.togglePiece(rowIndex, i);
      } 
      else {
        if (rowIndex === n - 1 && countQueens(solution) === n) {
          // Solution exists
          console.log("solution?");
          displayBoard(solution.rows());
          isSolution = true;
          return; // for one solution
        }
        if (rowIndex < n - 1) {
          placeQueen(rowIndex + 1);
        }
      }
      if (isSolution === false && solution.attributes[rowIndex][i] === 1) {
        solution.togglePiece(rowIndex, i);
      }  
      
    }
  };
  
  placeQueen(0); 

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};






// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var solution = new Board({n: n});

  if (n === 0) {
    return 1;
  } 

  var placeQueen = function(rowIndex) {

    for (var i = 0; i < n; i++) {
      solution.togglePiece(rowIndex, i);

      if (solution.hasAnyQueensConflicts()) {
        solution.togglePiece(rowIndex, i);
      } 
      else {
        if (rowIndex === n - 1 && countQueens(solution) === n) {
          // Solution exists
          solutionCount++;
        }
        if (rowIndex < n - 1) {
          placeQueen(rowIndex + 1);
        }
      }
      if (solution.attributes[rowIndex][i] === 1) {
        solution.togglePiece(rowIndex, i);
      }
    }
  };
  
  var countQueens = function(board) {
    var queens = 0;

    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (board.attributes[i][j] === 1) {
          queens++;
        }
      }
    }
    return queens;
  }

  placeQueen(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
