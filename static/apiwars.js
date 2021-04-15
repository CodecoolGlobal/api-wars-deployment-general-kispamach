function dataRequest (url) {
    fetch(url)  // set the path; the method is GET by default, but can be modified with a second parameter
    .then((response) => response.json())  // parse JSON format into JS object
    .then((data) => {
        console.log(data.results);
        
})
}
let result = dataRequest('https://swapi.dev/api/planets/')
console.log(result)
