angular.module('todoApp', []).
    controller("PendientesController", function(){
	this.pendientes = [
	    {descripcion:"Aprender Angular", done:true},
	    {descripcion:"Hacer mi primer SPA", done:false}
	];

	this.addTodo = function(){
	    this.pendientes.push({descripcion:this.newPend, done:false})
	};

	this.pending = function(){
	    count = 0;
	    angular.forEach(this.pendientes,function(pend){
		count += pend.done ? 0 : 1;
	    });
	    return count;
	}
    });
