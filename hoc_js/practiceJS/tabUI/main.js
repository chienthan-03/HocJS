const $ = document.querySelector.bind(document); //dom cho nhanh
const $$ = document.querySelectorAll.bind(document); //dom cho nhanh
// const tab = document.querySelectorAll('.tab-item') dom từng cái như này lâu vc ok

const tabs = $$(".tab-item")
const panes = $$(".tab-pane")



const tabActive = $(".tab-item.active")
const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + "px"
line.style.width = tabActive.offsetWidth + "px"

tabs.forEach((tab, index) => tab.onclick = function() {
    const pane = panes[index]
    $(".tab-item.active").classList.remove('active')
    $(".tab-pane.active").classList.remove("active")

    line.style.left = this.offsetLeft + "px"
    line.style.width = this.offsetWidth + "px"

    this.classList.add('active')
    pane.classList.add("active")
})


// // SonDN fixed - Active size wrong size on first load.
// // Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
requestIdleCallback(function() {
    // line.style.left = tabActive.offsetLeft + "px";
    // line.style.width = tabActive.offsetWidth + "px";
});

// tabs.forEach((tab, index) => {
//     const pane = panes[index];

//     tab.onclick = function() {
//         $(".tab-item.active").classList.remove("active");
//         $(".tab-pane.active").classList.remove("active");

//         line.style.left = this.offsetLeft + "px";
//         line.style.width = this.offsetWidth + "px";

//         this.classList.add("active");
//         pane.classList.add("active");
//     };
// });