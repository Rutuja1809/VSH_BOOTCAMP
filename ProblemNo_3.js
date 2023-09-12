const family = [
{ name: "Jack", age: 26 },
{ name: "Jill", age: 22 },
{ name: "James", age: 5 },
{ name: "Jenny", age: 2 }
];
//Q1. Write a promise function which will display all the name with age > 26
function findAge(family){
    let promise=new Promise(function(resolve,reject){
        const data=family.filter((element)=> element.age<26);
        if(data.length===0){
            reject("NO RECORDS FOUND");
        }
        else{
            
            resolve(data);
        }
    },1000);
    promise.then((result)=>{
        console.log("Q1 output");
        console.log(result);
    })
    .catch((error)=>{
        console.log("Q1 output");
        console.log(error);
    })
}
findAge(family);

//Q2. Write a promise function which will display all the records starting with name 'J' or any character passed as parameter.
function findSpecificStartChar(family,ch){
    let promise=new Promise(function(resolve,reject){
        const temp=family.filter((element)=>element.name.startsWith(ch));
        if(temp.length===0){
            reject("NO RECORD FOUND");
        }
        else{
            resolve(temp);
        }
    },1000);
    promise.then((result)=>{
        console.log("Q2 output");
        console.log(result);
    })
    .catch((error)=>{
        console.log("Q2 output");
        console.log(error);
    });
}
findSpecificStartChar(family,'J');

//Q3. Write a promise function which will display all the records ending with name 'nny' or any character passed as parameter.
function findSpecificEndChar(family,ch){
    let promise = new Promise(function(resolve,reject){
        const temp=family.filter((element)=>element.name.endsWith(ch));
        if(temp.length===0){
            reject("NO RECORD FOUND");
        }
        else{
            resolve(temp);
        }
    },1000);
    promise.then((result)=>{
        console.log("Q3 output");
        console.log(result);
    })
    .catch((error)=>{
        console.log("Q3 output");
        console.log(error);
    });
}
findSpecificEndChar(family,'nny');

//Q4. Write a promise function which will display all the records with only name.
function findAllNames(family){
    let promise= new Promise(function(resolve,reject){
        const temp = family.map((element)=>{
            return element.name;
        });
        if(temp.length===0){
            reject("NO RECORD FOUND");
        } 
        else{
            resolve(temp);
        }
    },1000);
    promise.then((result)=>{
        console.log("Q4 output");
        console.log(result);
    })
    .catch((error)=>{
        console.log("Q4 output");
        console.log(error);
    });
}
findAllNames(family);

//Q5. Write a promise function which will display all the records in sorting according to names.
function Sorting(family,order){
    let promise = new Promise(function(resolve,reject){
        if(order==='ASC'){
            resolve(family.sort((a,b)=>a.name.localeCompare(b.name)));
        }else if(order==='DESC'){
            resolve(family.sort((a,b)=>b.name.localeCompare(a.name)));
        }else{
            reject("NO RECORDS FOUND");
        }
    },1000);
    promise.then((result)=>{
        console.log("Q5 output");
        console.log(result);
    })
    .catch((error)=>{
        console.log("Q5 output");
        console.log(error);
    });
}
Sorting(family,'DESC');