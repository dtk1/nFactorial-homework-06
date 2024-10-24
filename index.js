function removeText(){
    document.getElementById("text").innerHTML = "";
}
button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);
function remove1(){
    document.getElementById("card 1").remove();
    
}
function remove2(){
    document.getElementById("card 2").remove();
    
}
function remove3(){
    document.getElementById("card 3").remove();
    
}
let currentContainer = 2;

function goLeftContainer(){
    if(currentContainer>1){
    currentContainer --;
    }
}
function goRightContainer(){
    if(currentContainer < 3){
    currentContainer ++;
    }
    document.getElementById("one").src = "./assets/8.jpg";
    document.getElementById("two").src ="./assets/9.jpg";
    document.getElementById("three").src ="./assets/10.jpg";
}
function showContainers(){
    if(currentContainer == 1){
        document.getElementById("one").src = "./assets/1.jpg";
        document.getElementById("two").src ="./assets/2.jpg";
        document.getElementById("three").src ="./assets/3.jpg";
    }
    if(currentContainer == 2){
        document.getElementById("one").src = "./assets/4.jpg";
        document.getElementById("two").src ="./assets/6.jpg";
        document.getElementById("three").src ="./assets/7.jpg";
    }
    if(currentContainer == 3){
        document.getElementById("one").src = "./assets/8.jpg";
        document.getElementById("two").src ="./assets/9.jpg";
        document.getElementById("three").src ="./assets/10.jpg";
    }
}
const hoverArea = document.getElementById('hoverArea');

  hoverArea.addEventListener('mouseenter', function() {
    hoverArea.style.cursor = 'pointer';
  });

  hoverArea.addEventListener('mouseleave', function() {
    hoverArea.style.cursor = 'default';
  });
let closedOrNot = 0;
function openList(){
    closedOrNot++;
    if(closedOrNot % 2 != 0){
        document.getElementById("li1").classList.replace("d-none", "visible");
        document.getElementById("li2").classList.replace("d-none", "visible");
        document.getElementById("li3").classList.replace("d-none", "visible");
        document.getElementById("li4").classList.replace("d-none", "visible");
    }
    if(closedOrNot % 2 == 0){
        document.getElementById("li1").classList.replace("visible", "d-none");
        document.getElementById("li2").classList.replace("visible", "d-none");
        document.getElementById("li3").classList.replace("visible", "d-none");
        document.getElementById("li4").classList.replace("visible", "d-none");
    }
   

}