var Developer = /** @class */ (function () {
    function Developer() {
        this.role = [];
    }
    return Developer;
}());
var UIdata = { name: "EcmaScript", version: 6 };
var BackendData = { name: "Java", version: 1.9 };
var frontend = new Developer();
var java = new Developer();
// frontend.role.push(UIdata);
// java.role.push(BackendData);
console.log(frontend.role);
console.log(java.role);
