const Matrix = require('./matrix');

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

        console.log('Matrix:', matrix.matrix);
        
        process.stdout.write(matrix.findMaxCombination().toFixed(2))
    }
});
