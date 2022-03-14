let Api = 'http://localhost:3000/idol'
let listCoursesBlock = document.getElementById('list-course')

function start() {
    getIdol(renderIdol)

    handleCreatForm()

}
start()


function getIdol(callback) {
    fetch(Api)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}

function createIdol(data, callback) {
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(Api, options)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}

function handleDeleteIdol(id) {
    let options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(Api + '/' + id, options)
        .then(function(response) {
            return response.json()
        })
        .then(
            function() {
                let idolItem = document.querySelector('.list-item-' + id)
                if (idolItem) {
                    idolItem.remove()
                }
            }
        )
}

function updateIdol(id, formData, callback) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }
    fetch(Api + "/" + id, options)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}

function renderIdol(Idol) {
    let htmls = Idol.map(function(idols) {
        return `
        <li class="list-item-${idols.id}">
                <h4>${idols.name}</h4>
                <p>Kĩ năng:${idols.skill}</p>
                <p class="a">Tuổi:${idols.age}</p>
                <button onclick="handleDeleteIdol(${idols.id})">delete</button>
                <button onclick="handleUpdeteIdol(${idols.id})">update</button>
        </li>`
    })
    listCoursesBlock.innerHTML = htmls.join('')
}

function handleCreatForm() {
    document.getElementById('create').onclick = function() {
        let name = document.querySelector('input[name="Name"]').value
        let skill = document.querySelector('input[name="Skill"]').value
        let age = document.querySelector('input[name="Age"]').value
        let formData = {
            name: name,
            skill: skill,
            age: age
        }
        createIdol(formData, function() {
            getIdol(renderIdol)
        })
    }
}

function handleUpdeteIdol(id) {
    let name = document.querySelector(`.list-item-${id} h4`).innerText
    let skill = document.querySelector(`.list-item-${id} p`).innerText
    let age = document.querySelector(`.list-item-${id} .a`).innerText
    document.querySelector('input[name="Name"]').value = name
    document.querySelector('input[name="Skill"]').value = skill
    document.querySelector('input[name="Age"]').value = age
    let Btn = document.getElementById('create')
    if (Btn.innerHTML == 'Add Idol') {
        Btn.innerHTML = 'Update Idol'
        Btn.onclick = function() {
            let name = document.querySelector('input[name="Name"]').value
            let skill = document.querySelector('input[name="Skill"]').value
            let age = document.querySelector('input[name="Age"]').value
            let formData = {
                name: name,
                skill: skill,
                age: age
            }
            updateIdol(id, formData, function() {
                getIdol(renderIdol)
            })
        }
    }
}