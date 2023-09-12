const data = [
    {name: "Butters", age: 3,type: "dog" },
    {name: "Lizzy", age: 6, type: "dog"} ,
    {name: "Red", age: 1, type: "cat" },
    {name: "Joey",age: 3, type: "dog" }
    ];
//Q1. Write a promise function which will display all records with type ==='dog'
function findAllDogs(data){
    
    let promise=new Promise(function(resolve,reject){
        
        const temp= data.filter((element)=> element.type==='dog');//check condition
        if(temp.length===0){
            reject("NO RECORDS FOUND");
        }
        else{
            
            resolve(temp);
        }
    },1000)
    promise.then((result)=>{
        console.log("Q1 output");
        console.log(result);
    })
    .catch((error)=>{
        console.log("Q1 output");
        console.log(error);
    })
}
findAllDogs(data);

//Q2. Write a promise function which will display all the records starting with name 'B' or any character passed as parameter.
function findSpecificStartChar(data,ch){
    
    let promise=new Promise(function(resolve,reject){
        
        const temp= data.filter((element)=> element.name.startsWith(ch));//check condition

        if(temp.length===0){
            reject("NO RECORDS FOUND");
        }
        else{
            
            resolve(temp);
        }
    },1000)
    promise.then((result)=>{
        console.log("Q2 output");
        console.log(result);
    })
    .catch((error)=>{
        console.log("Q2 output");
        console.log(error);
    })
}
findSpecificStartChar(data,'B');

//Q3. Write a promise function which will display sum of all ages.
function findSumAges(data){
    let promise= new Promise(function(resolve,reject){
        const sum= data.reduce((total,cur)=>{
            return total+cur.age;
        },0)
        if(sum.length===0){
            reject("NO RECORDS FOUND");
        }
        else{
            
            resolve(sum);
        }
    },1000)
    promise.then((result)=>{
        console.log("Q3 output");
        console.log(result);
    })
    .catch((error)=>{
        console.log("Q3 output");
        console.log(error);
    })
    
}
findSumAges(data);

//Q4. Write a promise function which will display all the records with only name & ages.
function findAll(data){
    let promise= new Promise(function(resolve,reject){
        const rec= data.map((element)=>{
            return "Name: "+element.name+", age: "+element.age;
        },0)
        if(rec.length===0){
            reject("NO RECORDS FOUND");
        }
        else{
           
            resolve(rec);
        }
    },1000)
    promise.then((result)=>{
        console.log("Q4 output");
        console.log(result);
    })
    .catch((error)=>{
        console.log("Q4 output");
        console.log(error);
    })
    

}
findAll(data);

//Q5. Write a function to display sum of all ages of records having type as dog.
function findAllDogsSumOfAges(data){
    
    let promise=new Promise(function(resolve,reject){
        const temp= data.filter((element)=> element.type==='dog');
        if(temp.length===0){
            reject("NO RECORDS FOUND");
        }
        else{
            
            resolve(temp);
        }
    },1000)
    promise.then((result)=>{
        let promise1= new Promise(function(resolve,reject){
            const sum= result.reduce((total,cur)=>{
                return total+cur.age;
            },0)
            if(sum.length===0){
                reject("NO RECORDS FOUND");
            }
            else{
              
                resolve(sum);
            }
        },1000)
        promise1.then((result)=>{
            console.log("Q5 output");
            console.log(result);
        })
        .catch((error)=>{
            console.log("Q5 output");
            console.log(error);
        })
        
    })
    .catch((error)=>{
        console.log("Q5 output");
        console.log(error);
    })
}
findAllDogsSumOfAges(data);

//Q6. Write a promise function which will display all the records in sorting according to names.
function Sorting(data,order){
    let promise= new Promise(function(resolve,reject){
        if(order==='ASC'){
            
            resolve(data.sort((a,b)=>a.name.localeCompare(b.name)));
        }else if(order==='DESC'){
            resolve(data.sort((a,b)=>b.name.localeCompare(a.name)));
        }else{
            reject("NO RECORDS FOUND");
        }
    },1000)
    promise.then((result)=>{
        console.log("Q6 output");
        console.log(result);
    })
    .catch((error)=>{
        console.log("Q6 output");
        console.log(error);
    })
}
Sorting(data,'DESC');
