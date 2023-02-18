flag=true;

function displayValue(event){

    if(flag){

        result.value+=event.target.value

    }

    else{
        result.value=event.target.value
        flag=true
    }
    
  
}

function clearBox(){
    result.value=""
}

function Evaluateexp(){

    crntexp=result.value
    out=eval(crntexp)
    result.value=out
    flag=false
}
