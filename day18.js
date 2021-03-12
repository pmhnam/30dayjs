const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'


//Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        // let name = data["name"]
        // let capital = data["capital"]
        // let languages = data["languages"]
        // let population  = data["population"]
        // let area = data["area"]
        console.log(JSON.stringify(data, ['name', 'capital', 'languages', 'population', 'area'], 4));

    })
    .catch(e => console.log(e))


//Print out all the cat names in to catNames variable.
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        console.log(JSON.stringify(data, ['name'], 4));

    })
    .catch(e => console.log(e))


//Read the cats api and find the average weight of cat in metric unit.
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        let listWM = []
        let avg = 0
        for (let i = 0; i< data.length; i++) {
            let w = data[i]['weight']['metric']
            avg = (parseInt(w.split(' - ')[1]) + parseInt(w.split(' - ')[0]))/2
            listWM.push({'name':data[i]['name'],'avg':avg})
        }
        console.log(listWM);
    })
    .catch(e => console.log(e))


//Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        let listArea = []
        data.forEach( (c) => {
            listArea.push([c['name'], c['area']])
        });
        // sort array
        listArea.sort(function(a, b) {
            return b[1] - a[1];
        });
        // show 10 country had largest area 
        // listArea.every(( value, index) => {
        //     if(index > 10){
        //         return false
        //     }else{
        //         console.log(value);
        //         return true
        //     }
        // })
        let result= listArea.filter((value,index) => index<10 )
        console.log(result);
    })
    .catch(e => console.log(e))


//Read the countries api and count total number of languages in the world used as officials.
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        var listLanguages = []
        data.forEach(element => {
            listLanguages.push([element['name'], element['languages'].length])
        });
        console.log(listLanguages);
    })
    .catch(e => console.log(e))