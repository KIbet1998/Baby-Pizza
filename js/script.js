function orderPizza(){
    total();
    
   

}
function total(){
    var typeOfPizza = document.getElementById("pizza").value;
    var quantity = document.getElementById("quantity").value;
    var topping = document.getElementById("toppings").value;
    var topping1 = document.getElementById("toppings");
    var topping2 = topping1.options[topping1.selectedIndex].text;
    var crust = document.getElementById("crust").value;
    var crust1 = document.getElementById("crust");
    var crust2 = crust1.options[crust1.selectedIndex].text;
    var size = document.getElementById("size").value;
    var size1 = document.getElementById("size");
    var size2 = size1.options[size1.selectedIndex].text;
    var total = (parseInt(topping) + parseInt(crust) + parseInt(size)) * quantity;
    document.getElementById("Pizza").innerHTML = typeOfPizza;
    document.getElementById("Quantity").innerHTML = quantity;
    document.getElementById("Size").innerHTML = size2;
    document.getElementById("Crust").innerHTML = crust2;
    document.getElementById("Toppings").innerHTML = topping2;
    document.getElementById("Total").innerHTML = total;

   

}

function notify(){
    var alertMe = document.getElementById("delivery-selection").value;
    if(alertMe){
        if(alertMe == 1){
            alert("thank you for shopping with us");
        }
        else{
            var location = prompt("enter your location");
            alert("Your order will be delivered to " + location +  " at an extra cost of Ksh 200");
            
        }
    }

}
