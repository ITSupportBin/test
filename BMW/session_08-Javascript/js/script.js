function doCal(ch){
    if(ch != "=" ){
        switch(ch){
            case "C":
                document.getElementById("txtDisplay").value = "";
                break;    
            default:
                document.getElementById("txtDisplay").value += ch;
                break;
        }                
    }
    else{
        var s = document.getElementById("txtDisplay").value;
        document.getElementById("txtDisplay").value = eval(s);
    }
}