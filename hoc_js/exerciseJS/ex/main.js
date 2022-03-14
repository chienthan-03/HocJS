let user = [{
        id: 1,
        Name: 'Thanh Luan'
    },
    {
        id: 2,
        Name: 'Kha Banh'
    },
    {
        id: 3,
        Name: 'Huan Hoa Hong'

    },
    {
        id: 4,
        Name: 'Hoang Tu Gio'
    }
]
let comments = [{
        id: 1,
        user_id: 2,
        content: 'bạn đề kháng kém là do bạn không chơi đồ đấy bạn ạ'
    },
    {
        id: 2,
        user_id: 3,
        content: 'Thôi ông im mẹ mồm đi'
    },
    {
        id: 3,
        user_id: 3,
        content: 'Không làm người được đâu, hiểu chưa'
    },
    {
        id: 4,
        user_id: 2,
        content: 'Đánh chết cha mày giờ'
    },
    {
        id: 5,
        user_id: 3,
        content: 'Anh em mình tình cảm anh nhớ'
    },
    {
        id: 5,
        user_id: 2,
        content: 'Có cc e ạ'
    },
    {
        id: 6,
        user_id: 1,
        content: 'Tất cả trật tự'
    },
    {
        id: 7,
        user_id: 2,
        content: 'Vâng a'
    },
    {
        id: 8,
        user_id: 3,
        content: 'Vâng a'
    },
    {
        id: 9,
        user_id: 1,
        content: 'alo alo'
    },
]

function getComment() {
    return new Promise(function(resolve, reject) {
        resolve(comments)
    })
}

function getUserById(userIds) {
    return new Promise(function(resolve, reject) {
        let result = user.filter(function(users) {
            return userIds.includes(users.id)
        })
        resolve(result)
    })
}

function renderComment(data) {
    let htmls = ''
    data.comments.map(function(comment) {
        let user = data.users.find(function(user) {
            return user.id === comment.user_id
        })
        return htmls += `<li>${user.Name}:${comment.content }</li>`
    })
    document.getElementById('comment-Block').innerHTML = htmls
}

getComment()
    .then(function(comments) {
        let userIds = comments.map(function(comment) {
            return comment.user_id
        });

        return getUserById(userIds)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments
                }
            })
            .then(renderComment)

    })

// .then(function(data) {
//     console.log(data)
//     let userIds = comments.map(function(comment) {
//         return comment.user_id
//     })
//     getUserId(userIds)
//         .then(function(data) {
//             console.log(data)
//         })
// })