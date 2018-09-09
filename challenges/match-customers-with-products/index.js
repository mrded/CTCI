const Matrix = require('./matrix');
const Word = require('./word');

process.stdin.resume();
process.stdin.setEncoding('utf8');

function populateMatrix(customers, products) {
    const matrix = new Matrix(customers.length, products.length);

    // Populate matrix.
    for (let i = 0; i < customers.length; i++) {
        for (let j = 0; j < products.length; j++) {
            matrix.set(i, j, ss(customers[i], products[j]));
        }
    }

    return matrix;
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
    
    if (product.letters % 2 === 0) {
        // If the number of letters in the product's name is even
        // then the SS is the number of vowels (a, e, i, o, u, y)
        // in the customer's name multiplied by 1.5. 
        
        ss = customer.vowels * 1.5;
    }
    else {
        // If the number of letters in the product's name is odd
        // then the SS is the number of consonants in the customer's name. 
        
        ss = customer.consonants;
    }
    
    // if shares any common factors but '1'.
    const customerFactors = getFactors(customer.letters);
    const productFactors = getFactors(product.letters);

    if (doesShareCommons(customerFactors, productFactors)) {
        // If the number of letters in the product's name shares any common
        // factors (besides 1) with the number of letters in the customer's 
        // name then the SS is multiplied by 1.5. 
        
        ss = ss * 1.5;
    }
    
    return ss;
}

var stdin = '';
process.stdin.on('data', function(chunk) {
    stdin += chunk;
}).on('end', function() {
    const lines = stdin.split('\n').filter(x => x.length > 0);
    
    for (let line of lines) {
        const split = line.split(';');
        
        const customers = split[0].split(',').map(x => new Word(x));
        const products = split[1].split(',').map(x => new Word(x));
        
        const matrix = populateMatrix(customers, products);
        
        process.stdout.write(matrix.findMaxCombination().toFixed(2))
    }
});
