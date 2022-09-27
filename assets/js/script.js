// 初期表示を非表示に
document.getElementById("panel2").style.display = 'none';
document.getElementById("panel3").style.display = 'none';

//各パネルを変数に
const p1 = document.getElementById("panel1");
const p2 = document.getElementById("panel2");
const p3 = document.getElementById("panel3");

//各パネルの色変更クラスを読み込み
const p1c = document.querySelector("service__panel__item__title");

p1c.addEventListener("click", () =>{
    p1c.style.backgroundColor = "lightblue";
});

