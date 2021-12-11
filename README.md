Describe: function Pizza()
Test: "It will create keys for each unique pizza order, including size, cheese, three toppings, name, and address."
Code: function Pizza(size, cheese, topping1, topping2, topping3, name, address){
    this.size=size;
    this.cheese=cheese;
    this.topping1=topping1;
    this.topping2 = topping2;
    this.topping3 = topping3;
    this.name = name;
    this.address = address;
};
Expected Output: Will create a unique object for each Pizza order