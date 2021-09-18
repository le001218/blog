// 点击下拉
function pullDown() {
    var showList = document.getElementsByClassName('show-list')[0];
    var downBigbox = document.getElementById('down-bigbox')
    var showListImg = showList.getElementsByClassName('showListImg')[0]
    var falesTwoBtn = document.getElementById('falesTwoBtn')

    var result = window.matchMedia('(max-width: 375px)')
    // 判断使用类型
    if (result.matches) {
        // 移动端
        showList.onclick = function () {
            showListImg.style.border = '2px solid black'
            downBigbox.style.width = "375px"
            downBigbox.style.opacity = "1"
            document.body.parentNode.style.overflow = "hidden"; //隐藏且禁用
        }
        falesTwoBtn.onclick = function () {
            showListImg.style.border = 'none'
            downBigbox.style.width = "0px"
            downBigbox.style.opacity = "0"
            document.body.parentNode.style.overflow = "scroll"; //显示且可用
        }
    } else {
        // PC端
        showList.onclick = function () {
            if (downBigbox.style.height == '0px') {
                showListImg.style.border = '2px solid black'
                downBigbox.style.height = "415px"
                downBigbox.style.opacity = "1"
            } else {
                showListImg.style.border = 'none'
                downBigbox.style.height = "0px"
                downBigbox.style.opacity = "0"
            }
        }
    }

}
pullDown()



// 加载特效
function visible() {
    var clientHeight = document.documentElement.clientHeight
    var classFadeInUp = document.getElementsByClassName('classFadeInUp')
    var classFadeInLeft = document.getElementsByClassName('classFadeInLeft')
    var classFdaeInRight = document.getElementsByClassName('classFdaeInRight')

    var result = window.matchMedia('(max-width: 375px)')
    // 判断使用类型
    if (result.matches) {
        // 移动端
    } else {
        // PC端
        document.onscroll = function () {
            for (var index = 0; index < classFadeInUp.length; index++) {
                var el = classFadeInUp[index];
                if (el.getBoundingClientRect().top < clientHeight) {
                    el.classList.add('animated')
                    el.classList.add('fadeInUp')
                }
            }
            for (var index = 0; index < classFadeInLeft.length; index++) {
                var el = classFadeInLeft[index];
                if (el.getBoundingClientRect().top < clientHeight) {
                    el.classList.add('animated')
                    el.classList.add('fadeInLeft')
                }
            }
            for (var index = 0; index < classFdaeInRight.length; index++) {
                var el = classFdaeInRight[index];
                if (el.getBoundingClientRect().top < clientHeight) {
                    el.classList.add('animated')
                    el.classList.add('fadeInRight')
                }
            }
        }
    }


}
visible()

// 搜索
function serach() {
    var falesbtn = document.getElementById('falesbtn')
    var searchBtn = document.getElementById('searchbtn')
    var searchBox = document.getElementById('searchBox')
    searchBtn.onclick = function () {
        document.body.parentNode.style.overflow = "hidden"; //隐藏且禁用
        searchBox.style.display = "flex";
        searchBtn.style.border = '2px solid black'
        // falesbtn.style.border = '2px solid black'
    }
}
serach()

// 搜索叉叉
function fales() {
    var searchBtn = document.getElementById('searchbtn')
    var falesbtn = document.getElementById('falesbtn')
    var searchBox = document.getElementById('searchBox')
    falesbtn.onclick = function () {
        document.body.parentNode.style.overflow = "scroll"; //显示且可用
        searchBox.style.display = "none"
        searchBtn.style.border = 'none'
        // falesbtn.style.border = '2px solid skyblue'
    }
}
fales()




function oScroll() {
    window.onscroll = function () {
        
        // 导航栏
        function navBar() {
            var topScroll = document.documentElement.scrollTop
            var navBar = document.getElementById('navbar')
            if (topScroll <= 400) {
                navBar.style.position = 'static'
                navBar.style.top = '-67px'
            } else {
                navBar.style.position = 'fixed'
                navBar.style.top = '0'
            }
        }
        navBar()
    }
}
oScroll()

function database(fn,url){
    // 
    var xml = new XMLHttpRequest()
    // 需要确定获取数据的 方式.get 地址 异步true
    xml.open('get',url,true)
    // 发送我的请求
    xml.send()
    // 
    xml.onreadystatechange=function(){
        if(this.status === 200){
            if(this.readyState === 4){
                fn(this.responseText)
            }
        }
    }
}


// 计时
function timer() {
    window.setTimeout("timer()", 1000);
    var seconds = 1000
    var minutes = seconds * 60
    var hours = minutes * 60
    var days = hours * 24
    var years = days * 365

    // 现在的时间
    var today = new Date()
    var todayYear = today.getFullYear()
    var todayMonth = today.getMonth()
    var todayDate = today.getDate()
    var todayHour = today.getHours()
    var todayMinute = today.getMinutes()
    var todaySecond = today.getSeconds()
    
    var t1 = Date.UTC(2021, 7, 31, 00, 00, 00) // 返回 1970 年 1 月 1 日 到指定日期的毫秒数
    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond)
    var diff = t2 - t1 // 从t1距离t2现在实时的时间（毫秒）

    var diffYears = Math.floor(diff / years)
    
    var diffDays = Math.floor((diff / days) - diffYears * 365)

    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours)

    var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes)

    var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds)
    // document.getElementById("timer").innerHTML=" 已运行"+diffYears+" 年 "+diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒"
    document.getElementById("timer").innerHTML = "感谢陪伴：" + (diffYears * 365 + diffDays) + " 天 " + diffHours + " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒";
}
timer()