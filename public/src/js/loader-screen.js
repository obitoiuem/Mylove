$(function() {
    $("<style>", {
        html: "@import url('https://fonts.googleapis.com/css?family=Potta One|Paytone One&display=swap');.loading_pjax .loading_td,.loading_pjax .loading_td .avatar-loader{width:var(--size-avt);height:var(--size-avt)}html{--main-color:52 73 94;--background-color-num:246 247 255;--background-white-num:255 255 255;--main:rgb(var(--main-color));--colorG:rgb(var(--main-color) / 80%);--colorF:rgb(var(--main-color) / 70%);--colorE:rgb(var(--main-color) / 60%);--colorD:rgb(var(--main-color) / 50%);--colorC:rgb(var(--main-color) / 35%);--colorB:rgb(var(--main-color) / 20%);--colorA:rgb(var(--main-color) / 10%);--color-red:#f56c6c;--color-grey:#ededed;--color-white:#fff;--under-background:#f7f8f9;--diary-background:var(--background);--background-color:rgb(var(--background-white-num));--background-fill:rgb(var(--background-color-num));--background:rgb(var(--background-color-num) / 80%);--blur:blur(1rem);--blur2:saturate(5) var(--blur);--radius:.5rem;--text-shadow:1px 2px 1px var(--colorB);--title-shadow:1px 2px 1px var(--theme-30);--box-shadow:0 7px 15px 0 #a48fff30;--margin:1.25rem;--border:unset;--main-read-color:80 50 0;--main-read:rgb(var(--main-read-color));--background-colorA-read:#ffdab7 var(--background-image);--background-colorB-read:#ffe6cc var(--background-image);--box-shadow-read:0 7px 15px 0 rgb(80 50 0 / 10%) --blur: unset!important;--blur2:unset!important;--theme:#3b70fc;--theme-10:#3b70fc1a;--theme-30:#3b70fc4d;--theme-60:#00d9ff;--theme-80:#3b70fccc;--size-avt:8rem}.pjax_loading{display:flex;text-align:center;justify-content:center;position:fixed;align-items:center;background:var(--under-background);flex-direction:column;height:100%;width:100%;top:0;margin:0;z-index:109999991}.pjax_title{color:var(--colorF);font-size:2rem;margin:1.25rem 0 .75rem}.loading_pjax{display:none;flex-direction:column;align-items:center}.loading_pjax .loading_td{--r1:154%;--r2:68%;border-radius:50%;background:radial-gradient(var(--r1) var(--r2) at top,#0000 80%,var(--theme-60) 80%) center left,radial-gradient(var(--r1) var(--r2) at bottom,var(--theme-60) 80%,#0000 80%) center center,radial-gradient(var(--r1) var(--r2) at top,#0000 80%,var(--theme-60) 80%) center right,#fff0;background-size:50% 220%;background-position:-100% 0,0 0,100% 0;background-repeat:no-repeat;animation:2s linear infinite loading_circle}@keyframes loading_circle{33%{background-position:0 33%,100% 33%,200% 33%}66%{background-position:-100% 66%,0 66%,100% 66%}100%{background-position:0 100%,100% 100%,200% 100%}}.loading_logo{color:var(--main);font-size:4rem;height:6rem}.loading_logo img{height:6rem}.avatar-loader{width:10rem;height:10rem;vertical-align:middle;border-radius:50%;box-shadow:var(--box-shadow);padding:.25rem}img.lazyloading{-webkit-transition:.5s;transition:.5s;-webkit-filter:blur(2rem);filter:blur(2rem);opacity:0}img.lazyloaded{filter:blur(0);-webkit-filter:blur(0);opacity:1}"
    }).appendTo("head"), $("<div>", {
        class: "pjax_loading",
        html: [$("<div>", {
            class: "loading_logo",
            style: "display:flex"
        }), "", $("<div>", {
            class: "loading_pjax",
            style: "display:flex",
            html: [$("<div>", {
                class: "loading_td",
                html: '<img class="avatar-loader ls-is-cached lazyload" src="//i.imgur.com/VBhb2Gg.gif" data-src="//i.imgur.com/FeU1IWC.png">'
            }), $("<div>", {
                class: "pjax_title",
                html: '\uD835\uDDEA\uD835\uDE00x\uD835\uDDDF\uD835\uDDFC\uD835\uDDEE\uD835\uDDF1\uD835\uDDF2\uD835\uDDFF'
            }), $("<div>", {
                id: "loading_msg",
                style: "color: var(--colorC);",
                html: '<span style="font-size:17px;">Đang tải t\xe0i nguy\xean...</span>'
            }), ]
        }), ]
    }).appendTo("body"), setTimeout(() => {
        $(".pjax_loading").fadeOut(1e3, function() {
            $(this).css("z-index", "19999990"), $(".loading_pjax").css("display", "flex"), $(".loading_logo").hide()
        })
    }, 1e3), setInterval(() => {
        $("#loading_msg").fadeOut(500).fadeIn(500).fadeOut(500, () => {
            $("#loading_msg").html('<span style="font-size: 17px;">Đợi m\xecnh 1 x\xedu :)</span>').fadeIn(1e3).fadeOut(500).fadeIn(500).fadeOut(500, () => {
                $("#loading_msg").html('<span style="font-size: 17px;">Sắp tải dữ liệu xong</span>').fadeIn()
            })
        })
    }, 1e3)
});
