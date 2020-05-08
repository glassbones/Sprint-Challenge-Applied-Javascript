let _ = undefined;

//pulls data for tabsComp and artComp
function request(string){
    axios.get(`https://lambda-times-backend.herokuapp.com/${string}`)
    .then(response => string === 'articles' ? artComp(response): tabComp(response))
    .catch(error => console.log(`${"uh oh! "+error}`))
    .finally(() => console.log('done'));
}

//built a logic gate that builds elements based on arguments fed into it
//I also tried to assign children and parents with methods and static variables
//it ended up being a lot more trouble then it was worth
class Element {
    static parent          // linked to Element (not new Elements)
    static grandParent     // linked to Element (not new Elements)
    constructor(tag, clas, text, parentElement) {
        this.HTML = document.createElement(tag);
        if (clas != undefined) this.HTML.className = clas;
        if (text != undefined) this.HTML.innerHTML = text;
        if (tag.toUpperCase() === 'IMG'){ this.HTML.src = text; this.HTML.innerHTML = "";}
        if (parentElement){
            parentElement.appendChild(this.HTML);
            Element.grandParent = Element.parent;
            Element.parent = this.HTML; }
    
        else {Element.parent.appendChild(this.HTML);}
    }
    //href(string) {this.HTML.setAttribute("href", string);}         //       didn't use this
    childOf(el) {el.appendChild(this.HTML)}
    setAsParent() {
        Element.grandParent = Element.parent;
        Element.parent = this.HTML
    }
    //returnHTML(){return this.HTML}     //             didnt use this
}








