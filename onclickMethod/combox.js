const buttonId = document.getElementById('button-id').addEventListener('click',function(){
   const textArea= document.getElementById('text-area');
   const addText = textArea.value;

   const commentContiner= document.getElementById('comment-continer');

   const p = document.createElement('p');
   p.innerText = addText;
   commentContiner.appendChild(p);
   textArea.value='';
})

