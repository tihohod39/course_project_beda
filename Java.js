let theme = 3;
const buttons = document.querySelectorAll('button');
const a = document.querySelectorAll('a');
let button = document.getElementsByClassName("buttons");
let level = document.getElementsByClassName("levels");
let option = document.getElementsByClassName("options");
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
    document.body.style.backgroundColor = 'rgb(37 37 37)';
    buttons[0].style.borderColor = "rgb(104 240 99)";
    buttons.forEach( btn=>{
        btn.style.color = "rgb(104, 240, 99)";
       });
       a.forEach( a=>{
        a.style.color = "rgb(104, 240, 99)";
    });
    ochert[0].style.borderColor="rgb(104, 240, 99)";
    h1[0].style.color="rgb(104, 240, 99)";
    break;
    }
    case 2:{
        document.body.style.backgroundColor = 'rgb(143 223 220)';
        buttons[0].style.borderColor = "rgb(3 71 255)";  
        buttons.forEach( btn=>{
            btn.style.color = "rgb(3 71 255)";
           });   
           a.forEach( a=>{
            a.style.color = "rgb(3 71 255)";
        });
        ochert[0].style.borderColor="rgb(3 71 255)";
        h1[0].style.color="rgb(3 71 255)";
    break;
    }   
    case 3:{
      
        document.body.style.backgroundColor = 'rgb(143 145 223)';
        buttons[0].style.borderColor = "rgb(255 3 243)";  
        buttons.forEach( btn=>{
            btn.style.color = "rgb(255 3 243)";
           });    
           a.forEach( a=>{
            a.style.color = "rgb(255 3 243)";
        });
        ochert[0].style.borderColor="rgb(255 3 243)";
        h1[0].style.color="rgb(255 3 243)";
    break;
    }
    case 4:{
        document.body.style.backgroundColor = 'rgb(214 223 143)';
        buttons[0].style.borderColor = "rgb(212 255 3)";  
        buttons.forEach( btn=>{
            btn.style.color = "rgb(212 255 3)";
           });   
           a.forEach( a=>{
            a.style.color = "rgb(212 255 3)";
        });
        ochert[0].style.borderColor="rgb(212 255 3)";
        h1[0].style.color="rgb(212 255 3)";
    break;
    }         
 }; 
 console.log(theme);
}

const ochert = document.getElementsByClassName('buttons');
const h1 = document.querySelectorAll('h1');
function changeColor() {
    switch (theme) {
        case 1:{
        document.body.style.backgroundColor = 'rgb(37 37 37)';
        buttons[0].style.borderColor = "rgb(104 240 99)";
        buttons.forEach( btn=>{
            btn.style.color = "rgb(104, 240, 99)";
           });
           a.forEach( a=>{
            a.style.color = "rgb(104, 240, 99)";
        });
        ochert[0].style.borderColor="rgb(104, 240, 99)";
        h1[0].style.color="rgb(104, 240, 99)";
        level[0].style.borderColor="rgb(104, 240, 99)";
        option[0].style.borderColor="rgb(104, 240, 99)";
        break;
        }
        case 2:{
            document.body.style.backgroundColor = 'rgb(143 223 220)';
            buttons[0].style.borderColor = "rgb(3 71 255)";  
            buttons.forEach( btn=>{
                btn.style.color = "rgb(3 71 255)";
               });   
               a.forEach( a=>{
                a.style.color = "rgb(3 71 255)";
            });
            ochert[0].style.borderColor="rgb(3 71 255)";
            h1[0].style.color="rgb(3 71 255)";
            level[0].style.borderColor="rgb(3 71 255)";
            option[0].style.borderColor="rgb(3 71 255)";
        break;
        }   
        case 3:{
          
            document.body.style.backgroundColor = 'rgb(143 145 223)';
            buttons[0].style.borderColor = "rgb(255 3 243)";  
            buttons.forEach( btn=>{
                btn.style.color = "rgb(255 3 243)";
               });    
               a.forEach( a=>{
                a.style.color = "rgb(255 3 243)";
            });
            ochert[0].style.borderColor="rgb(255 3 243)";
            h1[0].style.color="rgb(255 3 243)";
            level[0].style.borderColor="rgb(255 3 243)";
            option[0].style.borderColor="rgb(255 3 243)";
        break;
        }
        case 4:{
            document.body.style.backgroundColor = 'rgb(214 223 143)';
            buttons[0].style.borderColor = "rgb(212 255 3)";  
            buttons.forEach( btn=>{
                btn.style.color = "rgb(212 255 3)";
               });   
               a.forEach( a=>{
                a.style.color = "rgb(212 255 3)";
            });
            ochert[0].style.borderColor="rgb(212 255 3)";
            h1[0].style.color="rgb(212 255 3)";
            level[0].style.borderColor="rgb(212 255 3)";
            option[0].style.borderColor="rgb(212 255 3)";
        break;
        }  
     }; 
   
}
changeColor();
