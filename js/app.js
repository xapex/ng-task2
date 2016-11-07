(function () {
    'use strict';
    angular.module("ShopBasket", [])
        .controller("ToBuyController", ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService)

    ToBuyController.$inject = ["ShoppingListCheckOffService"];
    function ToBuyController(ShoppingListCheckOffService) {
        this.items = ShoppingListCheckOffService.getToBuyListItems();
        this.empty = function(){return ShoppingListCheckOffService.istbcEmpty();};
        this.buy = function(index){
            ShoppingListCheckOffService.buyItem(index);
        }

    }

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        this.items = ShoppingListCheckOffService.getalreadyBoughtListItems();
        this.empty = function(){return ShoppingListCheckOffService.isabcEmpty();};
    }

    function ShoppingListCheckOffService() {
        var toBuyList = [
                {
                    'name': 'cookies'
                    , 'qty': '10'
                }
                , {
                    'name': 'beer'
                    , 'qty': '5'
                }
                , {
                    'name': 'taco'
                    , 'qty': '3'
                }
                , {
                    'name': 'eggplant'
                    , 'qty': '1'
                }
                , {
                    'name': 'iron'
                    , 'qty': '15'
                }
            ];
        var boughtList = [];

        this.buyItem = function (index) {
            boughtList.push(toBuyList[index]);
            toBuyList.splice(index, 1);
        };
        this.getToBuyListItems = function(){
            return toBuyList;
        };
        this.istbcEmpty = function(){
            if (toBuyList.length>0) return false;
            return true;
        }
        this.isabcEmpty = function(){
            if (boughtList.length>0) return false;
            return true;
        }
        this.getalreadyBoughtListItems = function(){
            return boughtList;
        };
    };
})();
