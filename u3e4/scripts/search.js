// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

let results = document.querySelector('#results')


function appendNews(data){
    console.log(data)
    results.innerHTML=null

    data[0].forEach(ele => {
        let news = document.createElement('div')
        news.className ='news'
        news.style.display ='flex'
        news.style.border='1px solid blue'
        news.style.gap ='15px'
        news.style.margin ='15px'


        let image = document.createElement('img')
        image.src = ele.urlToImage
        image.style.height='20%'
        image.style.width='20%'

        let details = document.createElement('div')
        let title = document.createElement('h3')
        title.innerText = ele.title
        let para = document.createElement('p')
        para.innerText =ele.description
        details.append(title,para)
        news.append(image,details)
        results.append(news)
        localStorage.clear();
    });

}

let news = JSON.parse(localStorage.getItem('news'))
appendNews(news)