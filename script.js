const showMessage = () => console.log('Я учу JavaScript!')
showMessage()

const image = document.getElementById("image");
//console.log(image);
//const showNewImg = () =>{
//image.src ="./assets/styles/images/cat2.jpg"
//}

const showNewImg = (link) =>{
  image.src = link;
  };
const btn = document.getElementById("btn");
//console.log(btn);
//btn.addEventListener ("click",showNewImg);

btn.addEventListener("click", () => {
  showNewImg("./assets/styles/images/cat2.jpg");
} );
const butn = document.getElementById("btn1");
butn.addEventListener("click", () => {
  showNewImg("./assets/styles/images/cat3.avif");
} );