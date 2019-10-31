document.addEventListener('DOMContentLoaded', function(){

//-------------------------------------------------    
    
    let init = document.querySelector("#init");
    let sel = document.querySelector("#sel");

//-------------------------------------------------
    let a:Array<Number> =[1,4,5,6,9];
    
     for (let item of a){
         init.innerHTML +=`<div class="sq">${item}</div>`;
     }


     init.addEventListener('click',function(e){
         let ob:any =e.target; 
         if (ob.classList.contains("sq")){
            sel.innerHTML =`<div class="sq">${ob.innerHTML}</div>`;
         }
         
         
     })

    console.log(a);    
    

       
})