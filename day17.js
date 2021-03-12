// Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem("myInfor","['hoàng','nam','21','tuyhoa','vietnam']")

//Create a student object. The student object will have first name, last name, age, skills, country, 
//enrolled keys and values for the keys. Store the student object in your browser localStorage.

student = {
    "firstname":"hoàng",
    "lastname":"nam",
    "age":21,
    "skills":["html", "css", "js"],
    "country":"vietnam",
    "enrolled":{
        "toan":"toancd1",
        "ly":"lydaicuong",
    }
}
localStorage.setItem("student",JSON.stringify(student, undefined,6))

//Create an object called personAccount. It has firstname, lastname, incomes, expenses properties 
//and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
//Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class personAccount{
    constructor(firstname, lastname, incomes, expenses){
        this.firstname=firstname, 
        this.lastname=lastname, 
        this.incomes=incomes, // {"name":"chinh", "value":$999}
        this.expenses=expenses
    }
    totalIncome(){
        let total = 0;
        for(let income of this.incomes){
            total+=income["value"];
        }
        return total
    }
    totalExpense(){
        let total = 0;
        for(let expens of this.expenses){
            total+=expens["value"];
        }
        return total
    }
    accountInfo(){
        return `${this.lastname} ${this.firstname}. total incomes are ${this.totalIncome()} and total expenses are ${this.totalExpense()}`
    }
    addIncome(name, value){
        this.incomes.push({"name":name, "value":value})
    }
    addExpense(name, value){
        this.expenses.push({"name":name, "value":value})
    }
    accountBalance (){
        return this.totalIncome() - this.totalExpense()

    }
}

var incomes = [{"name":"chính","value":999}, {"name":"phụ", "value":300}]
var expenses = [{"name":"trọ","value":100}, {"name":"ăn", "value":200}]

var nam = new personAccount("hoàng", "nam", incomes, expenses)
console.log(nam.totalIncome());
console.log(nam.totalExpense());
console.log(nam.accountBalance());