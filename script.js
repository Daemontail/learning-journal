import blogEls from "./data.js"
let currBlogs = 0
document.addEventListener('click', function (e) {
    if (e.target.id === 'view-more') {
        return rendermoreblogs()
    }
})


function rendermoreblogs() {
    if(currBlogs < blogEls.length){
    const blogcount = currBlogs + 3
    const main = document.getElementById('main')
    while (blogcount > currBlogs && currBlogs < blogEls.length) {
        const {name,date,description,image} = blogEls[currBlogs]
        main.innerHTML += `
        <article class="article">
            <a href="#">
            <img class="article-img" src="${image}">
            <p class="date">${date}</p>
            <h2 class="title">${name}</h2>
            <p class="blog-text">${description}</p>
            </a>
        </article>
            `
        currBlogs++
    }
    if(currBlogs === blogEls.length){
            document.getElementById('view-more').textContent=''
        }
}
}
rendermoreblogs()