document.addEventListener('DOMContentLoaded', function(){
    window.onload = function() {

        let info_json=`
        {   
         "cr":{
            "x":300,
            "y":221,
            "r":100
         }
        }`;



            let ob = JSON.parse(info_json);
            console.log(ob)


        var drawingCanvas:any = document.getElementById('smile');
        if(drawingCanvas && drawingCanvas.getContext) {
            var context:any = drawingCanvas.getContext('2d');
            let circe = ob.cr;
            // Рисуем окружность
            context.strokeStyle = "#000";
            context.fillStyle = "#fc0";
            context.beginPath();
            context.arc(100,100,50,0,Math.PI*2,true);
            context.closePath();
            context.stroke();
            context.fill();

            let sq = ob.square;
            context.strokeStyle = "#000";
            context.fillStyle = "#fc0";
            context.beginPath();
            context.strokeRect(300, 100, 100, 300);
            context.closePath();
            context.stroke();
            context.fill();

        }
    }




})