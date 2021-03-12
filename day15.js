// Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal{
    constructor(name, age, color, legs){
        this.name = name,
        this.age = age,
        this.color = color,
        this.legs = legs
    }
    get getName(){
        return this.name
    }
    set setName(name){
        this.name = name
    }
    getInfor(){
        return `đây là con ${this.name} !`
    }
}

// Create a Dog and Cat child class from the Animal Class.

// var cat = new Animal('Cat',1,'while',4)
// var dog = new Animal('Dog',3,'while',4)
// console.log(cat);

// Override the method you create in Animal class
class Dog extends Animal{
    constructor(name, age, color, legs){
        super(name, age, color, legs)
    }
    getInfor(){
        return `đây là con ${this.name} ! (chó)`
    }
}



class Cat extends Animal{
    constructor(name, age, color, legs){
        super(name, age, color, legs)
    }
    getInfor(){
        return `đây là con ${this.name} ! (mèo)`
    }
}


// Let's try to develop a program which calculate measure of central tendency of a 
// sample(mean, median, mode) and measure of variability(range, variance, standard deviation). 
// In addition to those measures find the min, max, count, percentile, and frequency distribution 
// of the sample. You can create a class called Statistics and create all the functions which do
//  statistical calculations as method for the Statistics class. Check the output below.

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics{
    constructor(listAge){
        this.ages = listAge
    }
    count(){
        return this.ages.length;
    }
    sum(){
        var sum=0;
        for(let age of this.ages){
            sum+=age;
        }
        return sum;
    }
    min(){
        var min=this.ages[0];
        for(let i=1;i<this.ages.length;i++){
                if(this.ages[i]<min){
                    min = this.ages[i];
                }
        }
        return min;
    }
    max(){
        var max=this.ages[0];
        for(let i=1;i<this.ages.length;i++){
                if(this.ages[i]>max){
                    max = this.ages[i];
                }
        }
        return max;
    }
    range(){
        return this.max() - this.min()
    }
    mean(){
        return (this.max() + this.min())/2
    }
    median(){
        // xếp lại mảng và lấy pt giữa
        var list = this.ages;
        list=list.sort()
        if(list.length % 2 == 0){
            console.log("phan tu o giua ",list.length/2);
            return (list[list.length/2] + list[list.length/2 +1])/2
        }
        return list[(list.length-1)/2]
    }
    mode(){
        var list = this.ages;
        var list_count = []
        list.sort()
        var setList = new Set(list)
        for (const l of setList) {
            const filteredList = list.filter((lng) => lng === l)
            list_count.push({number:l,count:filteredList.length })
        }
        var max = list_count[0]["count"];
        var num = list_count[0]["number"]
        for(let i = 1; i < list_count.length;i++){
            if(list_count[i]["count"]>max){
                max = list_count[i]["count"];
                num = list_count[i]["number"]
            }
        }
        return `(${num} , ${max})`;
    }
    var(){

    }
    std(){

    }
    freqDist(){

    }
}


var statistics = new Statistics(ages)
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}



// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses 
// properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance methods. Incomes is a set of incomes and its description and expenses is 
// also a set of expenses and its description.

class PersonAccount{
    constructor( firstname, lastname, incomes, expenses){
        this.firstname = firstname,
        this.lastname = lastname,
        this.incomes = incomes,
        this.expenses = expenses
    }
    totalIncome(){
        let sum = 0
        for(let income of this.incomes){
            sum+=income["Income"];
        }
        return sum;
    }
    totalExpense(){
        let sum = 0
        for(let expense of this.expenses){
            sum+=expense["Expense"];
        }
        return sum;
    }
    accountInfo(){
        return `${this.firstname} ${this.lastname}`
    }
    //{"Income Name":incomeName,"Income":income }
    set addIncome(income){
        this.incomes.push(income)
    }
    //{"Expense Name":expenseName,"Expense":expense}
    set addExpense(expense){
        this.incomes.push(expense)
    }
    accountBalance(){
        return this.totalIncome() - this.totalExpense()
    }
}

var nam = new PersonAccount("hoàng", "nam",[{"Income Name":"chính","Income":1000},{"Income Name":"phụ","Income":100}], [{"Expense Name":"ăn","Expense":300}, {"Expense Name":"trọ","Expense":200}])
console.log("THU",nam.totalIncome())
console.log("CHI",nam.totalExpense())
console.log("INF",nam.accountInfo())
console.log("INF",nam.accountBalance())