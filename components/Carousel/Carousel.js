/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function carouselComp(entryPoint){

  let imgs = ["./assets/carousel/mountains.jpeg","./assets/carousel/computer.jpeg","./assets/carousel/trees.jpeg","./assets/carousel/turntable.jpeg"]
  let arr = []

  arr.push(new Element('div','carousel',_ , entryPoint))
  for (img of imgs) {arr.push(new Element('img',_,img))}
  arr.push(new Element("div","left-button"))
  arr.push(new Element("div","right-button"))

  // if odd number move all right
  if (arr.length % 2){
    arr.forEach((el, index) => {
      if (index > 1 && index < arr.length-2)
      el.HTML.style.transform = `translateX(-150%)`;
    });
  } 
  //right button
  arr[arr.length -1].HTML.onclick =()=> {
    arr[arr.length -3].HTML.style.display = 'none';
    arr.forEach((el, index) => {
      if (index > 0 && index < arr.length-2)
      el.HTML.style.transform = `translateX(-100%)`;
    });
  };

  //left button
  arr[arr.length -2].HTML.onclick =()=> {
    arr[1].HTML.style.display = 'none';
    arr.forEach((el, index) => {
      if (index > 0 && index < arr.length-2)
      el.HTML.style.transform = `translateX(100%)`;
    });
  };


  console.log(arr)
  // raaaaaaaaaaaaaahhhhhhhhhhhhhh notttt enoughhhhh tiiiiiiiiiiiiiimmmmmmmmmmmmmmmmmmmeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    
  
  
  arr[1].HTML.style.border = "solid red"
  //arr[2].HTML.style.display = "none"
  //arr[5].HTML.style.clipPath = "polygon(0 0, 50% 0, 48% 100%, 0% 100%);"
  arr[arr.length-1].HTML.style.border = "solid red"
  console.log(arr.length)
}

let carouselContainer = document.querySelector('div.carousel')
carouselComp(carouselContainer)