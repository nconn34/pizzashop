//Business logic for Pizza orders

function Pizza(size, cheese, topping1, topping2, topping3){
    this.size=size;
    this.cheese=cheese;
    this.topping1=topping1;
    this.topping2=topping2;
    this.topping3=topping3;
};

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
    let total = $("#total");
    total.empty();
    if (price === 0){
      total.append("<p> Total: " + "DID YOU EVEN READ THE FORM?!" + "</p>")
    }  else if(price<=8) {
      total.append("<p> Total: " + "Just a plain cheese slice? Bowser demands you live a little..." + "</p>")
    } else {
      total.append("<p> Total: $" + price + " ...Urghhhh...you only have human money? No coins? Hmmm...Bowser is confused, and must ask you to leave </p>")
    }
    $("#goaway").click(function() {
        $("#total").hide("");
        // $("#pizza-order").trigger(reset);
    })
})
})
