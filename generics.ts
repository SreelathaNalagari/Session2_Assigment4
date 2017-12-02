interface FrontEnd {
    name: string;
    version: number;
    
}

interface Java {
    name : string;
    version : number;
}

class Developer<T> {
    role: T[];
    constructor() {
        this.role = [];
    }
}

let UIdata : FrontEnd = { name: "EcmaScript", version:6};
let frontend: Developer<FrontEnd> = new Developer<FrontEnd>();
frontend.role.push(UIdata);
console.log(frontend.role);

let BackendData : Java = { name : "Java", version : 1.9};
let java: Developer<Java> = new Developer<Java>();
java.role.push(BackendData);
console.log(java.role);