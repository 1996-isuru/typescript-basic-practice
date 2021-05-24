 interface UserInterface{
     name: string;
     email: string;
     age: number;
     register();
     payInvoice();
 }
 
 class User implements UserInterface{
     name: string;
     email: string;
     age: number;

     constructor(name: string, email: string, age: number){
         this.name = name;
         this.email = email;
         this.age = age;
         console.log('User Created: '+this.name);
     }
  
    // private register(){
    //      console.log(this.name+' is now registerd');
    //  } // eliye tiyeddi private dala wada ne
     register(){
        console.log(this.name+' is now registerd');
    }

    payInvoice(){
        console.log(this.name);
    }

 }
//  let john = new User('Jonh Doe', 'joe@gmail.com', 33);
//  console.log(john.age);
//  john.register();

 class Member extends User{
     id: number;

     constructor(id: number, name: string, email: string, age:number){
         super(name, email, age);
         this.id = id;
     }

     payInvoice(){
         super.payInvoice()
     }
 }
 let mike: User = new Member(1,'isuru','s12@gmail.com',3);
 mike.payInvoice();

// class User {
//     private name: string;
//     private email: string;
//     private age: number;

//     constructor(name: string, email: string, age: number){
//         this.name = name;
//         this.email = email;
//         this.age = age;
//         console.log('User Created: '+this.name);
//     }
// }
// let john = new User('Jonh Doe', 'joe@gmail.com', 33);
// console.log(john.age);
//me comment karl tyn eka run wen ne, because variable tika private nisa eliye run wen ne


