function orderPizza(){
    total();
    
   

}
function total(){
    var typeOfPizza = document.getElementById("pizza").value;
    var quantity = document.getElementById("quantity").value;
    var topping = document.getElementById("toppings").value;
    var crust = document.getElementById("crust").value;
    var size = document.getElementById("size").value;
    var total = (parseInt(topping) + parseInt(crust) + parseInt(size)) * quantity;
    document.getElementById("Pizza").innerHTML = typeOfPizza;
    document.getElementById("Quantity").innerHTML = quantity;
    document.getElementById("Size").innerHTML = size;
    document.getElementById("Crust").innerHTML = crust;
    document.getElementById("Toppings").innerHTML = topping;
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