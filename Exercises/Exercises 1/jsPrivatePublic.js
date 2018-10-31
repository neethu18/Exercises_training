function Person() {
    var secret = "some secret";//private variable
    this.myName = "Neethu";//public variable

    function privateMethod() {
        console.log("hello there");
    }
    this.privilegedMethod = function () {
        console.log("hello");
        console.log(secret);//accessing private variables
        console.log(privateMethod());//accessing private functions
    }
}

//public method
Person.prototype.publicMethod = function () {
    console.log("In a public method");
    console.log(this.myName);
    return false;
}

var me = new Person();
console.log(me.secret);
console.log(me.myName);
console.log(me.publicMethod());
console.log(me.privilegedMethod());