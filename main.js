function calculatesalary (salary , tax , hour){
    var Income = salary * hour - (tax * salary)
    console.log(`your salary is ${Income}`);
}
var salary = prompt("ener your salary");
var hour= prompt("enter your hour");
var degree = prompt("enter your degree");

switch(degree){
    case("phd"):
    {
        calculatesalary(salary, 0.3 , hour);
        break
    }
    case("master"):
    {
        calculatesalary(salary, 0.2 , hour);
        break
    }
    case("bachlor"):
    {
        calculatesalary(salary, 0.1 , hour);
        break
    }
    default:
        calculatesalary(salary, 0.05 , hour)
}
