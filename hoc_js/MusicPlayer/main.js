// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const PlAYER_STORAGE_KEY = "F8_PLAYER";

// const player = $(".player");
// const cd = $(".cd");
// const heading = $("header h2");
// const cdThumb = $(".cd-thumb");
// const audio = $("#audio");
// const playBtn = $(".btn-toggle-play");
// const progress = $("#progress");
// const prevBtn = $(".btn-prev");
// const nextBtn = $(".btn-next");
// const randomBtn = $(".btn-random");
// const repeatBtn = $(".btn-repeat");
// const playlist = $(".playlist");

// const app = {
//         currentIndex: 0,
//         isPlaying: false,
//         isRandom: false,
//         isRepeat: false,
//         config: {},
// (1/2) Uncomment the line below to use localStorage
// config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
// songs: [{
//         name: "Từng Yêu",
//         singer: "Phan Duy Anh",
//         path: "https://tainhac123.com/download/tung-yeu-phan-duy-anh.tnvcYCYt7lmv.html",
//         image: "https://avatar-nct.nixcdn.com/song/2019/07/03/7/5/b/e/1562146897414.jpg"
//     },
//     {
//         name: "Cao Ốc 20",
//         singer: "B Ray,Đạt G",
//         path: "https://tainhac123.com/download/cao-oc-20-b-ray-ft-dat-g.Wbl0lGylnp5A.html",
//         image: "https://avatar-nct.nixcdn.com/song/2019/06/22/b/1/2/7/1561218264960.jpg"
//     },
//     {
//         name: "Naachne Ka Shaunq",
//         singer: "Raftaar x Brobha V",
//         path: "https://mp3.filmysongs.in/download.php?id=Naachne Ka Shaunq Raftaar Ft Brodha V Mp3 Hindi Song Filmysongs.co.mp3",
//         image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
//     },
//     {
//         name: "Cảm Ơn Vì Tất Cả",
//         singer: "Anh Quân Idol",
//         path: "https://tainhac123.com/download/cam-on-vi-tat-ca-anh-quan-idol.VZWf0d6KlReP.html",
//         image: "https://avatar-nct.nixcdn.com/singer/avatar/2017/08/07/d/9/4/9/1502094633221.jpg"
//     },
//     {
//         name: "Ngày Khác Lạ",
//         singer: "Đen,Giang Phạm,Triple D",
//         path: "https://tainhac123.com/download/ngay-khac-la-den-ft-giang-pham-ft-triple-d.Lqlm3r5ZAZft.html",
//         image: "https://avatar-nct.nixcdn.com/song/2018/02/24/2/5/c/e/1519436244959.jpg"
//     },
//     {
//         name: "Damn",
//         singer: "Raftaar x kr$na",
//         path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
//         image: "https://d1c4rk9le5opln.cloudfront.net/c97676f2b5d28a097e9f2d6c65e8e4d5.jpg"
//     },
//     {
//         name: "Attention",
//         singer: "Charlie Puth",
//         path: "https://tainhac123.com/download/attention-charlie-puth.UUGyfRO4e4Ns.html",
//         image: "data:image/png;base64,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"
//     }
// ]

//     setConfig: function(key, value) {
//         this.config[key] = value;
//         // (2/2) Uncomment the line below to use localStorage
//         // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
//     },
//     render: function() {
//         const htmls = this.songs.map((song, index) => {
//             return `
//                         <div class="song ${
//                           index === this.currentIndex ? "active" : ""
//                         }" data-index="${index}">
//                             <div class="thumb"
//                                 style="background-image: url('${song.image}')">
//                             </div>
//                             <div class="body">
//                                 <h3 class="title">${song.name}</h3>
//                                 <p class="author">${song.singer}</p>
//                             </div>
//                             <div class="option">
//                                 <i class="fas fa-ellipsis-h"></i>
//                             </div>
//                         </div>
//                     `;
//         });
//         playlist.innerHTML = htmls.join("");
//     },
//     defineProperties: function() {
//         Object.defineProperty(this, "currentSong", {
//             get: function() {
//                 return this.songs[this.currentIndex];
//             }
//         });
//     },
//     handleEvents: function() {
//         const _this = this;
//         const cdWidth = cd.offsetWidth;

//         // Xử lý CD quay / dừng
//         // Handle CD spins / stops
//         const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
//             duration: 10000, // 10 seconds
//             iterations: Infinity
//         });
//         cdThumbAnimate.pause();

//         // Xử lý phóng to / thu nhỏ CD
//         // Handles CD enlargement / reduction
//         document.onscroll = function() {
//             const scrollTop = window.scrollY || document.documentElement.scrollTop;
//             const newCdWidth = cdWidth - scrollTop;

//             cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
//             cd.style.opacity = newCdWidth / cdWidth;
//         };

//         // Xử lý khi click play
//         // Handle when click play
//         playBtn.onclick = function() {
//             if (_this.isPlaying) {
//                 audio.pause();
//             } else {
//                 audio.play();
//             }
//         };

//         // Khi song được play
//         // When the song is played
//         audio.onplay = function() {
//             _this.isPlaying = true;
//             player.classList.add("playing");
//             cdThumbAnimate.play();
//         };

//         // Khi song bị pause
//         // When the song is pause
//         audio.onpause = function() {
//             _this.isPlaying = false;
//             player.classList.remove("playing");
//             cdThumbAnimate.pause();
//         };

//         // Khi tiến độ bài hát thay đổi
//         // When the song progress changes
//         audio.ontimeupdate = function() {
//             if (audio.duration) {
//                 const progressPercent = Math.floor(
//                     (audio.currentTime / audio.duration) * 100
//                 );
//                 progress.value = progressPercent;
//             }
//         };

//         // Xử lý khi tua song
//         // Handling when seek
//         progress.onchange = function(e) {
//             const seekTime = (audio.duration / 100) * e.target.value;
//             audio.currentTime = seekTime;
//         };

//         // Khi next song
//         // When next song
//         nextBtn.onclick = function() {
//             if (_this.isRandom) {
//                 _this.playRandomSong();
//             } else {
//                 _this.nextSong();
//             }
//             audio.play();
//             _this.render();
//             _this.scrollToActiveSong();
//         };

//         // Khi prev song
//         // When prev song
//         prevBtn.onclick = function() {
//             if (_this.isRandom) {
//                 _this.playRandomSong();
//             } else {
//                 _this.prevSong();
//             }
//             audio.play();
//             _this.render();
//             _this.scrollToActiveSong();
//         };

//         // Xử lý bật / tắt random song
//         // Handling on / off random song
//         randomBtn.onclick = function(e) {
//             _this.isRandom = !_this.isRandom;
//             _this.setConfig("isRandom", _this.isRandom);
//             randomBtn.classList.toggle("active", _this.isRandom);
//         };

//         // Xử lý lặp lại một song
//         // Single-parallel repeat processing
//         repeatBtn.onclick = function(e) {
//             _this.isRepeat = !_this.isRepeat;
//             _this.setConfig("isRepeat", _this.isRepeat);
//             repeatBtn.classList.toggle("active", _this.isRepeat);
//         };

//         // Xử lý next song khi audio ended
//         // Handle next song when audio ended
//         audio.onended = function() {
//             if (_this.isRepeat) {
//                 audio.play();
//             } else {
//                 nextBtn.click();
//             }
//         };

//         // Lắng nghe hành vi click vào playlist
//         // Listen to playlist clicks
//         playlist.onclick = function(e) {
//             const songNode = e.target.closest(".song:not(.active)");

//             if (songNode || e.target.closest(".option")) {
//                 // Xử lý khi click vào song
//                 // Handle when clicking on the song
//                 if (songNode) {
//                     _this.currentIndex = Number(songNode.dataset.index);
//                     _this.loadCurrentSong();
//                     _this.render();
//                     audio.play();
//                 }

//                 // Xử lý khi click vào song option
//                 // Handle when clicking on the song option
//                 if (e.target.closest(".option")) {}
//             }
//         };
//     },
//     scrollToActiveSong: function() {
//         setTimeout(() => {
//             $(".song.active").scrollIntoView({
//                 behavior: "smooth",
//                 block: "nearest"
//             });
//         }, 300);
//     },
//     loadCurrentSong: function() {
//         heading.textContent = this.currentSong.name;
//         cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
//         audio.src = this.currentSong.path;
//     },
//     loadConfig: function() {
//         this.isRandom = this.config.isRandom;
//         this.isRepeat = this.config.isRepeat;
//     },
//     nextSong: function() {
//         this.currentIndex++;
//         if (this.currentIndex >= this.songs.length) {
//             this.currentIndex = 0;
//         }
//         this.loadCurrentSong();
//     },
//     prevSong: function() {
//         this.currentIndex--;
//         if (this.currentIndex < 0) {
//             this.currentIndex = this.songs.length - 1;
//         }
//         this.loadCurrentSong();
//     },
//     playRandomSong: function() {
//         let newIndex;
//         do {
//             newIndex = Math.floor(Math.random() * this.songs.length);
//         } while (newIndex === this.currentIndex);

//         this.currentIndex = newIndex;
//         this.loadCurrentSong();
//     },
//     start: function() {
//         // Gán cấu hình từ config vào ứng dụng
//         // Assign configuration from config to application
//         this.loadConfig();

//         // Định nghĩa các thuộc tính cho object
//         // Defines properties for the object
//         this.defineProperties();

//         // Lắng nghe / xử lý các sự kiện (DOM events)
//         // Listening / handling events (DOM events)
//         this.handleEvents();

//         // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
//         // Load the first song information into the UI when running the app
//         this.loadCurrentSong();

//         // Render playlist
//         this.render();

//         // Hiển thị trạng thái ban đầu của button repeat & random
//         // Display the initial state of the repeat & random button
//         randomBtn.classList.toggle("active", this.isRandom);
//         repeatBtn.classList.toggle("active", this.isRepeat);
//     }
// };

// app.start();
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const playlist = $('.playlist')
const cd = $('.cd')
const cdwidth = cd.offsetWidth
const app = {
    songs: [{
            name: "Từng Yêu",
            singer: "Phan Duy Anh",
            path: "https://tainhac123.com/download/tung-yeu-phan-duy-anh.tnvcYCYt7lmv.html",
            image: "https://avatar-nct.nixcdn.com/song/2019/07/03/7/5/b/e/1562146897414.jpg"
        },
        {
            name: "Cao Ốc 20",
            singer: "B Ray,Đạt G",
            path: "https://tainhac123.com/download/cao-oc-20-b-ray-ft-dat-g.Wbl0lGylnp5A.html",
            image: "https://avatar-nct.nixcdn.com/song/2019/06/22/b/1/2/7/1561218264960.jpg"
        },
        {
            name: "Naachne Ka Shaunq",
            singer: "Raftaar x Brobha V",
            path: "https://mp3.filmysongs.in/download.php?id=Naachne Ka Shaunq Raftaar Ft Brodha V Mp3 Hindi Song Filmysongs.co.mp3",
            image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
        },
        {
            name: "Cảm Ơn Vì Tất Cả",
            singer: "Anh Quân Idol",
            path: "https://tainhac123.com/download/cam-on-vi-tat-ca-anh-quan-idol.VZWf0d6KlReP.html",
            image: "https://avatar-nct.nixcdn.com/singer/avatar/2017/08/07/d/9/4/9/1502094633221.jpg"
        },
        {
            name: "Ngày Khác Lạ",
            singer: "Đen,Giang Phạm,Triple D",
            path: "https://tainhac123.com/download/ngay-khac-la-den-ft-giang-pham-ft-triple-d.Lqlm3r5ZAZft.html",
            image: "https://avatar-nct.nixcdn.com/song/2018/02/24/2/5/c/e/1519436244959.jpg"
        },
        {
            name: "Damn",
            singer: "Raftaar x kr$na",
            path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
            image: "https://d1c4rk9le5opln.cloudfront.net/c97676f2b5d28a097e9f2d6c65e8e4d5.jpg"
        },
        {
            name: "Attention",
            singer: "Charlie Puth",
            path: "https://tainhac123.com/download/attention-charlie-puth.UUGyfRO4e4Ns.html",
            image: "data:image/png;base64,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"
        }
    ],
    render: function() {
        const htmls = this.songs.map(song => {
            return ` 
        <div class="song">
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
        `
        })
        playlist.innerHTML = htmls.join('')
    },
    handleEvents: function() {
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdwidth - scrollTop

            console.log(newCdWidth)
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
        }
    },
    start: function() {
        this.handleEvents()

        this.render()
    }

}
app.start()