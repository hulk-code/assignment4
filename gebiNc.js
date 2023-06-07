const change= document.getElementById('fruits');
console.log(change.innerText='bangladesh fruits'.toUpperCase());

const changes=document.getElementsByClassName('fruit');
for (const fruit of changes) {
   console.log(fruit.innerText);
}


const another=document.getElementById('two');
console.log(another);
const overwrite= another.innerText='akash batas'
console.log(overwrite);

const addPlace= document.getElementById("places");
//  console.log(addPlace);
const li= document.createElement('li');
li.innerText='khajrachori';
// console.log(li);
 addPlace.appendChild(li);
 console.log(li)
 
 const styleContaner= document.getElementById('style-container');
 styleContaner.style.border='5px solid black';
 styleContaner.style.borderRadius='20px';
 styleContaner.style.background='blue'
 styleContaner.style.textAlign='center'
 
const mainContainer= document.getElementById("main-container");
// console.log(mainContainer);

const addSection= document.createElement("section");
addSection.innerHTML = `
<h1> New Section </h1>
<ul>
   <li> new 1</li>
   <li> new 2</li>
   <li> new 3</li>
   <li> new 4</li>
</ul>
`
addSection.style.border= '5px solid black'
addSection.style.margin= '5px'
addSection.style.background= 'yellow'
addSection.style.borderRadius= '20px'
addSection.style.textAlign= 'center'
addSection.style.fontSize= '20px'







mainContainer.appendChild(addSection)


