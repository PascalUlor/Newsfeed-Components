// Because classes are not hoisted you will need to 
// start your code at the bottom of the page.  
// Look for the comment "START HERE"

const showLabel = 'expand';
class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, 
    // update the text on your expandButton to say "expand"
    
    // Set a click handler on the expandButton reference, 
    // calling the expandArticle method.
    this.addToggleButtonLabel();
    // this.toggleArticle();
    this.toggleArticle();
    this.button = document.createElement('button');
    this.addButtonLabel();
    this.domElement.prepend(this.button);
  }
  addToggleButtonLabel() {
    this.expandButton.textContent = 'expand';
  }
  deleteArticle(){
    this.domElement.classList.add('delete');
  }
  addButtonLabel() {
    this.button.textContent = 'Read';
    this.button.style.background = 'cyan';
    this.button.addEventListener('click', ()=>{
      this.deleteArticle();
      TweenMax.to('.delete', .5, {
        right: -1000,
        display: 'none',
        ease: Power0.easeOut
      });
      console.log('delete');
    })
      
  }

  toggleArticle(){
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }
  
  expandArticle() {
    this.domElement.classList.toggle('article-open')
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the 
articles variable.

- With your selection in place, now chain .forEach() on to the 
  articles variable to iterate over the articles NodeList and create a 
  new instance of Article by passing in each article as a parameter 
  to the Article class.

*/

let articles = [...document.querySelectorAll('.article')];
// console.log(articles);
articles.forEach((article) => {
  new Article(article);
})

class PostArticle extends Article {
  constructor(Attr){
    super(Attr);
    this.post = Attr.post;
  }

  addPost() {

  }
}