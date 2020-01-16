const titleClickHandler = function(event) {
  //   console.log('Link was clicked!');
  event.preventDefault();
  const clickedElement = this;

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const foundHrefLink = clickedElement.getAttribute('href');
  //   console.log('foundHrefLink zwrócił: ', foundHrefLink);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const foundArticle = document.querySelector(foundHrefLink);
  //   console.log('znalazlam artykul :3', foundArticle);

  /* [DONE] add class 'active' to the correct article */
  foundArticle.classList.add('active');
};

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

const generateTitleLinks = function(customSelector = '') {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);

  titleList.innerHTML = '';

  /* for each article */
  const articles = document.querySelectorAll(
    optArticleSelector + customSelector
  );
  let html = '';

  for (let article of articles) {
    /* get the article id */
    const articleId = article.getAttribute('id');

    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */
    const linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      '</span></a></li>';

    /* insert link into titleList */
    titleList.insertAdjacentHTML('beforeend', linkHTML);
    /* find the title element */

    html = html + linkHTML;
    // console.log(html);
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  //   console.log(links);

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
};

function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const tagWrapper = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    tagWrapper.innerHTML = '';
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const tagArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for (let tag of tagArray) {
      /* generate HTML of the link */
      const tagHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li> ';
      /* add generated code to html variable */
      html = html + tagHTML;
      /* END LOOP: for each tag */
    }
    tagWrapper.innerHTML = html;
    /* insert HTML of all the links into the tags wrapper */
    /* END LOOP: for every article: */
  }
}
function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = event.target;
 
  // console.log({ clickedElement, event });
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log(tag);

  /* find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log('tagss' + activeTags);

  /* START LOOP: for each active tag link */
  for (let activeTag of activeTags) {
    /* remove class active */
    activeTag.classList.remove('active');
  }
  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]'); 
  console.log('a[href="' + href + '"]', tagLinks);

  /* START LOOP: for each found tag link */
  for (let tagLink of tagLinks) {
  /* add class active */
    tagLink.classList.add('active');
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* find all links to tags */

  const tagLinks = document.querySelectorAll('a[href^="#tag-"]');

  /* START LOOP: for each link */
  for (let tagLink of tagLinks) {
    /* add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
  }
}

generateTitleLinks();
generateTags();
addClickListenersToTags();
