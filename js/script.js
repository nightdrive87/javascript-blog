const titleClickHandler = function (event) {
    console.log('Link was clicked!');
    event.preventDefault();
    const clickedElement = this;

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    clickedElement.addEventListener('click', function () {
        clickedElement.classList.add('active');
        /*
        ! czasem dopiero po drugim kliknieciu pokazuje mi sie klasa active ???
        */
    });

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');
    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const getHrefLink = clickedElement.getAttribute('href');
    console.log('getHrefLink zwrócił: ', getHrefLink);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const findArticle = document.querySelector(getHrefLink);
    console.log('znalazlam artykul :3', findArticle);

    /* [DONE] add class 'active' to the correct article */
    findArticle.classList.add('active');
    /* 
    ! Czy taka metoda jest poprawna? 
    */
}
const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';



const generateTitleLinks = function() {

    /* remove contents of titleList */
   const titleList = document.querySelector(optTitleListSelector);

   titleList.innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);

let html = '';

    for (let article of articles) {
        /* get the article id */
        const articleId = article.getAttribute('id');
        
        /* get the title from the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;

        /* create HTML of the link */
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

        /* insert link into titleList */  
        titleList.insertAdjacentHTML('beforeend', linkHTML);    
         /* find the title element */
        
        html = html + linkHTML;

    }

    titleList.innerHTML = html;    
    
    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
        const clickedElement = this;
        link.addEventListener('click', titleClickHandler);
    }
}
generateTitleLinks();