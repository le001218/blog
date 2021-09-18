// 加载卡片和按钮
const news = [
    {
        "img": "images/downlist5.jpeg",
        "type":"创业",
        "title":"项目验收的准备与应对",
        "time": "a day ago - 3 min read",
        "imglogo": "images/DoinbHead.png",
    },
    {
        "img": "images/downlist9.jpeg",
        "type":"创业",
        "title":"聚焦",
        "time": "a day ago - 3 min read",
        "imglogo": "images/DoinbHead.png",
    },
    {
        "img": "images/downlist3.jpeg",
        "type":"创业",
        "title":"突发状况的处理",
        "time": "a day ago - 3 min read",
        "imglogo": "images/DoinbHead.png",
    }
]

function addCard() {
    if (typeof arr === 'undefined') {
        arr = news.slice();
        arr.length = 3
    }
    var oNews = document.getElementById('news');
    oNews.innerHTML = ''

    // 添加oNews下面的按钮
    var oPhoneCardBtn = document.createElement('div')
    oNews.appendChild(oPhoneCardBtn)
    oPhoneCardBtn.classList.add('phoneCardBtn')
    oPhoneCardBtn.classList.add('displayNone')
    // button
    var oPhoneCardBtnLeft = document.createElement('button')
    var oPhoneCardBtnRight = document.createElement('button')
    oPhoneCardBtn.appendChild(oPhoneCardBtnLeft)
    oPhoneCardBtn.appendChild(oPhoneCardBtnRight)
    oPhoneCardBtnLeft.setAttribute('id','phoneCardBtn-left')
    oPhoneCardBtnRight.setAttribute('id','phoneCardBtn-right')
    // img
    var oPhoneCardBtnLeftImg = document.createElement('img')
    var oPhoneCardBtnRightImg = document.createElement('img')
    oPhoneCardBtnLeft.appendChild(oPhoneCardBtnLeftImg)
    oPhoneCardBtnRight.appendChild(oPhoneCardBtnRightImg)
    oPhoneCardBtnLeftImg.src = 'images/toright2.png'
    oPhoneCardBtnRightImg.src = 'images/toright2.png'

    // 只让第一个div加 active 定义一个布尔类型判断
    var flag = true
    for (var index = 0; index < arr.length; index++) {
        var list = arr[index];

        // 第一个div的内容
        var oDiv = document.createElement('div');
        oNews.appendChild(oDiv)

        // 只执行一次
        if(flag){
            oDiv.classList.add('active')
            flag = false
        }

        oDiv.classList.add('cardOne')
        if(index == 0){
            oDiv.classList.add('classFadeInLeft')
        }else if(index == 1){
            oDiv.classList.add('classFadeInUp')
        }else{
            oDiv.classList.add('classFdaeInRight')
        }

            // 第二个div里面的内容
            var oA = document.createElement('a');
            var oDiv2 = document.createElement('div');
            var oA2 = document.createElement('a');

            oDiv.appendChild(oA)
            oA.setAttribute('href',list.href)
            oDiv.appendChild(oDiv2)
            oDiv2.classList.add('cardOne-small')
            oDiv.appendChild(oA2)
            oA2.classList.add('logohead')
                // OA
                var oImg = document.createElement('img')
                oA.appendChild(oImg)
                oImg.src = list.img;
                // oDiv2
                var oDiv2A = document.createElement('a')
                oDiv2.appendChild(oDiv2A)
                oDiv2A.innerHTML = list.type

                var oH2 = document.createElement('h2')
                oDiv2.appendChild(oH2)
                oH2.innerHTML = list.title

                var oSpan = document.createElement('span')
                oDiv2.appendChild(oSpan)
                oSpan.innerHTML = list.time
                
                // oA2
                var oImg2 = document.createElement('img')
                oA2.appendChild(oImg2)
                oImg2.src = list.imglogo
    }
}
addCard()


// 轮播
function carousel(){

    var result = window.matchMedia('(max-width: 375px)')
    // 判断使用类型
    if (result.matches) {
        // 移动端
        var oToLeft = document.getElementById('phoneCardBtn-left')
        var oToRight = document.getElementById('phoneCardBtn-right')
        var aCardOne = document.getElementsByClassName('cardOne')

        index = 0

        oToLeft.onclick = function(){
            aCardOne[index].classList.remove('active')
            index--
            if(index == -1){
                index = 2
            }
            aCardOne[index].classList.add('active')
        }

        oToRight.onclick = function(){
            aCardOne[index].classList.remove('active')
            index++
            if(index == 3){
                index = 0
            }
            aCardOne[index].classList.add('active')
        }
    }

}
carousel()


// 策略
const verify = {
    isEmpty: function (str) {
        var str_trim = str.trim()
        return str_trim.length
    },
    isEmail: function (str) {
        var str_trim = str.trim()
        var patten = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        return patten.test(str_trim)
    },
    isChinese: function (str) {
        var str_trim = str.trim()
        var patten = /^[\u4e00-\u9fa5].*$/;
        return patten.test(str_trim)
    },
    isNumber: function (str) {
        var str_trim = str.trim()
        var patten = /^[0-9]*$/;
        return patten.test(str_trim)
    }
}
// 输入验证
function verifyInput(elId, isVerify,innerText) {
    var oSubmit = document.getElementById('submit')
    var oImg1 = document.createElement('img')
    var el = document.getElementById(elId)
    var isBool= null;
    el.onblur = function () {
        isBool = verify[isVerify](this.value)
        if (!isBool) {
            // 错误
            oImg1.src = innerText
            this.parentNode.appendChild(oImg1)
            oSubmit.setAttribute('disabled','disabled')
            return false
        } else {
            // 正确
            oImg1.src = 'images/true.png'
            oSubmit.removeAttribute('disabled')
        }
    }
}

verifyInput('username', 'isEmpty','images/false.png')
verifyInput('email', 'isEmail','images/false.png')
verifyInput('website', 'isEmpty','images/false.png')




// // 侧边栏
// function aisde() {
//     var topScroll = document.documentElement.scrollTop
//     var oAside = document.getElementById('aside')
//     // 文章的高度
//     var articleHeight = document.getElementById('article').offsetHeight
//     // 文章到顶部的距离
//     var articleTop = document.getElementById('article').getBoundingClientRect().top

//     oAside.style.position = 'absolute'
//     oAside.style.top = articleTop + 'px'
//     oAside.style.right = '20%'

//     document.onscroll = function () {

//         if (topScroll <= articleTop) {
//             oAside.style.position = 'fixed'
//             oAside.style.top = '100px'
//             oAside.style.right = '20%'
//         } else {
//             oAside.style.position = 'absolute'
//             oAside.style.top = articleHeight + 'px'
//             oAside.style.right = '20%'
//         }
//     }

// }
// aisde()

