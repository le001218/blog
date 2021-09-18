database(function(text){
    var news = JSON.parse(text)
    createNewsDom(news,0)
    var pos = location.search.search('=')
    var id = location.search.substring(pos+1)
    var article = document.getElementById('article')
    var h3Tags = "Tags"
    var oBanner = document.getElementById('banner')
    news.forEach(function(list){
        if(list.id == id){
            
            oBanner.innerHTML = '<img src="' + list.img + '" class="banner-img">'

            var oH1 = document.createElement('h1')
            article.appendChild(oH1)
            oH1.innerHTML = list.title

            var oDiv = document.createElement('div')
            article.appendChild(oDiv)
            oDiv.classList.add('articleTime')
            oDiv.innerHTML = `
            <a href="">` + list.type + `</a>
            <span>•</span>
            <span>Aug 9, 2021</span>
            <span>•</span>
            <i>24</i>
            `

            var aP1 = document.createElement('p')
            article.appendChild(aP1)
            aP1.innerHTML = list.p1

            var aP2 = document.createElement('p')
            article.appendChild(aP2)
            aP2.innerHTML = list.p2

            var aP3 = document.createElement('p')
            article.appendChild(aP3)
            aP3.innerHTML = list.p3
            
            if(list.p4){
                var aP4 = document.createElement('p')
                article.appendChild(aP4)
                aP4.innerHTML = list.p4
            }

            if(list.p5){
                var aP5 = document.createElement('p')
                article.appendChild(aP5)
                aP5.innerHTML = list.p5
            }

            if(list.p6){
                var aP6 = document.createElement('p')
                article.appendChild(aP6)
                aP6.innerHTML = list.p6
            }

            if(list.p7){
                var aP7 = document.createElement('p')
                article.appendChild(aP7)
                aP7.innerHTML = list.p7
            }

            var oH3 = document.createElement('h3')
            article.appendChild(oH3)
            oH3.innerHTML = h3Tags

            var oA = document.createElement('a')
            article.appendChild(oA)
            oA.classList.add('articleLast')
            oA.setAttribute('href','')
            oA.innerHTML = list.type

        }
    })
},'../database/news.json')