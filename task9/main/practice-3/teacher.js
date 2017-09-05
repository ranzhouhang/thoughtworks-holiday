const Person = require('./person');
module.exports = class Teacher extends Person{
        constructor (name,age,clazzes){
            super(name,age);
            this.clazzes=clazzes;
            this.clazzes.filter(item=>item.teach(this));
        }
        introduce(){
            if(this.clazzes.length!==0){
            return super.introduce()+" I am a Teacher. I teach Class "+this.getNumber()+"."}else{
            return super.introduce()+" I am a Teacher. I teach No Class."}
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
    isTeaching(student) {
            return this.clazzes[0].members.some(value => value === student)
    }
    notifyStudentAppended(){
        console.log('Jerry become Leader of Class 2')
    }
    notifyLeaderAssigned(){
        console.log('Jerry become Leader of Class 2')
    }
};
