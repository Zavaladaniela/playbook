// Ejemplo 4: Objeto con métodos
const pet = {
  name: "Tulio",
  age:27,
  // Esta es una función que se guarda como propiedad
  sayHello: function(){
    // this.name hace referencia a la propiedad del objeto
    console.log(`${this.name} te saluda en español!`)
    console.log(`${pet.name} te saluda en español!`)
    // son dos formas de acceder a la propiedad del objeto
    //mediante this.propiedad o nombreObjeto.propiedad
    console.log(`${this.age} te saluda en español!`)
  }
}

console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()
