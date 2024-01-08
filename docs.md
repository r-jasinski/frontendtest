App.vue
==
- `handleSelect`
This method is used to handle the event when a square on a chessboard is selected:
1. `const file = String.fromCharCode(104 - ((square - 1) % 8))`: This line calculates the file (column) of the chessboard. The `square` variable represents the square number on the chessboard, ranging from 1 to 64. The expression `(square - 1) % 8` gives a number between 0 and 7. Subtracting this from 104 gives a number between 97 and 104. `String.fromCharCode` is then used to convert these ASCII values to characters, resulting in a character between 'a' and 'h'.
2. `const rank = Math.ceil(square / 8)`: This line calculates the rank (row) of the chessboard. The `square` variable is divided by 8 and then rounded up using `Math.ceil`. This results in a number between 1 and 8, which represents the rank of the square on the chessboard.
3. `const data: Notation = { square, notation: `${file}${rank}` }`: This line creates a new object of type `Notation`. This object has two properties: `square`, which is the number of the square on the chessboard, and `notation`, which is a string representing the square in standard chess notation (e.g., 'e4').
4. `this.notations.push(data)`: This line adds the newly created `Notation` object to the `notations` array. This array is part of the component's data and is used to keep track of all the squares that have been selected.


ChessBoard.vue
==
- `v-for`
This directive is used to render a list of items based on an array:
1. `v-for="index in Array.from({ length: 64 }, (_, index) => 64 - index)"`: This directive creates a list of 64 items. The Array.from method is used to create an array of length 64. The second argument to Array.from is a map function that is called for each element in the array.
2. `(_, index) => 64 - index`: This is the map function. It takes two arguments: the current element (which is ignored, hence the _), and the index of the current element. The function returns 64 - index, so the first element of the array will be 64, the second will be 63, and so on, down to 1 for the last element.
3. `index`: This is the alias for the element being iterated over. In this case, it represents the current number from the array.
So, this v-for directive will create 64 elements, with index going from 64 to 1.

- `getDataRank`
This method is used to calculate the rank (row) of a square on a chessboard:
1. `if (square % 8 !== 0) return null`: This line checks if the square number is not a multiple of 8. If it's not, the method returns null. This is because in a standard 8x8 chessboard, only the squares that are multiples of 8 are the last squares of their respective ranks.
2. `const rank = square / 8`: If the square number is a multiple of 8, this line calculates the rank by dividing the square number by 8. Since the squares are numbered from 1 to 64, this will result in a number between 1 and 8, which represents the rank of the square on the chessboard.
3. `return rank`: This line returns the calculated rank.
So, this method returns the rank of a square if the square is the last square of a rank, and null otherwise.

- `getDataFile`
This method is used to calculate the file (column) of a square on a chessboard:
1. `if (square > 8) return null`: This line checks if the square number is greater than 8. If it is, the method returns null. This is because in a standard 8x8 chessboard, only the squares that are numbered from 1 to 8 are the first squares of their respective files.
2. `const file = String.fromCharCode(104 - (square - 1))`: If the square number is not greater than 8, this line calculates the file. The expression 104 - (square - 1) gives a number between 97 and 104. String.fromCharCode is then used to convert these ASCII values to characters, resulting in a character between 'a' and 'h', which represents the file of the square on the chessboard.
3. `return file`: This line returns the calculated file.
So, this method returns the file of a square if the square is the first square of a file, and null otherwise.

- `span:nth-child(1) ~ span:nth-child(-2n + 8)`
This CSS rule set is using the nth-child pseudo-class to select specific span elements based on their position in the list of children of their parent element:
1. `span:nth-child(1) ~ span:nth-child(-2n + 8)`: This selector targets every span that is a sibling of the first span and is also an even-numbered child from the 8th to the 2nd.
2. `span:nth-child(8) ~ span:nth-child(-2n + 15)`: This selector targets every span that is a sibling of the 8th span and is also an even-numbered child from the 15th to the 9th.
The pattern continues for the rest of the selectors, each targeting a different set of span elements.
3. `background-color: var(--color-green-300);`: This line sets the background color of the selected span elements to the color defined by the --color-green-300 CSS variable.
4. `color: var(--color-gray-300);`: This line sets the text color of the selected span elements to the color defined by the --color-gray-300 CSS variable.
So, this CSS rule set is used to apply a checkerboard pattern to the span elements, which represent squares on a chessboard. The span elements that match these selectors are the dark squares on the chessboard.


SideBar.vue
==
- `ol`
This CSS rule set applies styles to ol (ordered list) elements:
1. `counter-reset: item;`: This line resets a CSS counter named item. CSS counters are, in essence, variables maintained by CSS whose values can be incremented by CSS rules to track how many times they're used. This can be useful for custom list numbering, among other things

- `li:not(:last-of-type):before`
This CSS rule set applies styles to li (list item) elements, except for the last one:
1. `content: counter(item) '\002E';`: This line sets the content of the ::before pseudo-element to the current value of the item counter followed by a period ('.'). The '\002E' is a Unicode escape sequence for the period character.
2. `counter-increment: item;`: This line increments the item counter by 1. This means that each li will have a number before it that is one higher than the previous li.
