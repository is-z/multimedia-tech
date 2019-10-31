document.addEventListener('DOMContentLoaded', function () {
    //-------------------------------------------------    
    var init = document.querySelector("#init");
    var sel = document.querySelector("#sel");
    //-------------------------------------------------
    var a = [1, 4, 5, 6, 9];
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var item = a_1[_i];
        init.innerHTML += "<div class=\"sq\">" + item + "</div>";
    }
    init.addEventListener('click', function (e) {
        var ob = e.target;
        if (ob.classList.contains("sq")) {
            sel.innerHTML = "<div class=\"sq\">" + ob.innerHTML + "</div>";
        }
    });
    console.log(a);
});
