const theMenuBtn = document.getElementById("menubtn");
const theMenu = document.getElementById("menu");
const iOne = document.getElementById("ione");
const iTwo = document.getElementById("itwo");
let flg = 0;
theMenuBtn.addEventListener("click" , ()=>{


    if(flg == 0){
        theMenu.style.left = "0px";
        theMenu.style.width = "224px";
        theMenu.style.display = "block"
        iOne.style.display = "none";
        iTwo.style.display = "block";
        console.log(1);
        flg = 1;
    }else{
        theMenu.style.left = "-100%";
        theMenu.style.width = "0px";
        iOne.style.display = "block";
        iTwo.style.display = "none";
        flg = 0;
        console.log(2);
    }

})

