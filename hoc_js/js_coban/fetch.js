let api = 'https://jsonplaceholder.typicode.com/posts'
fetch(api)
    .then(function(reponse) {
        return reponse.json()
            //JSON.parse()
    })
    .then(function(data) {
        let html = ''
        data.map(function(post) {
            return html += `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        })
        document.getElementById('post-Box').innerHTML = html
    })