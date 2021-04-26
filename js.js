var caja = document.querySelector(".container");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");

function change1(){
    caja.classList.toggle("modo1");
  
 }

function change2(){
   caja.classList.toggle("modo2");
 
}

function change3(){
    caja.classList.toggle("modo3")
}


btn1.addEventListener("click", function(event){
    change2();
});

btn2.addEventListener("click", function(event){
    change1();
})

btn3.addEventListener("click", function(event){
    change3();
})


