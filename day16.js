const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// Change skills array to JSON using JSON.stringify()
console.log(JSON.stringify(skills))

// Stringify the age variable
console.log(JSON.stringify(age));

// Stringify the isMarried variable
console.log(JSON.stringify(isMarried));

// Stringify the student object
console.log(JSON.stringify(student));


//Stringify the students object with only firstName, lastName and skills properties
console.log(JSON.stringify(student,['firstName','lastName', 'skills'], 2));


// Parse the txt JSON to object.
console.log(typeof(JSON.parse(txt)));


// Find the the user who has many skills from the variable stored in txt.
function getUserHasManySkill(txt,number){
    jsonUser = JSON.parse(txt)
    listSkills = []
    let result = []
    for( user in jsonUser){ 
        listSkills.push({"name":user, "numberSkill": jsonUser[`${user}`]['skills'].length})
    }
    // sort
    for(let i = 0; i < listSkills.length; i++){
        for(let j = i; j < listSkills.length; j++){
            if(listSkills[i]["numberSkill"] < listSkills[j]["numberSkill"]){
                let tam = listSkills[i]["numberSkill"];
                listSkills[i]["numberSkill"] = listSkills[j]["numberSkill"];
                listSkills[j]["numberSkill"] = tam
            }
        }
    }
    
    for(i = 0; i< number ;i++){
        result.push(listSkills[i])
    }
    return result;
}

getUserHasManySkill(txt, 3)

