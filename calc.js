var displayvalue="";
var preval=0;
var opt='+';
debugger;
function calculate(operand){
    displayvalue+=operand;
    display();
}
function display(){
    document.getElementById('result').value=displayvalue;
}
function operation(operator){
    var result;
    switch(opt){
        case  '+':{
            result=parseInt(preval)+parseInt(displayvalue);
            document.getElementById('result').value=result;
            opt=operator;
            break;
        }
        case  '/':{
            result=parseInt(preval)/parseInt(displayvalue);
            document.getElementById('result').value=result;
            opt=operator;
            break;
        }
        case  '*':{
            result=parseInt(preval)*parseInt(displayvalue);
            document.getElementById('result').value=result;
            opt=operator;
            break;
        }
        case  '-':{
            result=parseInt(preval)-parseInt(displayvalue);
            document.getElementById('result').value=result;
            opt=operator;
            break;
        }
        case  '=':{
             result=preval;
            document.getElementById('result').value=result;
            opt=operator;
            break;
        }
        case  'clr':{
            document.getElementById('result').value='0';
            result=0;
            opt='+';
            break;
        }
        default :
        {
            break;
        }
    }
    displayvalue='';
    preval=result;

}