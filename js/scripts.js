//Business logic for Pizza orders

function Pizza(size, cheese, topping1, topping2, topping3){
    this.size=size;
    this.cheese=cheese;
    this.topping1=topping1;
    this.topping2=topping2;
    this.topping3=topping3;
};

// function Customer(name, address){
//     this.name=name;
//     this.address=address
// };

console.log("PIZZA!!!!")

Pizza.prototype.addTotal = function() {
  return this.size + this.cheese + this.topping1 + this.topping2 + this.topping3;
};

        



//User Interface

$(document).ready(function(){
$("#pizza-order").submit(function(event) {
    event.preventDefault()
    const size = parseInt($("#pizza-size").val());
    const cheese = parseInt($("#cheese").val());
    const topping1 = parseInt($("#topping1").val());
    const topping2 = parseInt($("#topping2").val()); 
    const topping3 = parseInt($("#topping3").val());
    let newPizza = new Pizza(size, cheese, topping1, topping2, topping3);
    let price = newPizza.addTotal();
    console.log(price)
    return price
})
})

let newPizza = new Pizza(1, 1, 1, 1, 1);
