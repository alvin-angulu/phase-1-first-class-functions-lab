// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
    const returnFirstTwoDrivers = function(){
      const array1 = [array[0],array[1]];
      return array1;
    };
    return returnFirstTwoDrivers();
}

const returnLastTwoDrivers = function (DiversNames){
    const returnLastTwoDriversInner = ()=>{
       
        const LastTwoDivers = [DiversNames[DiversNames.length-2], DiversNames[DiversNames.length-1]];
        return LastTwoDivers;
    };
    return returnLastTwoDriversInner();
}

   
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  const createFareMultiplier = (fare) =>{
       return  function createFareMultiplierInner (integer){
         return integer*fare;
            }
        
  }

  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);
   

  function selectDifferentDrivers(arrayOfDrivers, fn){
     return fn(arrayOfDrivers);
  }



