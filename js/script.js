const titleClickHandler = function(event){
    console.log('Link was clicked!');
    console.log(event);
    event.preventDefault();
    const clickedElement = this;
    console.log('this',clickedElement);
  
    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
  
    /* [IN PROGRESS] add class 'active' to the clicked link */
    clickedElement.addEventListener('click',function(){
        clickedElement.classList.add('active'); 
    });
    
  
    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts article.active');
    
    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
  
    /* get 'href' attribute from the clicked link */
  
    /* find the correct article using the selector (value of 'href' attribute) */
  
    /* add class 'active' to the correct article */
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    const clickedElement = this;
    link.addEventListener('click', titleClickHandler);
    console.log('clickedElement (with plus): ' + clickedElement);
  }  
