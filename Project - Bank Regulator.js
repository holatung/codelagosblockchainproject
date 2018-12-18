pragma solidity >0.4.17 <0.5.0
 interface Regulator { 
    function checkValue(uint amount) returns (bool);
    function loan() returns (bool);
    function checkValue(uint amount) external returns (bool);
    function loan() external returns (bool);
}
 contract Bank is Regulator 
 {
    uint private value;
    
    function Bank(uint amount) {
    constructor(uint amount) public 
    {
        value = amount;
    }
    
    function deposit(uint amount) {
    function deposit(uint amount) public 
    {
        value += amount;
    }
    
    function withdraw(uint amount) {
    function withdraw(uint amount) public 
    {
        if (checkValue(amount)) {
            value -= amount;
        }
    }
    
    function balance() returns (uint) 
    {
    function balance() public view returns (uint) 
    {
        return value;
    }
    
    function checkValue(uint amount) returns (bool) 
    {
    function checkValue(uint amount) public returns (bool) 
    {
  
        return value >= amount;
    }
    
    function loan() returns (bool) 
    {
    function loan() public returns (bool) 
    {
        return value > 0;
    }
}
@@ -40,19 +40,19 @@ contract MyFirstContract is Bank(10) 
{
    string private name;
    uint private age;
    
    function setName(string newName) {
    function setName(string newName) public 
    {
        name = newName;
    }
    
    function getName() returns (string) 
    {
    function getName() public view returns (string) 
    {
        return name;
    }
    
    function setAge(uint newAge) {
    function setAge(uint newAge) public 
    {
        age = newAge;
    }
    
    function getAge() returns (uint) 
    {
    function getAge() public view returns (uint) 
    {
        return age;
    }

}