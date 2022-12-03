// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}
const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
];
const createFareMultiplier = function(val) {
    return function (fare) {
        return val*fare;
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = function(drivers, selection) {
    return selection(drivers);
}