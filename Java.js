let theme = 1;
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
document.getElementById("btnOptions").onclick = function(){
    let vid = document.getElementsByClassName("options");
    vid[0].style.visibility = "visible";
}
document.getElementById("btnClose2").onclick = function(){
    let vid = document.getElementsByClassName("options");
    vid[0].style.visibility = "hidden";
}

document.getElementById("btnTheme").onclick = function(){
    theme +=1;
 if(theme>4){
     theme=1;
 }
 switch (theme) {
    case 1:{
        let vid = document.getElementsByClassName("all")
       
        vid[0].style.background = 'rgb(37, 37, 37)';
    break;
    }
    case 2:{
        let vid = document.getElementsByClassName("all")
        let all = document.getElementsByClassName("button")
        all.forEach(element => {
           element.style.background ='rgb(143 223 220)'
        });
        vid[0].style.background = 'rgb(143 223 220)';
    break;
    }   
    case 3:{
        let vid = document.getElementsByClassName("all")
        vid[0].style.background = 'rgb(143 145 223)';
    break;
    }
    case 4:{
        let vid = document.getElementsByClassName("all")
        vid[0].style.background = 'rgb(214 223 143)';
    break;
    }         
 };
}