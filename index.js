// Code your solution in this file!
//returns the first two drivers

const drivers = ["Salah", "Mojo" ,"Rashy", "moha"];

const returnFirstTwoDrivers = drivers =>{
    return drivers.slice(0,2);
}
const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers);

//returns the last two numbers

const returnLastTwoDrivers = drivers => {
    return drivers.slice(-2);
}
const lastTwoDrivers = returnLastTwoDrivers(drivers);
 console.log(lastTwoDrivers);
 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 // takes an integer and quadruples it

 const fare = 200;
function createFareMultiplier(integer){
    return function(fare){
        return fare * integer;
    }
 }
 const fareQuadrupled = createFareMultiplier(4);
 const quadrupledFare = fareQuadrupled(fare);
 console.log(quadrupledFare);

 //fare doubled

 const fareDoubler = createFareMultiplier(2);
 const newFare = 100;
 const doubledFare = fareDoubler(newFare);
 console.log(doubledFare);
 
 //tripled fare

 const fareTripler = createFareMultiplier(3);
 const newFareTripled = 150;
 const tripledFare = newFareTripled(newFareTripled);
 console.log(tripledFare);
function selectDifferentDrivers(drivers, driversSelected) {
    return driversSelected(drivers);
  };
  selectDifferentDrivers(drivers, returnFirstTwoDrivers);
  selectDifferentDrivers(drivers,  returnLastTwoDrivers);


