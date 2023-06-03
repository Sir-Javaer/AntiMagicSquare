# AntiMagicSquare Bruteforce Algorithm

This is a bruteforce algorithm to find all possible layouts of valid solutions in a variation of an anti-magic square. This anti-magic square's diagonals, horizontals, and verticals must have unique sums (not necessary consecutive sums) to create a valid solution. The aim of these puzzles is to complete one using the least amount of unique numbers (numbers can repeat in the square as much as needed). The algorithm finds every possible solution - if there is one.

## Requirements

NodeJS must be installed

## Usage

```js
    solveAntiMagicSquareBruteForceProofAlgorithm(base);
```

The 'base' variable refers to how many unique digits will be used in the process of generating and validating all possible combinations.

To run the algorithm:

```bash
    node "...\AntiMagicSquare\algorithm.js"
```

'...' represents the rest of the file path. Use forward or backward slashes depending on your operating system; the example works for Windows.

## Efficiency

This algorithm has a low overall efficiency but uses slight optimizations where possible.

| Machine  | Performance |
| ------------- | ------------- |
| My Machine  | Computed in: 1268.1906000003219ms through 262144 combinations |
| Free REPL   | Computed in: 7088.245520999655ms through 262144 combinations |
