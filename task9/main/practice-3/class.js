// Write your code here
module.exports = class Class {
    constructor(number){
        this.number=number;
        this.members=[];
        this.leader=0;
        this.teachers=[];
    }
    assignLeader(student){
        this.leader+=student.age;
        this.teachers.forEach(item=>item.notifyLeaderAssigned('Jerry become Leader of Class 2'));
        if(this.members.length!==0){
       return "Assign team leader successfully."}
       else{
            return "It is not one of us."
        }
    }
    appendMember(student){
        this.members.push(student);
        this.teachers.forEach(item=>item.notifyStudentAppended('Jerry has joined Class 2'));

    }
    hasStudent(student){
        return this.members.some(value=>value===student)
    }
    teach(teacher){
        this.teachers.push(teacher)
    }
};
