"use strict";

let btnr=document.querySelector('.btnrez');
btnr.addEventListener('click', () => {
    let tenPrice=document.querySelector('.tenprice').value;
    let tenCol=document.querySelector('.tenkol').value;
    let heightCont=document.querySelector('.hcont').value;
    let heightSide=document.querySelector('.hside').value;
    let downSide=document.querySelector('.dside').value;
    let selmet=document.querySelector('.selectmet').value;

    let outs=document.querySelector('.out-s');
    let outv=document.querySelector('.out-v');
    let out1=document.querySelector('.out-1');
    let out2=document.querySelector('.out-2');
    let outrez=document.querySelector('.outrez');

    let priceMet=selmet;

    let rezs=((((Number(heightSide)+Number(downSide))/2*heightCont)*4)+(downSide*downSide))/1000000;
    let rezv=(((heightCont/3)*(heightSide*heightSide+downSide*downSide+Math.sqrt(heightSide*heightSide*downSide*downSide))))/1000000000;
    let rez1=tenPrice/tenCol;
    let rez2=rezs*1.4*priceMet+(rezs*150);
    let rez3='По цене не проходим, Капец кароче!!!';

    if (rez2<=rez1) {
        rez3='По цене проходим!!!'
    }

    outrez.innerHTML=rez3;

    outs.innerHTML=rezs.toFixed(2);
    outv.innerHTML=rezv.toFixed(2);
    out1.innerHTML=Math.floor(rez1);
    out2.innerHTML=Math.floor(rez2);

})
