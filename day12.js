// Calculate the total annual income of the person from the following text. 
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const pattern = /[0-9]+/g;
const result = text.match(pattern);
var total = 0;
for(let income of result){
    total += parseInt(income);
}
console.log(total);


// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin,
// 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12


// Write a pattern which identify if a string is a valid JavaScript variable
// password 8 characters include Uppercase and lowercase letters, least a number and not include special characters
function isValidPassword(password){
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}/g
    return pattern.test(password)
}
console.log(isValidPassword(''))



//Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
paragraph = `I love teaching. If you do not love teaching what else can you love. 
            I love Python if you do not love something which can give you all the 
            capabilities to develop an application what else can you love.`


function tenMostFrequentWords(paragraph, number){
    let list1 = []
    let list2 = []
    const pattern = /[A-Za-z]+/g

    var results = paragraph.match(pattern)
    // set list object
    const setresults = new Set(results)
    for(result of setresults){
        var count = 0;
        for(let i = 0; i < results.length; i++){
            if(result===results[i]){
                count++;
            }
        }
        list1.push({word : result,count:count})
    }    
    //  list1.sort(function(a, b){return b - a});
    // sort list 
    for(let i =0; i< list1.length;i++){
        for(let j =i; j< list1.length;j++){
            if(list1[i]['count']<list1[j]['count']){
                let tam = list1[i]
                list1[i] = list1[j]
                list1[j] = tam
            } 
        }
    }
    // get results
    for(let i =0; i<number;i++){
        list2.push(list1[i])
    }
    return list2
}
console.log(tenMostFrequentWords(paragraph,10));

// `Writ a function which cleans text. Clean the following text. 
// After cleaning, count three most frequent words in the string.`
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. 
    There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;
    I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(sentence){
    const pattern = /[%@&#$!@]/g
    const clean = sentence.replace(pattern,'')
    return tenMostFrequentWords(clean,3)
}

console.log(cleanText(sentence));