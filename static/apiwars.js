let buttons = document.querySelectorAll(".btn btn-secondary")

function getResidents(data) {
    let residentsList = document.querySelector("#residents-list")
    residentsList.innerHTML = ""
    console.log(data)
    data.forEach(resident => {
        let row = document.createElement("TR")
        let newTds = ["name", "height", "mass", "hair_color", "skin_color", "eye_color", "birth_day", "gender"]
        newTds.forEach(col => {
            let td = document.createElement("TD")
            td.textContent = resident[col]
            row.appendChild(td)
        })
        // residents.innerHTML = 
        // `<td>${ resident.name }</td>
        // <td>${ resident.height }</td>
        // <td>${ resident.mass }</td>
        // <td>${ resident.hair_color}</td>
        // <td>${ resident.skin_color}</td>
        // <td>${ resident.eye_color}</td>
        // <td>${ resident.birth_year}</td>
        // <td>${ resident.gender}</td>`
        residentsList.appendChild(row)
    })
}

function findApi(url) {
    fetch(url)
        .then((response) => response.json())
        .then((response) => {
            init.prevPage = response['previous']
            if (!init.prevPage) document.querySelector('#prev').setAttribute('disabled', 'true')
            else document.querySelector('#prev').removeAttribute('disabled')
            init.nextPage = response['next']
            if (!init.nextPage) document.querySelector('#next').setAttribute('disabled', 'true')
            else document.querySelector('#next').removeAttribute('disabled')
            init.fillTable(response)                
        })
}

function modalModifier(planet, data) {
    let title = document.querySelector('.modal-title')
    let body = document.querySelector('.modal-body')
    title.innerHTML = "Residents of " + planet
    let table = document.querySelector('#residents-list')
    table.innerHTML = ""  
    for (i of data) {
        if (i['name'] == planet) {       
            for (j of i['residents']) {
                fetch(j)
                    .then((response) => response.json())
                    .then((response) => {
                        
                        fillModalTable(response)                
                        })
            }
        }
    }
}

function fillModalTable(response) {
    console.log(response)
    let table = document.querySelector('#residents-list')
    let headers = ["name", "height", "mass", "hair_color", "skin_color", "eye_color", "birth_year", "gender"]
    let newTr = document.createElement("tr")
    table.appendChild(newTr)
    for (header of headers) {
        let newTd = document.createElement("td")
        let text = response[header]
        newTd.textContent = text
        newTr.appendChild(newTd)
    }
}


function clickHandler(url) {
    fetch(url)  // set the path; the method is GET by default, but can be modified with a second parameter
    .then((response) => response.json())  // parse JSON format into JS object
    .then((data) => {
        console.log(data.results);
        let residents = data.results.residents
        let planets = data.results.planet
        let promises = []
        residents.forEach(residentUrl => {
            promises.push(new Promise((data, reject) => {
                fetch(residentUrl)  
                    .then((response) => response.json())  
                    .then((data))
            }))
        })
        Promise.all(promises).then(response => getResidents(response))
    })
}

    // $.get(this.dataset.url, data => {
    //     let residents = data.residents
    //     let planets = data.planet
    //     // let name = data.name
    //     let promises = []
    //     // let modalTitle = document.querySelector(".modal-title")
    //     // modalTitle.textContent = `${name}`
    //     residents.forEach(residentUrl => {
    //         promises.push(new Promise((resolve, reject) => {
    //             $.get(residentUrl, resolve)
    //         }))
    //     })
    //     Promise.all(promises).then(response => getResidents(response))
    // })
// }

buttons.forEach(btn => btn.addEventListener("click", clickHandler("https://swapi.dev/api/planets/")))

let residents = document.querySelector(".resident-properties")
var myInput = document.getElementById('myInput')
var myModal = document.getElementById('exampleModal')
myModal.addEventListener('shown.bs.modal', function () {
    residents.focus()
  })


function dataRequest (url) {
    fetch(url)  // set the path; the method is GET by default, but can be modified with a second parameter
    .then((response) => response.json())  // parse JSON format into JS object
    .then((data) => {
        console.log(data.results);
        
})
}
dataRequest('https://swapi.dev/api/planets/')

