(function(){
    'use strict';
    var App = window.App || {};

    function BaseOrder(email){
        this.email = email;       
    }

    function PizzaOrder(email, size, speciality){
        BaseOrder.call(this, email); //call -> ejecuta la funcion
        this.size = size;
        this.speciality = speciality;
    }

    PizzaOrder.prototype = Object.create(BaseOrder.prototype);//crea un objeto a partir de otro objecto
    PizzaOrder.prototype.constructor = PizzaOrder; //dejar el construtor como estaba originalmente, el object.create lo modifico

    App.PizzaOrder = PizzaOrder;
    window.App = App;
}())