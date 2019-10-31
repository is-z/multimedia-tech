document.addEventListener('DOMContentLoaded', function () {
    var info_json = "\n    {\n      \"cr\":{\n          \"x\":300,\n          \"y\":221,\n          \"r\":100\n      },\n      \"squre\":{\n        \"x\":300,\n        \"y\":221,\n        \"a\":100,\n        \"b\":300\n    }   \n\n\n    }";
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
        context.arc(circe.x, circe.y, circe.r, 0, Math.PI * 2, true);
        context.closePath();
        context.stroke();
        context.fill();
        var sq = ob.squre;
        context.strokeStyle = "#000";
        context.fillStyle = "#fc0";
        context.beginPath();
        context.strokeRect(sq.x, sq.y, sq.a, sq.b);
        context.closePath();
        context.stroke();
        context.fill();
    }
});
