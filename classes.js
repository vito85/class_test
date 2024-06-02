//=================== Functional Inheritance=================

//համագործակցելով RAM ի հետ Hip - ում պահվում են հղումները
//call stack- ում իրականացվում է մեր գրած կոդի ինտեռպրիտացիան։
//BROWSER API: Բռաուզերի կողմից տրամադրվող։
//evant loop հերթագրման տեղ, որը աշխատում է այն պահին երբ, որ 
//call stek - ը դատարկվում է ։


//shablon User
//  function User(name,position){
//     this.name = name;
//     this.position = position;
//     this.info = function(){
//         return this.position
//     }
// }

// let obj1 = new User("Aram","Snaiper");
// let obj2 = new User("Narek" , "Hradzig");
  //  console.log(obj1);
  // console.log(obj2.info());

// console.log(obj1.__proto__ === User.prototype)
// console.log(Object.prototype);
// console.log(Array.prototype);
// console.log(User.prototype);



// let obj = {
//     name:"Aram",
//     getinfo(){
//         return this.name
//     }
// }
// //getinfo մոթդը կոչվում է obj օբյեկտի սեփական մեթոդ
// console.log(obj.getinfo());
// console.log(obj.toString())  //toString is method from object prototype ....???



//! Functional Inheritance

// function User(position, status){
//     this.position = position;
//     this.status = status;
//     this.getFulInfo = function(){
//         console.log(`position is ${this.position}, 
//         status is ${this.status}`)
//     }
// }
//  let user = new User("NetAdmin",true)
//  console.log(user)

// //1
//  console.log(user.constructor)

//1.2
// function Admin(position,status){
//     this.position = position;
//     this.status = status;
//     this.getFulInfo = function(){
//         console.log(`position is ${this.position}, 
//         status is ${this.status}`)
//     }

// }

// let admin = new Admin("SysAdmin", false)
// console.log(admin)

//1.2.1
// console.log(user.position);
//  console.log(admin.position)

//2. in this case help us functional inheritance

//parent

// function User(position, status){
//    // 2.
//     let t = "Programmer"; // incapsulation

//     this.position = position;
//     this.status = status;
//     this.getFulInfo = function(){
//         console.log(`position is ${this.position}, 
//         status is ${this.status}`)
//     }
// }


//child

// function Admin(){
//     this.test = function(){
//         console.log("Hello from Admin")
//     }

//     User.apply(this , arguments);  // functional inheritance

//    // 2.
//     this.a = function(){
//         console.log(t)
//     }

//    //3. We can redefined same parent function
//     // this.getFulInfo = function(){
//     //     console.log(`job is: ${this.position},
//     //      status: ${this.status}`) // polymorphism
//     // }
//  }

//   let user = new User("NetAdmin", true);
//   let admin = new Admin("SisAdmin", false);

//   console.log(user);
//   console.log(admin);
//  admin.a();
//  console.log(user.a());

    //  admin.test(); // test function => Admin
    // admin.getFulInfo()

//!============================================================
//===================== Prototype Inhersitance =================

// function User(name,surname){
//     this.name = name;
//     this.surname = surname;

//     this.getInfo = function(){
//         console.log(`I am a ${this.name}  ${this.surname}`)
//     }
// }

//  let user1 = new User("Poghos", "Poghosyan");
//  let user2 = new User("Petros","Petrosyan");
//   console.log(user1);
//  console.log(user2);

// // //1.
//  user1.getInfo();
//  user2.getInfo();

// // // //1.1 we can redefined method "getInfo" for user1
//    user1.getInfo = function(){console.log("Hello Poghosyan")};
//   user1.getInfo();
//   user2.getInfo();



// every function constructor has a property Prototype

// function User(name,surname){
//     this.name = name;
//     this.surname = surname;

//     // this.getInfo = function(){
//     //     console.log(`I  am a ${this.name}  ${this.surname}`)
//     // }
// }

 //console.log(User.prototype)

//comment getinfo in User function
// User.prototype.getInfo = function(){
//     console.log(`I am a ${this.name}  ${this.surname}`)
// }
 //console.log(User.prototype)
  // let user1 = new User("Poghos", "Poghosyan");
  // let user2 = new User("Petros","Petrosyan");
  // user1.getInfo();
  // user2.getInfo();

//  console.log(User.prototype);
//  console.log(user1.__proto__);
//  console.log(user1.__proto__ === User.prototype)

//look at object user1. It has a property, "getInfo" is 
// in prototype of user1
//console.log(user1); 

//add some methods
//User.prototype.getTest = function(){console.log("Hello")};
// user1.getTest();
// user2.getTest();
// console.log(User.prototype);

// console.log(user1);
// console.log(user1.toString());

//Prototype accessible only in function User
//objects have a property __proto__

//!========================================================================

//!Let's do prototype inharitance
//1
// function User(name,surname){
//     this.name = name;
//     this.surname = surname;

// }

// //1.1
// User.prototype.getInfo = function(){
// console.log(`My name is  ${this.name}, and surname ${this.surname}`)
// }

// // // //1.2
// function Admin(){
//     User.apply(this, arguments); // functional inheritance
// }

// // prototype inheritance
 //Admin.prototype = Object.create(User.prototype);   //{}
  // Admin.prototype = User.prototype;
  // User.prototype.test = function(){console.log("hello")}; 

// let user = new User("Poghos","Poghosyan");
// let admin = new Admin("Petros","Petrosyan");

//  admin.test()

// console.log(user);
// console.log(admin);

// user.getInfo();
// admin.getInfo(); // ...???




//save our constructor
//  Admin.prototype.constructor = Admin;
// console.log(user);
// console.log(admin);

//Eexample

// function Grandfather(){}
//     Grandfather.prototype.eyecolor = "Blue";

//     function Father(){};
//         Father.prototype = Object.create(Grandfather.prototype);
       

//         //1.1
//         Father.prototype.eyecolor = "Green";

// function Son(){}
//     Son.prototype = Object.create(Father.prototype)
//     //1.2
//     Son.prototype.eyecolor = "Brown";

//     let grandfather = new Grandfather();
//     let father = new Father();
//     let son = new Son();


//     console.log(grandfather.eyecolor);
//     console.log(father.eyecolor);
//     console.log(son.eyecolor);

//     //__proto__
//     console.log(Grandfather.prototype);
//     console.log(grandfather.__proto__);
//     console.log(grandfather.prototype)



//not recomended
// function Grandfather(){}
//  Grandfather.prototype.eyecolor = "Green";

// function Father(){};
// //3.1
// //Father.prototype = Grandfather.prototype; //not recomended

//  //3.2
//  //Father.prototype.eyecolor = "Blue";

//  //Father.prototype = new Grandfather() ; // not recomended
//  Father.prototype.eyecolor = "red";

// let grandfather = new Grandfather();
// let father = new Father();

// console.log(grandfather.eyecolor);
// console.log(father.eyecolor);



//!======================== Classes in ES6 ======================

// in ES5

// function Car(model,color){
//     this.model = model;
//     this.color = color;
// }

//  Car.prototype.getModel = function(){
//     console.log(`My car model is ${this.model},
//      and color is ${this.color}`)
// }
// let car = new Car("Suzuki","silver")
// car.getModel()

//in ES6 we can do with Classes

// class Car {
//     constructor(model,color){
//         this.model = model;
//         this.color = color;
//     }
//     getModel(){
//         console.log(`My car model is ${this.model},
//         and color is ${this.color}`)
//     }
//      static getStatic(){
//          console.log("a am a static method of class")
//      }
//  }
//   let car = new Car("Suzuki","silver");
//   let car1 = new Car("Ford","Black");
  //   console.log(car)
  //  car.getModel();
//  car1.getModel();

//console.log(car.getModel === Car.prototype.getModel) // ...??

// for call static function we can do
//car.getStatic()  // ... ???
 //Car.getStatic()



//INHERITANCE of a Class

// class Car {
//     constructor(model , color){
//         console.log("Car constructor");
//         this.model = model;
//         this.color = color;
//     }
//     getModel(){
//         console.log(`my car model is ${this.model}`);
//     }
// }

// class Suzuki extends Car {
//     constructor(model,color){
//         super(model,color); //this keyword call constructor of Car
//         console.log("Suzuki constructor");
//     }
//     // we can also rewrite methods of parental classes
//     // Полиморфизм
    
//   //   getModel(){
//   //     console.log(`My suzuki model is ${this.model}`)
//   // }
//   //if we what to call after rewrite parential method
//     getModel(){
//         super.getModel()
//     }
  
// }

//     let suzuki = new Suzuki("swift","red");
//    console.log(suzuki);
//    suzuki.getModel();
//    suzuki.getModel();




// class Dog{
//     constructor(name){
//         this.name = name;

//     }
//     say(){
//         console.log(this.name + " " + "says haf")
//     }
//     // toString(){
//     //     return this.name
//     // }
// }

//  const dog1 = new Dog("Jeco");
//  console.log(dog1)
//   dog1.say()
//   console.log(dog1.toString())


// class Cat{
//     constructor(name){
//         this.name = name;

//     }
//     say(){
//         console.log(this.name + " " + "says mew")
//     }
//     toString(){
//         return this.name
//     }
// }

// const cat1 = new Cat("Murka")
// cat1.say()


//Class Animal //subClass// extends // super

// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     toString(){
//         return this.name
//     }
// }

// class Dog extends Animal {
//     constructor(name, age){
//         super(name);
//         this.age = age;
//     }
//     say(){
//         console.log(this.name + " " + "says haf")
//     }

//     toString(){
//         return "Dog"
//     }
//     //super
//     toString1(){
//         return "Dog name is" +" " + super.toString()
//     }
// }

// let dog1 = new Dog("jeco",5);
// console.log(dog1)
// console.log(dog1.toString1())

// class Cat extends Animal {
//     constructor(name,color){
//         super(name);
//         this.color = color;
//     }
//     say(){
//         console.log(this.name + " " + "says mew")
//     }
// }


// const cat1 = new Cat("murka","red");
// const dog1 = new Dog("Jeco",6);
// console.log(dog1);
// console.log(cat1);
//  console.log(cat1.toString());
//    console.log(dog1.toString());
//   console.log(dog1.toString1());

// console.log(typeof Cat)
//   console.log(dog1 instanceof Dog);
//   console.log(dog1 instanceof Animal);
//   console.log(dog1 instanceof Cat);
//   console.log(dog1.__proto__ === Dog.prototype);

 
//   class Book{
//     constructor(tittle, year, price){
//         this.tittle = tittle,
//         this.year = year,
//         this.price = price;
//     }

//     GetInfo(){
//         return ` title: ${this.tittle}\nyear: ${this.year}\nprice: ${this.price}
//  `   }
// }
// const book1 = new Book("Js",2020,"85$");

// console.log(book1.GetInfo());




