(function(){

'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


function ShoppingListCheckOffService(){
   var _buyItems = [
     { name: "cookies", quantity: 10 },
     { name: "milk", quantity: 10 },
     { name: "candies", quantity: 10 },
     { name: "fruits", quantity: 10 },
     { name: "pen", quantity: 10 }
   ];

   var _boughtItems = [];

   this.getBuyItems = function(){
     return _buyItems;
   }

   this.getBoughtItems = function(){
     return _boughtItems;
   }

   this.updateBoughtItem = function(index){
      var boughtItem = _buyItems.splice(index,1);
       _boughtItems.push(boughtItem[0]);
   }

}

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var vm = this;

  this.buyItems = ShoppingListCheckOffService.getBuyItems();

  this.removeItem = function(index){
      ShoppingListCheckOffService.updateBoughtItem(index);
  }

}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var vm = this;

  this.boughtItems = ShoppingListCheckOffService.getBoughtItems();

}


})();
