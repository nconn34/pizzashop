Bowser's Pizzeria

Author: Nathan Conn

This is a webpage where a user can order a pizza from the Mushroom Kingdom's favorite purveyor of delicious pizza pie's. A user can custom order which pizza they want, the size, cheese, and up to three toppings!

## Technologies Used

* HTML
* CSS
* jQuery-3.6.0
* Bootstrap

## Description

Users will be prompted by Bowser's welcoming face, and encouraged to try the best pizza for themselves! They will start at the top of the order form and use the dropdown menu's to craft the perfect pizza! There are submission forms for size, cheese, and up to three toppings. At the bottom their order will be tallied and Bowser will give instructions for how to proceed next!

## Setup/Installation Requirements

* Any browser, with a preference for Chrome

* While filling out the form, be sure to only pick the fresh ingredients that best suit your palate for the day!

* If you are uncertain about the result, please just hit the "Reset Form" button and you may start your order over!

* Use this link: https://nconn34.github.io/pizzashop


You will want to clone this from the repository as is!

## Known Bugs

* Currently the "Reset Form" button will successfully hide the results of the first pizza, but I am unsure how to duplicate the order without refreshing the page. I think this is something I would like to head into office hours over. I am not sure if I need to store the orders in an empty database like with the addressBook() example, or if there is another way to have the constructor fire again, or if it it simply a reset function I am missing. I tried a few options but could not get them to work.

## License

If you have any questions please use the contact information provided on the website.

Copyright (c) 12/11/2021 Nathan Conn

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

Describe: Pizza.prototype.addTotal = function()
Test: "It will add the total of the pizza options"
Code: let size = 1
      let cheese = 1
      let topping1 = 1
      let topping2 = 1
      let topping3 = 1

      Pizza.prototype.addTotal = function(){
          return = this.size + this.cheese + this.topping1 + this.topping2 + this.topping3
      }
Expected Output: Would add to a total of 5

<!-- Did not have time for constructor below, may try to return to this at some point -->

<!-- Describe: function Customer()
Test: "It will create keys for each unique cutsomer placing an order, including name and delivery address"
Code: function Pizza(name, address){
    this.name=name;
    this.address=address
};
Expected Output: Will create a unique object for each Customer placing an order -->