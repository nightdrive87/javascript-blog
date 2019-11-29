const titleClickHandler = function(event){
    console.log('Link was clicked!');
    // console.log(event);
    event.preventDefault();
    const clickedElement = this;
    // console.log('this',clickedElement);
  
    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
  
    /* [DONE] add class 'active' to the clicked link */
    clickedElement.addEventListener('click',function(){
        clickedElement.classList.add('active'); 
    });

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts article.active');
    
    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
  
    /* get 'href' attribute from the clicked link */

    const getHrefLink = clickedElement.getAttribute('href');
    console.log('getHrefLink zwrócił: ', getHrefLink);
  
    /* find the correct article using the selector (value of 'href' attribute) */
  
    const findArticle = document.querySelector(getHrefLink);
    console.log('znalazlam artykul :3', findArticle);

    /* add class 'active' to the correct article */ 
    findArticle.classList.add('active');
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    const clickedElement = this;
    link.addEventListener('click', titleClickHandler);
    // console.log('clickedElement (with plus): ' + clickedElement);
  }  
