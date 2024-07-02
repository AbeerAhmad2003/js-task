var registerForm=document.querySelector(".exchangeForm");
var result;
registerForm.onsubmit = function(e){
    e.preventDefault();
    var amount=document.querySelector("input").value;
    var currency=document.querySelector("select").value;
    if(currency=="dollar"){
        result=amount*3.5;

    }
    else if(currency=="dinar")
        result=amount*5;
    else
    result=amount;
    document.querySelector(".result").innerHTML=result;
};
   
    
   