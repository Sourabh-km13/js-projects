const obj1={}
obj1.name="blue"
//console.log(obj1);
Object.freeze(obj1)
obj1.name="black"
//console.log(obj1);
//rm to remove file
//touch to create file
const student={name:'sourabh', rollno:40}
//console.log(Object.values(student));
const marks={math:50,science:69}
obj3={...student,...marks}
console.log(obj3)
