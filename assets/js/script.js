// 初期表示を非表示に
document.getElementById("panel2").style.display = 'none';
document.getElementById("panel3").style.display = 'none';

//各パネルを変数に
const p1 = document.getElementById("panel1");
const p2 = document.getElementById("panel2");
const p3 = document.getElementById("panel3");

//各パネルの色変更クラスを読み込み
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");



//パネルの色、内容変更　記述部分
c1.addEventListener("click", () =>{
        //パネルの色
    c1.style.backgroundColor = "#333";
    c2.style.backgroundColor = "#a5a5a5";
    c3.style.backgroundColor = "#a5a5a5";
    //記述内容
    p1.style.display = "block";
    p2.style.display = "none";
    p3.style.display = "none";
});
c2.addEventListener("click", () =>{
        //パネルの色
    c2.style.backgroundColor = "#333";
    c1.style.backgroundColor = "#a5a5a5";
    c3.style.backgroundColor = "#a5a5a5";
    //記述内容
    p2.style.display = "block";
    p1.style.display = "none";
    p3.style.display = "none";
});
c3.addEventListener("click", () =>{
        //パネルの色
    c3.style.backgroundColor = "#333";
    c1.style.backgroundColor = "#a5a5a5";
    c2.style.backgroundColor = "#a5a5a5";
    //記述内容
    p3.style.display = "block";
    p1.style.display = "none";
    p2.style.display = "none";
});




//コンタクト部分の JavaScript記述
//入力内容の要素取得
let content = getElementById(title); //記述ミス
//送信ボタン
const btn = getElementById("btn1");

