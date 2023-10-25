var fb1 = document.getElementById("firstbut")
var sb1 = document.getElementById("scndbut")
var fb2 = document.getElementById("firstbut2")
var sb2 = document.getElementById("scndbut2")
var speech1 = document.getElementById(id="speech1")
var fb3 = document.getElementById("firstbut3")
var sb3 = document.getElementById("scndbut3")
var tb1 = document.getElementById("thirdbut")
var rat = 0


function wru(){
    fb1.style.display = "none";
    sb1.style.display = "none";
    fb2.style.display = "block";
    fb2.style.animation = "fade-in 1.5s forwards";
    sb2.style.display = "block";
    sb2.style.animation = "fade-in 1.5s forwards";
    //fb1.style.animation = "fade-in 1.5s forwards";
    //sb1.style.animation = "fade-in 1.5s forwards";
    //fb1.setAttribute ("onclick", "witp();")
    //fb1.innerHTML = "What is this place"

    speech1.innerHTML = "Who am <i>I</i>, you ask? I'll pardon thine ignorance due to thy species' lack of mental capacity. Remember well for I am the <b>Rat God</b> himself, sovereign of cheese."
}
function witp(){
    fb2.style.display = "none";
    sb2.style.display = "none";
    fb3.style.display = "block";
    fb3.style.animation = "fade-in 1.5s forwards";
    sb3.style.display = "block";
    sb3.style.animation = "fade-in 1.5s forwards";
    //fb1.style.animation = "fade-in 1.5s forwards";
    //sb1.style.animation = "fade-in 1.5s forwards";
    speech1.innerHTML = "This, ignorant human, is the <b>sacred Domain of the Rats</b>, and your mere presence is a <b>sin</b>. For that, I command you to leave. <b>Right now</b>. Or else..."
}
function tsmu(){
    fb2.style.display = "none";
    sb2.style.display = "none";
    fb3.style.display = "block";
    fb3.style.animation = "fade-in 1.5s forwards";
    sb3.style.display = "block";
    sb3.style.animation = "fade-in 1.5s forwards";
    speech1.innerHTML = "How dareth thou bla bla"
    fb3.setAttribute ("onclick", "window.close();")
    sb3.setAttribute ("onclick", "painful();")
    fb3.innerHTML = "Painless"
    sb3.innerHTML = "Painful"

}
function painful(){
    fb3.style.display = "none";
    sb3.style.display = "none";
    //while(true){ console.log("a"); }
}

function fy(){
    speech1.innerHTML = "ok get crashed"
    fb3.style.display = "none";
    sb3.style.display = "none";
    while(true){ console.log("a"); }
}
function crazy(){
    fb3.style.display = "none";
    sb3.style.display = "none";
    tb1.style.display = "block"
    if (rat == 0){
        speech1.innerHTML = "Crazy?"
    }
    else if  (rat == 1){
        speech1.innerHTML = "I was crazy once." 
    }
    else if  (rat == 2){
        speech1.innerHTML = "They put me in a room." 
    }
    else if  (rat == 3){
        speech1.innerHTML = "A rubber room." 
    }
    else if  (rat == 4){
        speech1.innerHTML = "A rubber room with rats." 
    }
    else if  (rat == 5){
        speech1.innerHTML = "The rats made me crazy." 
        tb1.innerHTML = "What?"
    }
    else if  (rat == 6){
        window.close()

    }
    rat += 1

}
