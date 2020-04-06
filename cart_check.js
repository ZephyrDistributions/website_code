var subtotal = 0;
var subtotal2 = 0;
var subtotal3 = 0;
var subtotal4 = 0;
var subtotal5 = 0;
var subtotal6 = 0;
var btn = document.getElementById('first');
var btn2 = document.getElementById('second');
var b1 = document.getElementById('third');
var b2 = document.getElementById('fourth');
var b3 = document.getElementById('fifth');
var b4 = document.getElementById('sixth');
var complete;
var fork = 0;
var tax;

var order = ['cost1','cost2','cost3','cost4','cost5','cost6'];
alert("You must select submit on all products whether you are purchasing them or not in order to proceed to checkout.");

document.getElementById("Pay_Button").style.display = 'none';
var getOrder = [];
var getAmount = [];

function createOrder(id, amount){
    if(id === 'cost1'){
        document.getElementById(id).innerHTML = "Air Jordan AirPod Case [Red]";
        document.getElementById("d1").innerHTML = "Quantity: " + amount;
    }
    else if(id === 'cost2'){
        document.getElementById(id).innerHTML = "Air Jordan AirPod Case [Gray]";
        document.getElementById("d2").innerHTML = "Quantity: " + amount;
    }
    else if(id === 'cost3'){
        document.getElementById(id).innerHTML = "Off-White Nike AirPods Pro Case";
        document.getElementById("d3").innerHTML = "Quantity: " + amount;
    }
    else if(id === 'cost4'){
        document.getElementById(id).innerHTML = "Champion AirPods Pro Case";
        document.getElementById("d4").innerHTML = "Quantity: " + amount;
    }
    else if(id === 'cost5'){
        document.getElementById(id).innerHTML = "Supreme AirPods Pro Case";
        document.getElementById("d5").innerHTML = "Quantity: " + amount;
    }
    else if(id === 'cost6'){
        document.getElementById(id).innerHTML = "NASA AirPods Pro Case";
        document.getElementById("d6").innerHTML = "Quantity: " + amount;
    }
}

function submitForm1(){
    if(document.getElementById("quantity").value > 0){
        getOrder.push("Air Jordan AirPod Case [Red]");
        getAmount.push(document.getElementById("quantity").value);
    }
    var amount = document.getElementById("quantity").value * 8.99;
    document.getElementById("quantity").disabled = true;
    subtotal+=amount;
    btn.disabled = true;
    createOrder(order[0], document.getElementById("quantity").value);
    finalForm();
}

function submitForm2(){
    if(document.getElementById("amount").value > 0){
        getOrder.push("Air Jordan AirPod Case [Gray]");
        getAmount.push(document.getElementById("amount").value);
    }
    var amount2 = document.getElementById("amount").value * 8.99;
    document.getElementById("amount").disabled = true;
    subtotal2+=amount2;
    btn2.disabled = true;
    createOrder(order[1], document.getElementById("amount").value);
    finalForm();
}

function submitForm3(){
    if(document.getElementById("num").value > 0) {
        getOrder.push("Off-White Nike AirPods Pro Case");
        getAmount.push(document.getElementById("num").value);
    }
    var amount3 = document.getElementById("num").value * 7.99;
    document.getElementById("num").disabled = true;
    subtotal3+=amount3;
    b1.disabled = true;
    createOrder(order[2], document.getElementById("num").value);
    finalForm();
}

function submitForm4(){
    if(document.getElementById("num2").value > 0){
        getOrder.push("Champion AirPods Pro Case");
        getAmount.push(document.getElementById("num2").value);
    }
    var amount4 = document.getElementById("num2").value * 7.99;
    document.getElementById("num2").disabled = true;
    subtotal4+=amount4;
    b2.disabled = true;
    createOrder(order[3], document.getElementById("num2").value);
    finalForm();
}

function submitForm5(){
    if(document.getElementById("num3").value > 0){
        getOrder.push("Supreme AirPods Pro Case");
        getAmount.push(document.getElementById("num3").value);
    }
    var amount5 = document.getElementById("num3").value * 7.99;
    document.getElementById("num3").disabled = true;
    subtotal5+=amount5;
    b3.disabled = true;
    createOrder(order[4], document.getElementById("num3").value);
    finalForm();
}

function submitForm6(){
    if(document.getElementById("num4").value > 0){
        getOrder.push("NASA AirPods Pro Case");
        getAmount.push(document.getElementById("num4").value);
    }
    var amount6 = document.getElementById("num4").value * 7.99;
    document.getElementById("num4").disabled = true;
    subtotal6+=amount6;
    b4.disabled = true;
    createOrder(order[5], document.getElementById("num4").value);
    finalForm();
}

function finalForm(){
    complete = subtotal + subtotal2 + subtotal3 + subtotal4 + subtotal5 + subtotal6;
    tax = 0.125 * complete;
    document.getElementById("sub").innerHTML = "$" + complete.toFixed(2).toString();
    document.getElementById("tax").innerHTML = "$" + tax.toFixed(2).toString();
    fork = complete + 8.25 + tax;
    document.getElementById("total").innerHTML = "$" + fork.toFixed(2).toString();
    document.getElementById("end_total").value = fork;
    if(btn.disabled === true && btn2.disabled === true && b1.disabled === true && b2.disabled === true && b3.disabled === true && b4.disabled === true){
        document.getElementById("Pay_Button").style.display = "block";
        var displayOrder = [];
        for (i=0; i<getOrder.length; i++){
            displayOrder.push(getOrder[i]+": "+getAmount[i].toString());
        }
        document.getElementById("order_form").value = displayOrder;
    }
}




