document.addEventListener('DOMContentLoaded', function () {
    window.onload = function () {
        var info_json = "\n        {   \n         \"cr\":{\n            \"x\":300,\n            \"y\":221,\n            \"r\":100\n         }\n        }";
        var ob = JSON.parse(info_json);
        console.log(ob);
        var drawingCanvas = document.getElementById('smile');
        if (drawingCanvas && drawingCanvas.getContext) {
            var context = drawingCanvas.getContext('2d');
            var circe = ob.cr;
            // Рисуем окружность
            context.strokeStyle = "#000";
            context.fillStyle = "#fc0";
            context.beginPath();
            context.arc(100, 100, 50, 0, Math.PI * 2, true);
            context.closePath();
            context.stroke();
            context.fill();
            var sq = ob.square;
            context.strokeStyle = "#000";
            context.fillStyle = "#fc0";
            context.beginPath();
            context.strokeRect(300, 100, 100, 300);
            context.closePath();
            context.stroke();
            context.fill();
        }
    };
});
