var data = new Array();
 const addCustmer=(custmerName,custmerId,custmerBalance)=>{
    // if(!data.length==0){
    //     data.forEach((item)=>{
    //         if(item.id==custmerId){
    //             console.log('there is a custmer with this id ya 7raaamy');
    //         }else{
    //             // console.log(data);
    //             data.push({
    //                 custmerName:custmeName,
    //                 custmerId:custmerId,
    //                 custmerBalance:custmerBalance
    //             });
    //         } 
    //      });
         
    // }else{
        data.push({
            custmerName:custmerName,
            custmerId:custmerId,
            custmerBalance:custmerBalance
        });
        // } 
 }

 addCustmer('amgad',51510188,30000);
 addCustmer('lool',51510188,30000);
 addCustmer('lama',51510189,30000);
//  addCustmer('donia',51510187,40000);
//  addCustmer('dalia',51510187,40000);
//  addCustmer('dalia',51510187,40000);

////////function to print the data
 var printData=()=>{
    data.forEach(item=>console.log(item))
}

printData(data);


///////function to return the index of a customer on array
 const findbyId=(id)=>{
    return data.findIndex(data=>data.custmerId===id);
 }

 findbyId(51510188);



 ///////function to delete the custmer by id
 const deleteCustmerById=(id)=>{
    var indexOfCustmer=findbyId(id);
    data.splice(indexOfCustmer,1);
 }

 deleteCustmerById(51510188);
 
 ///
 printData();


 //////////function to update the custmer balance

 const updateCustmerBalance=(id,newBalance)=>{
    var indexOfCustmer=findbyId(id);
    data[indexOfCustmer].custmerBalance=newBalance; 
    var temp= data[indexOfCustmer]
    console.log(`the custmer ${temp.custmerId} has a new balance of${temp.custmerBalance}`);
 }

updateCustmerBalance(51510188,500);

printData();