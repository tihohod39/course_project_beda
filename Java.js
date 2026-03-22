document.getElementById("btnOpen").onclick = function(){
    let vid = document.getElementsByClassName("levels");
            vid[0].style.visibility = "visible";
        let vid2 = document.getElementsByClassName("buttons");
            vid2[0].style.visibility = "hidden";
}
document.getElementById("btnClose").onclick = function(){
    let vid = document.getElementsByClassName("levels");
            vid[0].style.visibility = "hidden";
            let vid2 = document.getElementsByClassName("buttons");
            vid2[0].style.visibility = "visible";
}