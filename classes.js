//classes in javaScript are a blueprint for creating objects.
class student {
    constructor(name , matric) {
        this.name = name;
        this.matric = matric;
    }
    displayInfo() {
        consol.log(`Name: ${this.name} , Matric No: ${this.matric}`); 
    }
}
let student1 = new Student("jimi","24/2303");
student1.displayInfo();
