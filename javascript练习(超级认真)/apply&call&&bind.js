function User(name) {
    this.name = name
}
var hdms = {
    age: '2'
}
User.call(hdms, "都是");
var s = new User("s")
console.log(s)