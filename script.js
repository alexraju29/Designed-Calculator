function buttonClick(val) {

    document.getElementById("display2").value += val;
}

function clearClick() {

    document.getElementById("display2").value = "";
    document.getElementById("display1").value = "";
}

function equalClick() {

    var text = document.getElementById("display2").value;
    
    document.getElementById("display1").value = text;
    
    var result = eval(text);
    
    
    document.getElementById("display2").value = result;
}
