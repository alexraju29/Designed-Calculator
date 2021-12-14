Boolean: isDotClick = false;

function buttonClick(val) {

    document.getElementById("display2").value += val;
}

function operatorClick(val){
    
    document.getElementById("display2").value += val;
    isDotClick=false;
}

function clearClick() {

    document.getElementById("display2").value = "";
    document.getElementById("display1").value = "";
    isDotClick=false;
}

function dotClick() {

    

    if (isDotClick == true) {

        
    } 
    else {
        
         document.getElementById("display2").value += ".";
         isDotClick = true;

    }
   
}


function equalClick() {

    var text = document.getElementById("display2").value;

    document.getElementById("display1").value = text;

    var result = eval(text);


    document.getElementById("display2").value = result;
    
    isDotClick=false;
}
