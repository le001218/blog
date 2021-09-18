// 换肤
function skin() {
    var oBtn = document.getElementById('skinbtn')

    var skin = document.getElementById('skin');
    var pic = document.getElementById('head-night')
    var pic2 = document.getElementById('head-search')
    var pic3 = document.getElementById('showListImg')
    var pic4 = document.getElementById('preImg')
    var pic5 = document.getElementById('nextImg')
    var pic6 = document.getElementById('falseImg')

    var oBtnPhone = document.getElementById('skinbtnTwo')
    var picPhone = document.getElementById('head-night-phone')
    var picFalsePhone = document.getElementById('falesTwoBtnPhone')

    var result = window.matchMedia('(max-width: 375px)')
    // 判断使用类型
    if (result.matches) {
        // 移动端
        if(localStorage.getItem('href')){
            skin.setAttribute('href',localStorage.getItem('href'))
        }
        var n = 0;
        var sty = 'css/morning.css'
        var opicPhone = 'images/night.png'
        var opic2 = 'images/search.png'
        var opic3 = 'images/more.png'
        var opic4 = 'images/toright.png'
        var opic5 = 'images/toright.png'
        var opic6 = 'images/false1.png'
        var opicFalsePhone = 'images/false1.png'
        oBtnPhone.onclick = function(){
            if(n%2 === 0){
                sty = 'css/night.css'
                opicPhone = 'images/morning.png'
                opic2 = 'images/search2.png'
                opic3 = 'images/moreNight.png'
                opic4 = 'images/toright2.png'
                opic5 = 'images/toright2.png'
                opic6 = 'images/false2.png'
                opicFalsePhone = 'images/false2.png'
            }else{
                sty = 'css/morning.css'
                opicPhone = 'images/night.png'
                opic2 = 'images/search.png'
                opic3 = 'images/more.png'
                opic4 = 'images/toright.png'
                opic5 = 'images/toright.png'
                opic6 = 'images/false1.png'
                opicFalsePhone = 'images/false1.png'
            }
            localStorage.setItem('href',sty)
            skin.setAttribute('href',sty)
            picPhone.setAttribute('src',opicPhone)
            pic2.setAttribute('src',opic2)
            pic3.setAttribute('src',opic3)
            pic4.setAttribute('src',opic4)
            pic5.setAttribute('src',opic5)
            pic6.setAttribute('src',opic6)
            picFalsePhone.setAttribute('src',opicFalsePhone)
            n++
        }
    } else {
        // PC端

                
        if(localStorage.getItem('href')){
            skin.setAttribute('href',localStorage.getItem('href'))
        }
        var n = 0;
        var sty = 'css/morning.css'
        var opic = 'images/night.png'
        var opic2 = 'images/search.png'
        var opic3 = 'images/more.png'
        var opic4 = 'images/toright.png'
        var opic5 = 'images/toright.png'
        var opic6 = 'images/false1.png'
        oBtn.onclick = function(){
            if(n%2 === 0){
                sty = 'css/night.css'
                opic = 'images/morning.png'
                opic2 = 'images/search2.png'
                opic3 = 'images/moreNight.png'
                opic4 = 'images/toright2.png'
                opic5 = 'images/toright2.png'
                opic6 = 'images/false2.png'
            }else{
                sty = 'css/morning.css'
                opic = 'images/night.png'
                opic2 = 'images/search.png'
                opic3 = 'images/more.png'
                opic4 = 'images/toright.png'
                opic5 = 'images/toright.png'
                opic6 = 'images/false1.png'
            }
            localStorage.setItem('href',sty)
            skin.setAttribute('href',sty)
            pic.setAttribute('src',opic)
            pic2.setAttribute('src',opic2)
            pic3.setAttribute('src',opic3)
            pic4.setAttribute('src',opic4)
            pic5.setAttribute('src',opic5)
            pic6.setAttribute('src',opic6)
            n++
        }
    }

    
}
skin()