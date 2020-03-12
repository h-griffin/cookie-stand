'use strict';
// var allStores = 0

// var store1 = {
//     name: 'Seattle' ,
//     minCustomer: 23 ,
//     maxCustomer: 65 ,
//     avgCookie: 6.3 ,
//     totalCookies: [] ,
//     totalCustomer: [] ,
//     cookieSum : 0 ,
//      hours : ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm', '4pm', '5pm','6pm','7pm'] ,

//     randomHourNumber: function() {  
//         for (var i = 0; i < this.hours.length; i++){
//          //round down / random 0-1 / max-min range / +min to ensure it meets lowest value
    
//         var customerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//         console.log(customerPerHour);

//         var cookiePerHour = Math.floor(customerPerHour * this.avgCookie);
//         console.log(cookiePerHour)
//         this.totalCookies.push(cookiePerHour);

//         //incrament total cookies
//         this.cookieSum = this.cookieSum + cookiePerHour;
//         }

//         console.log(this.totalCookies);

//         console.log(this.name);
//         console.log(this.maxCustomer);
//         console.log(this.totalCookies);
//     },

//     //write all cookie data to DOM
//     writeData: function() {
//         //parent / where is this element going in HTML? 
//         var tableEl= document.getElementById('table');


//         //child / create another element to append(add/attatch) to listEl
//         var rowEl = document.createElement('tr');
        
//         //city name / cookie value per hour in total Cookies / sum of all cookies
//         //city name
//         var locationCell = document.createElement('td');
//         locationCell.textContent = this.name;
//         rowEl.appendChild(locationCell);


//         //cookies per hour
//         this.randomHourNumber();
//         for (var i = 0; i < this.totalCookies.length; i++){
//             var hourEl = document.createElement('td');
            
//             hourEl.textContent = this.totalCookies[i];
//             rowEl.appendChild(hourEl);
//         }
//         //sum of all cookies / create and append a new the bottom of sales list
//         var sumEl = document.createElement('td');
//         sumEl.textContent = 'total : ' + this.cookieSum;
//         rowEl.appendChild(sumEl);
//         tableEl.appendChild(rowEl);
//     }
// }
// allStores.push(store1); 
// store1.randomHourNumber();
// store1.status();
// store1.writeData();

function Store(name, minCustomer, maxCustomer, avgCookie){
    
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookie = avgCookie;
    this.totalCookies = [] ;
    this.cookieSum = 0 ;
    var hours = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm', 
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm'];

    this.generate = function() {
        var array = randomHourNumber(this.minCustomer, this.maxCustomer, this.avgCookie);
        this.totalCookies = array[0];
        this.cookieSum = array [1];

    }
    
}
var seattleLocation = new Store('seatlle', 23, 65, 6.3); 
var tokyoLocation = new Store('tokyo', 3, 24, 1.2); 
var dubaiLocation = new Store('dubai', 3, 24, 1.2);
var parisLocation = new Store('paris', 20, 38, 3.7);
var limaLocation = new Store('lima', 2, 16, 4.6);

var locations = [seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation];

function randomHourNumber(min, max, avg) { 
    var sum = 0;
    var cookiesPerHour = [];
    for (var i = 0; i < hours.length; i++){
     //round down / random 0-1 / max-min range / +min to ensure it meets lowest value

    var customerPerHour = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(customerPerHour);

    var cookiePerHour = Math.floor(customerPerHour * avg);
    console.log(cookiePerHour)
    cookiesPerHour.push(cookiePerHour);
        
    //incrament total cookies
    sum = sum + cookiePerHour;
    console.log(cookiePerHour);
    console.log(sum);
    // console.log(this.maxCustomer);
    // console.log(this.totalCookies);

   
    }
    return [cookiesPerHour, sum];

}

function writeData() {
        //parent / where is this element going in HTML? 
    var tableEl= document.getElementById('table');
    
    // var sum = 0;
    for (var i = 0; i < locations.length; i++){
        locations[i].generate();
                //child / create another element to append(add/attatch) to listEl
        var rowEl = document.createElement('tr');
        var locationCell = document.createElement('td');
        locationCell.textContent = locations[i].name;
        rowEl.appendChild(locationCell);
        console.log(locations[i].totalCookies);
        for(var cell = 0; i < locations[i].totalCookies; i++) {
            var hourCell = document.createElement('td');
            hourCell.textContent = locations[i].totalCookies[cell];
            rowEl.appendChild(hourCell);
        }

        var timeCell = document.createElement('td');
        timeCell.textContent = locations[i].cookieSum;
        rowEl.appendChild(timeCell);

        tableEl.appendChild(rowEl);
    }
    }


    writeData();


    
    //city name / cookie value per hour in total Cookies / sum of all cookies
    //city name



    //cookies per hour
//     this.randomHourNumber();
//     for (var i = 0; i < this.totalCookies.length; i++){
//         var hourEl = document.createElement('td');
        
//         hourEl.textContent = this.totalCookies[i];
//         rowEl.appendChild(hourEl);
//     }
//     //sum of all cookies / create and append a new the bottom of sales list
//     var sumEl = document.createElement('td');
//     sumEl.textContent = 'total : ' + this.cookieSum;
//     rowEl.appendChild(sumEl);
//     tableEl.appendChild(rowEl);
// }
