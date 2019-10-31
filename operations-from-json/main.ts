document.addEventListener('DOMContentLoaded',function(){
let info_json:any = `   
           {
               "p1":2,
               "p2":5,
               "op":"^"
    } `;

    let ob:any  = JSON.parse(info_json);
  let rez=0;
    let temp = ' '+ob.p1+ob.op+ob.p2+'=';
    switch (ob.op){
        case '+': {
            rez = ob.p1*ob.p2;
            break;
        }
        case '-': {
            rez = ob.p1*ob.p2;
            break;
        }
        case '*': {
            rez = ob.p1*ob.p2;
            break;
        }
        case '/': {
            rez = ob.p1*ob.p2;
            break;
        }
        case '^': {
            rez = Math.pow(ob.p1,ob.p2);
            break;
        }
    }
console.log(rez);
    let d1:any = document.querySelector('#d1');
    d1.innerHTML = "0";

    document.addEventListener('click', function () {

        d1.innerHTML=temp+rez;
    })
});