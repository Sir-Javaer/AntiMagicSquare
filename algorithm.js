const { performance } = require('perf_hooks'); // import a preinstalled module

function antiMagicSquareBruteForceProofAlgorithm(base) {
    decimalToBase = (num, base) => { // function for converting decimal to bases 1 - 9
        let foo = '';
        if (num == 0) return '0'; // algorithm breaks if num is 0
        while (num > 0) {
            let remainder = num % base;
            foo = remainder.toString() + foo;
            num = Math.floor(num / base);
        }
        return foo.toString();
    };

    baseToDecimal = (num, base) => { // convert bases 1 - 9 to decimal
        let decimal = 0; // result
        let bits = 1; // individual bits of the string
        for (let i = 0; i < num.toString().length; i++) { // iterate through every bit
            let cNum = num.toString()[num.toString().length - i - 1]; // select current bit
            decimal += bits * cNum; // calculate decimal for the next bit
            bits *= base; // multiply bits for the next generation
        }
        return decimal.toString();
    };
    const validateSums = (grid) => { // function for sorting ASCII characters within a string
        const sortString = (string) => {
            return string.split('').sort().join('');
        };

        let sums = [];
        sums.push(sortString(grid[0] + grid[1] + grid[2])); // h1
        sums.push(sortString(grid[3] + grid[4] + grid[5])); // h2
        sums.push(sortString(grid[6] + grid[7] + grid[8])); // h3
        sums.push(sortString(grid[0] + grid[3] + grid[6])); // h4
        sums.push(sortString(grid[1] + grid[4] + grid[7])); // h5
        sums.push(sortString(grid[2] + grid[5] + grid[8])); // h6
        sums.push(sortString(grid[0] + grid[4] + grid[8])); // h7
        sums.push(sortString(grid[2] + grid[4] + grid[6])); // h8
        if (new Set(sums).size == sums.length) return true; // check for any duplicate sums
        return false;
    };
    let foo = ''; // temporary variable
    let numOfSolutions = 0;
    let solved = false;
    for (let i = 0; i < 9; i++) { // add 9 bits together in a string
        foo += (base - 1).toString();
    }
    const combinations =
        Number.parseInt(baseToDecimal(Number.parseInt(foo), base)) + 1; // convert bits to base 10 to find maximum number of combinations. base^9 also works
    const digits = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    for (let i = 0; i < combinations; i++) { // iterate through all combinations
        let string = decimalToBase(i, base); // generate a base string for the index
        let grid = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'];
        for (let j = 0; j < 9; j++) {
            if (j < string.length) {
                grid[j] = digits[Number.parseInt(string[j])]; // set the grid to that string
            }
        }
        let valid = validateSums(grid); // check whether the generated grid is a valid solution
        if (valid) {
            numOfSolutions++;
            solved = true; // mark that this base has a solution
            console.log('\n\nPossible solution found: \n'); // log the solution
            console.log(
                grid[0] +
                    grid[1] +
                    grid[2] +
                    '\n' +
                    grid[3] +
                    grid[4] +
                    grid[5] +
                    '\n' +
                    grid[6] +
                    grid[7] +
                    grid[8] +
                    '\n'
            );
        }
    }
    if (solved) { // check if this base is solvable
        console.log(numOfSolutions + ' solutions found \n'); // log the number of solutions found
        return combinations; // return some statistics
    }
    console.log('\n\nNo possible solution found\n'); // default to no solutions found
}
function solveAntiMagicSquareBruteForceProofAlgorithm(base) { // wrapper function
    console.clear();
    let a = performance.now(); // get the current time in ms
    combination = antiMagicSquareBruteForceProofAlgorithm(base);
    let b = performance.now(); // get the current time again
    console.log(
        'Computed in: ' +
            (b - a) +
            'ms through ' +
            combination +
            ' combinations\n'
    ); // log performance data
}

//*----------------- Entry Function -----------------*\\
solveAntiMagicSquareBruteForceProofAlgorithm(4);
