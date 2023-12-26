# ChessBoard.vue

This Vue component represents the game board. It is responsible for rendering the squares of the board and handling the selection of a square.

## Template Structure

The template contains a div with a class of "board". Each span represents a square on the board and has a click event listener that calls the `onSquareSelect` method with the index of the square.

## Props

- `onSquareSelect`: A function that is called when a square is selected. It is required.

## Methods

- `getDataRank(square: number)`: This method calculates the rank (row) of a square on the game board. The squares are numbered from 1 to 64, starting from the top left of the board and going right and down. It returns the rank of the square, or null if the square is not the first square of a rank.
- `getDataFile(square: number)`: This method calculates the file by subtracting the square number from 105 and taking the remainder when divided by 8. It then converts this number to a character code to get a letter from 'a' to 'h'. If the square number is greater than 8, it means the square is not in the first rank, so it returns null.
