const Person = require('./person');
const Class = require('./class');

module.exports = class Teacher extends Person{
    constructor(name,age,clazzes){
       super (name,age);
       this.clazzes=clazzes
    }
    introduce(){
    if(this.clazzes.length!==0){
        return super.introduce() + " I am a Teacher. I teach Class "+this.getNumber()+".";
    }else{
        return super.introduce() + " I am a Teacher. I teach No Class.";
    }
}
    getNumber()
{
    let number=this.clazzes;
    let num = [];
    number.filter(
        item => {
            num.push(item.number)
        }
    );
    return  num.join(',');
}

};