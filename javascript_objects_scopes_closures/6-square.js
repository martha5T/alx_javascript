#!/usr/bin/node
// a class Square that defines a square and inherits from Square of 5-square.js

const Square = require('./5-square.js');

class SquareE extends Square {

  charPrint(c) {
    for (let i = 1; i <= this.height; i++) {
        let output = '';
        for (let j = 1; j <= this.width; j++) {
            if (c === undefined) {
              output += 'X';
            } else {
              output += c;
            }
        }
        console.log(output);
      }
  }
}

module.exports = SquareE;