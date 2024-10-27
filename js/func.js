//global variables
var idInterval;
var v1, v2, v3;
var x1 = 0, x2 = 0, x3 = 0;

//animation function
function startAnimation() {
    //calling the button ID from the html file
    document.getElementById("btnStart").disabled = true;

    //setting up the variables that are responsible for moving the monsters
    v1 = Math.floor(Math.random() * 20) + 5;
    v2 = Math.floor(Math.random() * 20) + 5;
    v3 = Math.floor(Math.random() * 20) + 5;
    
    //setting up running interval of the called function to 100 milliseconds
    idInterval = setInterval('move_a_step()',100);
}   
//stop function
function stop(){
    //getting and setting the start button ID to false
    document.getElementById("btnStart").disabled = false;

    //clearing the interval
    clearInterval(idInterval);
}
//moving animation function
function move_a_step(){
    /*General idea of the condition statements - when either variables x1,x2, and x3 is
    either greater than or equal to 720 it will call the done function which contains the following functions:
    First, it will clear the interval. 
    Second, alert popup will showup. 
    Third, the page will reload. And lastly, it will just return*/
    if(x1>=720&&x1 == Math.max(x1,x2,x3)){
        done("1");
        return;
    }
    if(x2>=720&&x2 == Math.max(x1,x2,x3)){
        done("2");
        return;
    }
    if(x3>=720&&x3 == Math.max(x1,x2,x3)){
        done("3");
        return;
    }

    //updating the values x1,x2, and x3
    x1+=v1;
    x2+=v2;
    x3+=v3;

    //changing the left padding of each character that is based from their incremental value right after the
    //character "x"
    document.getElementById("m1").style.paddingLeft = x1+"px";
    document.getElementById("m2").style.paddingLeft = x2+"px";
    document.getElementById("m3").style.paddingLeft = x3+"px";
}

function done(monster_number){
    clearInterval(idInterval);
    alert("Winner : Monster "+ monster_number);
    window.location.reload(true);
    return;
}
function reset(){
    x1 = 0;
    x2 = 0;
    x3 = 0;
    document.getElementById("btnStart").disabled = false;
    clearInterval(idInterval);
    document.getElementById("m1").style.paddingLeft = "0px";
    document.getElementById("m2").style.paddingLeft = "0px";
    document.getElementById("m3").style.paddingLeft = "0px";
}