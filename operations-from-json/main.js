document.addEventListener('DOMContentLoaded', function () {
    var info_json = "   \n           {\n               \"p1\":2,\n               \"p2\":5,\n               \"op\":\"^\"\n    } ";
    var ob = JSON.parse(info_json);
    var rez = 0;
    var temp = ' ' + ob.p1 + ob.op + ob.p2 + '=';
    switch (ob.op) {
        case '+': {
            rez = ob.p1 * ob.p2;
            break;
        }
        case '-': {
            rez = ob.p1 * ob.p2;
            break;
        }
        case '*': {
            rez = ob.p1 * ob.p2;
            break;
        }
        case '/': {
            rez = ob.p1 * ob.p2;
            break;
        }
        case '^': {
            rez = Math.pow(ob.p1, ob.p2);
            break;
        }
    }
    console.log(rez);
    var d1 = document.querySelector('#d1');
    d1.innerHTML = "0";
    document.addEventListener('click', function () {
        d1.innerHTML = temp + rez;
    });
});
