const { performance } = require('perf_hooks');

function decimalToBase(num, base) {
    let foo = '';
    if (num == 0) return '0';
    while (num > 0) {
        let remainder = num % base;
        foo = remainder.toString() + foo;
        num = Math.floor(num / base);
    }
    return foo.toString();
}

function baseToDecimal(num, base) {
    let decimal = 0;
    let bits = 1;
    for (let i = 0; i < num.toString().length; i++) {
        let cNum = num.toString()[num.toString().length - i - 1];
        decimal += bits * cNum;
        bits *= base;
    }
    return decimal.toString();
}

function antiMagicSquareBruteForceProofAlgorithm(numNum) {
    const validateSums = (grid) => {
        const sortString = (string) => {
            return string.split('').sort().join('');
        };

        let sums = [];
        sums.push(sortString(grid[0] + grid[1] + grid[2]));
        sums.push(sortString(grid[3] + grid[4] + grid[5]));
        sums.push(sortString(grid[6] + grid[7] + grid[8]));
        sums.push(sortString(grid[0] + grid[3] + grid[6]));
        sums.push(sortString(grid[1] + grid[4] + grid[7]));
        sums.push(sortString(grid[2] + grid[5] + grid[8]));
        sums.push(sortString(grid[0] + grid[4] + grid[8]));
        sums.push(sortString(grid[2] + grid[4] + grid[6]));
        if (new Set(sums).size == sums.length) return true;
        return false;
    };
    let foo = '';
    let numOfSolutions = 0;
    let solved = false;
    for (let i = 0; i < 9; i++) {
        foo += (numNum - 1).toString();
    }
    const combinations =
        Number.parseInt(baseToDecimal(Number.parseInt(foo), numNum)) + 1;
    const digits = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    for (let i = 0; i < combinations; i++) {
        let string = decimalToBase(i, numNum);
        let grid = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'];
        for (let j = 0; j < 9; j++) {
            if (j < string.length) {
                grid[j] = digits[Number.parseInt(string[j])];
            }
        }
        let valid = validateSums(grid);
        if (valid) {
            numOfSolutions++;
            solved = true;
            solution = grid;
            console.log('\n\nPossible solution found: \n');
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
    if (solved) {
        console.log(numOfSolutions + ' solutions found \n');
        return combinations;
    }
    console.log('\n\nNo possible solution found\n');
}
console.clear();
let a = performance.now();
combination = antiMagicSquareBruteForceProofAlgorithm(5);
let b = performance.now();
console.log(
    'Computed in: ' + (b - a) + 'ms through ' + combination + ' combinations\n'
);
