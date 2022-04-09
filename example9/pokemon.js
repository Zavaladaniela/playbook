class Pokemon {
    // constructor es un metodo que crea e inicializa objetos dentro de una clase
    constructor(name) {
      // this es una variable para referenciar el valor del contexto local de esta clase
      this.name = name // Estás variables se le conocen como atributos
    }

    //En este caso es una funcion sin parametro
    //el mensaje se da con string en el console log
    sayHello () {
        console.log (`Mi pokemon ${this.name} te saluda!!!`)
    
    }
    // en este caso podemos pasar un parametro y en el main decidir el string a pasar
    sayMessage(message){
        console.log (`Mi pokemon ${this.name} dice: ${message}`)
    }
  }
  
  // Esta clase se exporta en este módulo
  module.exports = Pokemon
