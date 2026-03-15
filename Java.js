document.getElementById("btnOpen").onclick = function(){
    let vid = document.getElementsByClassName("levels");
            vid[0].style.visibility = "visible";
}
document.getElementById("btnClose").onclick = function(){
    let vid = document.getElementsByClassName("levels");
            vid[0].style.visibility = "hidden";
}