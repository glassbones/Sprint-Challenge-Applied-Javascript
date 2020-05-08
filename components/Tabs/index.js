// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
//https://lambda-times-backend.herokuapp.com/articles
//https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

//for each topic of the data array create a new child
function tabComp(data){ for ( item of data.data.topics) new Element('div','tab',item, document.querySelector('div.topics'))}
request('topics');

