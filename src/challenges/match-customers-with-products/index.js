process.stdin.resume();
process.stdin.setEncoding('utf8');

function countLetters(word, dict) {
    let count = 0;
    
    // Count letters mach dictionary.
    for (let letter of word) {
        if (dict.indexOf(letter) !== -1) count++;   
    }
    
    return count;
}

function cleanUp(word) {
    // Delete everything but letters, and make it lower case.
    return word
        .match(/[a-z]/gi)
        .join('')
        .toLowerCase();
}

// O(n)
function getFactors(numb) {
    const output = [];
    
    // Start counting from 2, because we do not care about common factors 1.
    for (let i = 2; i <= numb; i++) {
        if (numb % i === 0) {
            output.push(i);
        }
    }
    
    return output;
}

// O(n)
function doesShareCommons(a, b) {
    //@TODO: can be refactored by finding the smallest array
    // and iterating it. 
    for (let numb of a) {
        if (b.indexOf(numb) !== -1) {
            return true;
        }
    }
    
    return false;
}

function ss(customer, product) {
    let ss = 0;
    
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    const consonants = [
        'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 
        'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z'
    ];
    
    const customerClean = cleanUp(customer);
    const productClean = cleanUp(product);

    if (productClean.length % 2 === 0) {
        // If the number of letters in the product's name is even
        // then the SS is the number of vowels (a, e, i, o, u, y)
        // in the customer's name multiplied by 1.5. 
        
        ss = countLetters(customerClean, vowels) * 1.5;
    }
    else {
        // If the number of letters in the product's name is odd
        // then the SS is the number of consonants in the customer's name. 
        
        ss = countLetters(customerClean, consonants);
    }
    
    // if shares any common factors but '1'.
    const customerFactors = getFactors(customerClean.length);
    const productFactors = getFactors(productClean.length);

    if (doesShareCommons(customerFactors, productFactors)) {
        // If the number of letters in the product's name shares any common
        // factors (besides 1) with the number of letters in the customer's 
        // name then the SS is multiplied by 1.5. 
        
        ss = ss * 1.5;
    }
    
    return ss;
}

function Matrix(i, j) {
    this.matrix = [];
    
    for (let x = 0; x < i; x++) {
        this.matrix[x] = Array(j);
    }
}

Matrix.prototype.get = function(i, j) {
    return this.matrix[i][j];
}

Matrix.prototype.set = function(i, j, value) {
    this.matrix[i][j] = value;
}

Matrix.prototype.getHeight = function() {
    return this.matrix.length;
}

Matrix.prototype.getWidth = function() {
    return this.matrix[0].length;
}

Matrix.prototype.minor = function(i, j) {
    // Create a new matrix without deleted column & row.
    const newMatrix = new Matrix(this.getHeight() - 1, this.getWidth() - 1);
    
    for (let ii = 0; ii < this.getHeight(); ii++) {
        if (ii === i) continue;
        
        for (let jj = 0; jj < this.getWidth(); jj++) {
            if (jj === j) continue;
            
            // Adjusted index is one smaller after deleted index.
            let adjustedI = (ii > i) ? ii - 1 : ii;
            let adjustedJ = (jj > j) ? jj - 1 : jj;
            
            newMatrix.set(adjustedI, adjustedJ, this.get(ii, jj)); 
        }
    }
    
    return newMatrix;
}

Matrix.prototype.findMaxCombination = function() {
    const height = this.getHeight();
    
    if (height === 1) {
        // In case only one row left - return max column.
        return Math.max.apply(null, this.matrix[0]);
    }
    
    const values = [];
    
    for (let i = 0; i < height; i++) {
        const minorMatrix = this.minor(i, 0);
        
        // Current value + next max value.
        values.push(this.get(i, 0) + minorMatrix.findMaxCombination());
    }
    
    return Math.max.apply(null, values);
}

function populateMatrix(customers, products) {
    //@TODO: Note that there may be a different number of products and customers.
    
    const matrix = new Matrix(customers.length, products.length);

    // Populate matrix.
    for (let i = 0; i < customers.length; i++) {
        for (let j = 0; j < products.length; j++) {
            matrix.set(i, j, ss(customers[i], products[j]));
        }
    }

    return matrix;
}

var stdin = '';
process.stdin.on('data', function(chunk) {
    stdin += chunk;
}).on('end', function() {
    const lines = stdin.split('\n').filter(x => x.length > 0);
    
    for (let line of lines) {
        const split = line.split(';');
        
        const customers = split[0].split(',');
        const products = split[1].split(',');
        
        const matrix = populateMatrix(customers, products);

        // console.log('Matrix:', matrix.matrix);
        
        if (customers.length >= products.length) {
            process.stdout.write(matrix.findMaxCombination().toFixed(2))
        }
        else {
            process.stdout.write('0')
        }
    }
});
