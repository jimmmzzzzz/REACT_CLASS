class student {
    constructor(name , matric) {
        this.name = name;
        this.matric = matric;
    }
    displayInfo() {
        consol.log(`Name: ${this.name} , Matric No: ${this.matric}`);
    }
}
const student1 = new Student("jimi","24/2303");
student1.displayInfo();