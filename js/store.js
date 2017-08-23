(function(){
    'use strict';
    var App = window.App || {};

    function Store(storeId, db){
        this.storeId = storeId;
        this.db = db;
    }

    Store.prototype.createOrder = function(order){
        console.log('Adding order for: ' + order.email);
        this.db.add(order.email, order);
    }

    Store.prototype.deliverOrder = function(order){
        console.log('Delivering order for: ' + order.email);
        this.db.remove(order.email);
    }

    Store.prototype.printOrders = function(){
        console.log('Store =' + this.storeId + 'has pending orders');

        var customerEmails = Object.keys(this.db.getAll());

        customerEmails.forEach(function(email){
            console.log(this.db.get(email));
        }.bind(this));


        /*var self = this;
        customerEmails.forEach(function(email){
            console.log(self.db.get(email));
        });
        */

        /*for(var email of customerEmails){
            console.log(this.db.get(email));
        }*/
    }

    App.Store = Store;
    window.App = App;
}())