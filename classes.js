var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created: ' + this.name);
    }
    // private register(){
    //      console.log(this.name+' is now registerd');
    //  } // eliye tiyeddi private dala wada ne
    User.prototype.register = function () {
        console.log(this.name + ' is now registerd');
    };
    User.prototype.payInvoice = function () {
        console.log(this.name);
    };
    return User;
}());
//  let john = new User('Jonh Doe', 'joe@gmail.com', 33);
//  console.log(john.age);
//  john.register();
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var mike = new Member(1, 'isuru', 's12@gmail.com', 3);
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
