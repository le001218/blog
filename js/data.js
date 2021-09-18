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

function createNewsDom(news,classId){
    if(document.getElementById('head') == null){
        return false
    }else{
        var oHead = document.getElementById('head')
    }

    var oNews = document.getElementById('news')
    oNews.innerHTML = ''

    function createCard(list,index){
       
        

        //  第一个div
        var oDiv = document.createElement('div');
        oNews.appendChild(oDiv)
        oDiv.classList.add('cardOne')
        
        if(index == 0 || index == 3 || index == 6){
            oDiv.classList.add('classFadeInLeft')
        }else if(index == 1 || index == 4 || index == 7 || index == 9){
            oDiv.classList.add('classFadeInUp')
        }else{
            oDiv.classList.add('classFdaeInRight')
        }

            // 第二个div里面的内容
            var oA = document.createElement('a');
            var oDiv2 = document.createElement('div');
            var oA2 = document.createElement('a');

            oDiv.appendChild(oA)
            oA.setAttribute('href',list.href + '?id=' +list.id)
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
    
        if(classId === 0){
            news.forEach(function(list,index){
                createCard(list,index) 
            })
            return false
        }
        news.forEach(function(list,index){
            if(list.classId === classId){
                createCard(list,index)
            }
        })
}

database(function(text){
    var news = JSON.parse(text)
    createNewsDom(news,0)
    // function HomeAll(){
    //     if(document.getElementById('head') == null){
    //         return false
    //     }
    //     var oHome = document.getElementById('home')
    //     oHome.onclick=function(){
    //         createNewsDom()
    //     }
    // }
    // HomeAll()
},'../database/news.json')

database(function(text){

        var classType = JSON.parse(text)
        function createClassDom(){
            if(document.getElementById('head') == null){
                return false
            }else{
                var oHead = document.getElementById('head')
            }

            var oClassType = document.getElementById('classType')
            classType.forEach(function(item){
                var oLi = document.createElement('li')
                oLi.innerHTML = '<a href="#">' + item.name + '</a>'
                oLi.onclick=function(){
                    database(function(text){
                        var news = JSON.parse(text)
                        createNewsDom.apply(window,[news,item.classId])
                    },'../database/news.json')
                }
                oClassType.appendChild(oLi)
            })
        }
        createClassDom()

},'../database/classType.json')


// 搜索
database(function (text) {

    var news = JSON.parse(text)
    
    function search(e) {
        // 阻止默认事件
        e.preventDefault();
        var oKeyword = document.getElementById('keyword')
        if (oKeyword.value.length) {
            var itemArr = news.filter(function (item) {
                return item.title.match(oKeyword.value)
            })

            function searchContent(arr) {
                var oSearchContent = document.getElementById('searchContent');
                oSearchContent.innerHTML = ''
                for (var index = 0; index < arr.length; index++) {
                    var list = arr[index];

                    var oA = document.createElement('a')
                    oSearchContent.appendChild(oA)
                    oA.innerHTML = `<a href="` + list.href + `?id=` + list.id + `">` + list.title + `</a>`

                }
            }
            searchContent(itemArr)

        } else {
            alert('内容不能为空')
        }
    }

    var oSend = document.getElementById('send');
    oSend.onsubmit = search

}, '../database/news.json')

