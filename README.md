Describe: function Pizza()
Test: "It will create keys for each unique pizza order, including size, cheese, three toppings, name, and address."
Code: function Pizza(size, cheese, topping1, topping2, topping3){
    this.size=size;
    this.cheese=cheese;
    this.topping1=topping1;
    this.topping2 = topping2;
    this.topping3 = topping3;
};
Expected Output: Will create a unique object for each Pizza order

Describe: function Customer()
Test: "It will create keys for each unique cutsomer placing an order, including name and delivery address"
Code: function Pizza(name, address){
    this.name=name;
    this.address=address
};
Expected Output: Will create a unique object for each Customer placing an order

Describe: Pizza.prototype.addTotal = function()
Test: "It will add the total of the pizza options"
Code: let size = 1
      let cheese = 1
      let topping1 = 1
      let topping2 = 1
      let topping3 = 1

      Pizza.prototype.addTotal = function(){
          total = this.size + this.cheese + this.topping1 + this.topping2 + this.topping3
          return total
      }
Expected Output: Would add to a total of 6