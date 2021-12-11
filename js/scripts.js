//Business logic for Pizza orders

function Pizza(size, cheese, topping1, topping2, topping3){
    this.size=size;
    this.cheese=cheese;
    this.topping1=topping1;
    this.topping2 = topping2;
    this.topping3 = topping3;
};

function Pizza(name, address){
    this.name=name;
    this.address=address
};

console.log("PIZZA!!!!")

      Pizza.prototype.addTotal = function(){
          total = this.size + this.cheese + this.topping1 + this.topping2 + this.topping3
          return total
        }
          
