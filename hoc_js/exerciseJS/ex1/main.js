document.getElementById('show_search_advance').onclick = function(e) {
    let a = document.getElementById('show_search_advance')
    let title = a.innerHTML
    let category = document.getElementById('search_advance')
    if (title == 'Tìm kiếm nâng cao') {
        category.style.display = 'table-row'
        a.innerHTML = 'Bỏ tìm kiếm nâng cao'
    } else {
        category.style.display = 'none'
        a.innerHTML = 'Tìm kiếm nâng cao'
    }
}