// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function artComp(data){
    //I made a diagram below of the data I am after. I just want to get the "z" values in one array and then loop through them. 
    //get rid of object keys we dont need them
    let arr = Object.values(data.data.articles)
    // squash everything into one array (stole this line of code from google, it blows my mind. I need to use reduce and concat together more)
    arr = arr.reduce((a, b) => a.concat(b), []);
    //itterate and build elements with with the array data
    let cardsContainer = document.querySelector('div.cards-container')
    //for every item of the array of data create an element
    for (i of arr){
        new Element("div","card",_,cardsContainer) //parent to entry point
        new Element("div","headline",i.headline) 
        new Element("div","author").setAsParent() // set as parent for next child 
        new Element("div","img-container").setAsParent(); //set as parent for next child
        new Element("img",_,i.authorPhoto);
        new Element("span","_",`By ${i.authorName}`).childOf(Element.grandParent); //set as parent to "grandParent" the second to last parent. (line: 33)
    }            
}
request(`articles`);


//articles (x)

    //javascript  (y)

        //[header, authorPhoto, authorName] (z)  4 total

    //bootstrap   (y)

        //[header, authorPhoto, authorName] (z)  3 total

    //technology  (y)
    
        //[header, authorPhoto, authorName] (z)  3 total

    //jquery      (y)

        //[header, authorPhoto, authorName] (z)  3 total

    //node        (y)

        //[header, authorPhoto, authorName] (z)  2 total




