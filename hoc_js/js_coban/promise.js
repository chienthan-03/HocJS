function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}
sleep(1000)
    .then(function() {
        alert(1)
        return sleep(1000)
    })
    .then(function() {
        alert(2)
        return new Promise(function(resolve, reject) {
            setTimeout(reject, 1000)
        })
    })
    .catch(function() {
        alert(3)
        return sleep(1000)
    })
    .then(function() {
        alert(4)
        return sleep(1000)
    })

let promise = new Promise(function(resolve, reject) {
    resolve([{
            'id': 3,
            'Name': 'Java'
        }])
        // reject('error!!')
})
promise
    .then(function(course) {
        console.log(course)
    })
    // .catch(function(error) {
    //     console.log(error)
    // })
    .finally(function() {
        console.log('Done!!')
    })