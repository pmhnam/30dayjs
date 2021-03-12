const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway']

// create an empty set
// Create a set containing 0 to 10 using loop
// Remove an element from a set
// Clear a set
// Create a set of 5 string elements from array
// Create a map of countries and number of characters of a country

const newSet = new Set()

for (i=0; i<10;i++){
    newSet.add(i);
}

newSet.delete(3);

newSet.clear();


const strSet = new Set()


for(i =0;i<5;i++){
    strSet.add(String(i))
}

console.log(strSet);

const newMap = new Map()
const citys = new Set(countries)

for (city of citys){
    const len = city.length;
    newMap.set(city,len)
}

console.log(newMap);



// Find a union b
const A = new Set(a);
const B = new Set(b);
const c = [...a,...b]

const C = new Set(c);
console.log(C);


// Find a intersection b
const d = b.filter((sob) => A.has(sob))
const D = new Set(d)
console.log(d);


// Find a with b
var e = b.filter((sob) => !A.has(sob))
f = a.filter((sob) => !B.has(sob))
console.log(e,f);

const F = new Set(e);
for(let x of f){
    F.add(x);
}



// How many languages are there in the countries object file.

