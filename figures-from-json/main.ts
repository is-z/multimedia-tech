document.addEventListener('DOMContentLoaded', function(){
   
    let info_json =`
    {
      "cr":{
          "x":300,
          "y":221,
          "r":100
      },
      "squre":{
        "x":300,
        "y":221,
        "a":100,
        "b":300
    }   


    }`;

    let ob = JSON.parse(info_json);

    console.log(ob);
    
   
        
    var drawingCanvas:any = document.getElementById('smile');
        if(drawingCanvas && drawingCanvas.getContext) {
         var context:any = drawingCanvas.getContext('2d');

         let circe = ob.cr;   

         // Рисуем окружность 
         context.strokeStyle = "#000";
         context.fillStyle = "#fc0";
         context.beginPath();
         context.arc(circe.x,circe.y,circe.r,0,Math.PI*2,true);
         context.closePath();
         context.stroke();
         context.fill();
         
        let sq = ob.squre;    

         context.strokeStyle = "#000";
         context.fillStyle = "#fc0";
         context.beginPath();
         context.strokeRect(sq.x, sq.y, sq.a, sq.b);
         context.closePath();
         context.stroke();
         context.fill();
         

        }
       

    
})