import { Board } from './../src/sudoku.js';

describe('BoardCheck', function() {

  var testBoard = new Board([1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
     [1,2,3,4,5,6,7,8,9],
     [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
       [1,2,3,4,5,6,7,8,9]);

  // var testBoard = new Board([3,9,2,3,3,4,5,6,6],
    // [1,2,3,4,5,6,7,8,9],
    // [2,2,2,5,8,1,2,2,2],
    // [2,2,4,2,2,2,2,2,2],
    // [5,1,7,2,2,2,9,2,2],
    // [6,2,3,2,2,2,3,7,2],
    // [1,2,2,8,2,4,2,2,2],
    // [7,2,6,2,2,2,8,1,2],
    // [3,2,2,2,9,2,2,2,2]);

  it('should only contain integers from 1-9 in the first digit entered', function() {

    expect(typeof testBoard.row6[2]).toEqual('number');
  });

  it('each row should only contain integers from 1-9 in the row entered', function() {

      for(var j = 0; j < 9; j++) {
        var rowNumber = ('row'+j);
        var testRow = testBoard[rowNumber];
        for(var i = 0; i < 9; i++) {
          expect(typeof(testRow[i])).toEqual('number');
          expect(testRow[i]).not.toBeLessThan(1);
          expect(testRow[i]).toBeLessThan(10);
      }
    }
  });

  it('each row should have no more than one of each number, 1-9', function() {
    var j=0;
        var rowNumber = ('row'+j);
        var testRow = testBoard[rowNumber];
        // var repeatArray = [];
        // for(var i = 0; i < 9; i++) {
        //   repeatArray.push(testRow[i]);
          var results = testRow.sort();
          var control = [1,2,3,4,5,6,7,8,9];
          control = control.sort();
          expect(results).toEqual(control);

    })
  });
  //
  // it('each column should have no more than one of each number, 1-9', function() {
  //
  //     for(var j = 0; j < 9; j++) {
  //       var rowNumber = ('row'+j);
  //       var testRow = testBoard[rowNumber];
  //       for(var i = 0; i < 9; i++) {
  //         expect(typeof(testRow[i])).toEqual('number');
  //         expect(testRow[i]).not.toBeLessThan(1);
  //         expect(testRow[i]).toBeLessThan(10);
  //     }
  //   }
  //
  //
  // });
