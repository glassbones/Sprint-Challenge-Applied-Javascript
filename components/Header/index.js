// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
function headerComp(entryPoint){
    let arr = []; 
    //build elements and push them to array
    arr.push(new Element('div','header',_,entryPoint));
    arr.push(new Element('span','date','SMARCH 28, 2019'))
    arr.push(new Element('h1',_,'Lambda Times'))
    arr.push(new Element('span','temp','98°'))
}
    
let headerContainer = document.querySelector('div.header-container');
headerComp(headerContainer);

