const fullSection= document.getElementById('full-section');
// console.log(fullSection);
fullSection.style.border= "5px solid black"
function onlickEvent(){
   document.body.style.background="red"
}

document.getElementById("add-event-listener").addEventListener('click',function(){
   document.body.style.background="blue"
})

document.getElementById("Add-Event-Listener").addEventListener('click', one)

function one(){
   document.body.style.background= "pink";
}