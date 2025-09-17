const cats =["Milo", "Otis", "Garfield"];


// append cat to end of array
function destructivelyAppendCat(name) {
    cats.push(name);
}

// destructivelyAppendCat('Ralph');
// console.log(cats);


// adds elements to the beginning of the array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// destructivelyPrependCat("Bob");
// console.log(cats);


// removes last element in array
function destructivelyRemoveLastCat() {
    cats.pop();
}

// destructivelyRemoveLastCat();
// console.log(cats);


// removes first element from array
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

// destructivelyRemoveFirstCat();
// console.log(cats);


//appending
function appendCat(name) {
    return[...cats, name];

}

// console.log(appendCat("Broom"));
// console.log(cats);


// // prepending
function prependCat(name) {
    return [name, ...cats];
    
}

// prependCat("Arnold");
// console.log(cats);


// // removing last cat

function removeLastCat() {
    return cats.slice(0, cats.length -1);
}

// removeLastCat();
// console.log(cats);


// // removing first cat 

function removeFirstCat() {
    return cats.slice(1);
}

// console.log(removeFirstCat());
