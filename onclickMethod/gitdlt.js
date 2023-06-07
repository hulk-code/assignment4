document.getElementById('text-box').addEventListener('keyup',function(event){
   const textBox =event.target.value;
   // console.log(textBox);

   const deleteButton= document.getElementById('delete-button')
if( textBox ==='delete' ){
   deleteButton.removeAttribute('disabled');
}
else{
   deleteButton.setAttribute('disabled',true);
}
})
document.getElementById('delete-button').addEventListener('click',function(){
   const hideText = document.getElementById('hide-text');
   hideText.style.display='none';
})

