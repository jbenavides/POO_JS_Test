(function(window){

    'use strict';

    var App = window.App || {};
    var DataStore = App.DataStore;
    var Store = App.Store;
    var PizzaOrder = App.PizzaOrder;

    var datastore = new DataStore();
    var store = new Store('store1', datastore);
    var order = new PizzaOrder('email@email.com', 'large', 'cheese');

    store.createOrder(order);
    store.printOrders();

}(window))