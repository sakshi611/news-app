// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import getData from '../components/fetch.js'
import slider from '../components/slider.js'

let results = document.querySelector('#results')

let sliderId = document.getElementById('sidebar')
sliderId.innerHTML = slider()

let search_input = document.querySelector('#search_input')

let query
let ids = 'in'
let url =`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${ids}`

getData(url).then((res)=>{
    let data = res.articles
    appendNews(data)
})


function appendNews(data){
    results.innerHTML=null

    data.forEach(ele => {
        let news = document.createElement('div')
        news.className ='news'
        news.style.display ='flex'
        news.style.border='1px solid blue'
        news.style.gap ='15px'
        news.style.margin ='15px'


        let image = document.createElement('img')
        image.src = ele.urlToImage
        image.style.height='40%'
        image.style.width='22%'

        let details = document.createElement('div')
        let title = document.createElement('h3')
        title.innerText = ele.title
        let para = document.createElement('p')
        para.innerText =ele.description
        details.append(title,para)
        news.append(image,details)
        results.append(news)
    });

}

let sliderchildren = sliderId.children

function serachnews(id){
    ids=id
    let url =`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${ids}`
    // console.log(url)
    getData(url).then((res)=>{
        let data = res.articles
        appendNews(data)
    })
}

function cSearch(){
    // console.log(this.id)
    results.innerHTML=null
    serachnews(this.id)
}

for(let el of sliderchildren){
    el.addEventListener('click',cSearch)
}

let search = (e)=>{
    if(e.key==='Enter'){
        results.innerHTML=null
        query = search_input.value
        serachnewz(query)
    }
}

search_input.addEventListener('keydown',search)

let news = JSON.parse(localStorage.getItem('news')) || []

function serachnewz(query){
 url =`https://masai-mock-api.herokuapp.com/news?q=${query}`

 console.log(url)
 getData(url).then((res)=>{
     let data = res.articles
     news.push(data)
     localStorage.setItem('news',JSON.stringify(news))
     search_input.value=null
     window.location.href='search.html'
 })

}

let resultsChildern = document.querySelector('#results').children


console.log(resultsChildern)
function newzs(){
    console.log('hoi')

    // results.innerHTML=null
    // serachnews(this.id)
}
// resultsChildern.forEach(element => {
//     element.addEventListener('click',newzs)
// });

// for(let el of resultsChildern){
//     el.addEventListener('click',newzs)
// }
