const cats =["Milo", "Otis", "Garfield"];

// append cat to end of array
function destructivelyAppendCat(name) {
    cats.push(name);
}

constant.log(destructivelyAppendCat("Tom"));


// adds elements to the beginning of the array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

constant.log(destructivelyPrependCat("Snowy"));


// removes last element in array
function destructivelyRemoveLastCat() {
    cats.pop();
}

console.log(destructivelyRemoveLastCat());


// removes first element from array
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

console.log(destructivelyRemoveFirstCat());

//appending
function appendCat(name) {
    return[...cats, name];

}

console.log(appendCat("Mr.Chief"));

console.log(cats);


// prepending
function prependCat(name) {
    return [name, ...cats];
    
}

console.log(prependCat("whiskers"));


// removing last cat

function removeLastCat() {
    return cats.slice(0, cats.length -1);
}

console.log(removeLastCat());


// removing first cat 

function removeFirstCat() {
    return cats.slice(1);
}

console.log(removeFirstCat());