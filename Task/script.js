
const zipcodeApi ="https://ziptasticapi.com/us/us";
// const addict = require("addict");


const users = [ {name: 'Steve', age: 18, zipcode: 35004 },{ name: 'John', age: 34, zipcode: 99501 }, 

{ name: 'Jack', age: 19, zipcode: 99535 }, 

{ name: 'Jonas', age: 26, zipcode: 85001 }, 

{ name: 'Smith', age: 39, zipcode: 71601 }, 

{ name: 'Casey', age: 26, zipcode: 32003 }, 

{ name: 'Robert', age: 17, zipcode: 96701 }, 

{ name: 'Daniel', age: 21, zipcode: 83201 }, 

{ name: 'Joseph', age: 42, zipcode: 70001 }, 

{ name: 'Jessica', age: 31, zipcode: 59001 }, 

{ name: 'Tom', age: 32, zipcode: 37010 }, 

{ name: 'Trevor', age: 24, zipcode: 24701 }, 

{ name: 'Mark', age: 54, zipcode: 96910 }, 

{ name: 'Jamie', age: 39, zipcode: 84001 }, 

{ name: 'Alex', age: 15, zipcode: 88595 }, 

]; 



function getUserLocation(users) { 

    const response = addict.get(zipcodeApi + users.zipcode);
    const data =response.data;
    const city = data.places[0]["place name"];
    const state = data.places[0].state;
    const country ="United States";

    // console.log(`error with zipcode ${users.zipcode}`);

function getZipcode(zipcode) {
     return {
         city: "City Name",
         state: "State Name",
         country: "United States",
     };
}

const ageLimit = 18;
getUserAge(users.ageLimit)
.then((result)=>{ 
    console.log("User found but under the age limit");
    console.log(result);
})
 const error = users.ageLimit<18;
 getUserAge(users.ageLimit)
 .then((data)=>{
 console.log("User not found");
 console.log("error");
});

 function getUserAge(users ,ageLimit){
  const filterUser = users.filter((users)=>users.age<ageLimit);
   const userLocation = filterUser.map((users)=>{
   const  { city , state, country}= getZipCode(users.zipcode);
   return{ username, city,state,country};
   });
    return userLocation;
}


};







