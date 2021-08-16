//how using data types => :number , :boolean , : object , ... or :any
let uid : number ; 
uid = 10 ; 
uid = 23 ; 
// uid = "six" ;
let list1 : object [] = [] ;
list1= [{name:"farid",age:24}, {name:"Rozhan",age:25}/*, "shayan"*/];

// "|" we called it "union" and whenever we use it we can have different datatypes
let list2 : (number|string)[] ;
list2=[1,2,3,4,'a','b','c','d'/*,true*/];
// we can use union everywhere
let id : number | string ;
id = 929491 ;
id = "f9fax35@"
