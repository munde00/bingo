let usedNumber=[];
let displayNumber=" ";
let rotation = document.getElementById("random");
for(i=1;i<=75;i++){
    let displayId="'displayList" + i +"'";
    displayNumber += '<li id="' + displayId + '" >' + i + '</li>';//1から75までの数字にidを付ける
}
document.getElementById("display").innerHTML=displayNumber; //1から75までの数の表示

document.getElementById("get-number").onclick = function randomNumber(){
    let num = Math.floor( Math.random() * 75 + 1 ) ; //乱数の取得
    let countNumber =usedNumber.length+1;//回数のカウント
    if (countNumber>75){
       window.alert("ゲーム終了!") ; //75回で終了
    }else if(usedNumber.includes(num)){
        randomNumber() ;//既に出た数を出さない
    }else{
        document.getElementById("random").innerHTML= num;
        usedNumber.push(num);
        let getDisplayId = "'displayList" + num + "'";
        document.getElementById(getDisplayId).style.color = "red"; //出た数の色を赤に変える
        rotation.style.animation="none";
        rotation.offsetHeight;
        rotation.style.animation="change 1s";
        if(countNumber !== 1){
            document.getElementById("last-number").innerHTML=usedNumber[countNumber-2] ;
        }
    }
}
