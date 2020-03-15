'use strict';
var allStores = [];

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
//         // for (var i = 0; i < this.hours.length; i++){
//          //round down / random 0-1 / max-min range / +min to ensure it meets lowest value
    
//         var customerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//         console.log(customerPerHour);

//         var cookiePerHour = Math.floor(customerPerHour * this.avgCookie);
//         console.log(cookiePerHour)

//         var cookiesAndCustomerPerHour = [customerPerHour, cookiePerHour];
//         console.log(cookiesAndCustomerPerHour);

//         // this.totalCookies.push(cookiePerHour);

//         //incrament total cookies
//         // this.cookieSum = this.cookieSum + cookiePerHour;
//         // }

//         console.log(this.totalCookies);

//         console.log(this.name);
//         console.log(this.maxCustomer);
//         console.log(this.totalCookies);

//         return cookiesAndCustomerPerHour
//     },

//     saleTracker: function(){
//         for(var i = 0; i < this.hours.length; i++){
//             var cookiesAndCustomerPerHour = this.randomHourNumber();
//             this.totalCookies.push(cookiesAndCustomerPerHour[1]);
//             this.cookieSum = (this.cookieSum + cookiesAndCustomerPerHour[1]);
//         }
//     },

//     status: function(){
//         console.log(this.totalCookies, this.cookieSum);
//     },

//     // write: writeData()
//     //write all cookie data to DOM
// writeData: function() {
//     //parent / where is this element going in HTML? 
//     var listEl= document.getElementById('list');

//     //child / create another element to append(add/attatch) to listEl
//     var itemEl = document.createElement('li');
    
//     //city name / cookie value per hour in total Cookies / sum of all cookies
//     //city name
//     var nameEl = document.createElement('p');
//     nameEl.textContent = this.name;
//     itemEl.appendChild(nameEl);
//     listEl.appendChild(itemEl);

//     var salesList = document.createElement('ul');
//     listEl.appendChild(salesList);

//     //cookies per hour
//     for (var i = 0; i < this.totalCookies.length; i++){
//         var hourEl = document.createElement('li');
//         salesList.appendChild(hourEl);
//         hourEl.textContent = this.totalCookies[i];
//     }
//     //sum of all cookies / create and append a new the bottom of sales list
//     var sumEl = document.createElement('li');
//     sumEl.textContent = 'total : ' + this.cookieSum;
//     salesList.appendChild(sumEl);
// }

// }

// store1.saleTracker();
// // store1.write();

// allStores.push(store1); 
// store1.randomHourNumber();
// store1.status();
// store1.writeData();

var allCookieStores = [];
var hours = 14;

function Store(name, minCustomer, maxCustomer, avgCookie){
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookieSalesPerCustomer = avgCookie;
    this.hoursOpen = hours;
    this.totalCookies = [] ;
    allCookieStores.push(this);

    this.randomHourNumber();
}
    

Store.prototype.randomHourNumber = function() { 
    this.totalCookies = [];

    for (var hours = 0; hours < this.hoursOpen; hours++){
     //round down / random 0-1 / max-min range / +min to ensure it meets lowest value

        var customerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
        console.log(customerPerHour);

        var cookiePerHour = Math.floor(customerPerHour * this.avgCookieSalesPerCustomer);
        console.log(cookiePerHour)
        cookiePerHour.push(cookiePerHour);   
    }
    console.log(this.totalCookies);

}

Store.prototype.writeRow = function(){
    var table = document.getElementById('table');
    var cookieSum = 0;

    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.textContent = this.name;
    row.appendChild(cell);

    for (var hour = 0; hour < this.cookiePerHour.length; hour++) {
        cell = document.createElement('td');
        cell.textContent = this.cookiePerHour[hour];
        row.appendChild(cell);
        cookieSum = this.cookiePerHour[hour];
    }
    cell = document.createElement('td');
    cell.textContent = cookieSum;
    row.appendChild(cell);
    table.appendChild(row);
};

 function writeBottomRow(){
     var table = document.getElementById('table');
     var row = document.createElement('tr');
     var cell = document.createElement('td');
  cell.textContent = 'Totals';
  row.appendChild(cell);
  // loop through allStores
  var allStoresHourlySum = 0;

  // nested loops
  // loops over the number of hours that a store is open
  // for each store add up their hourly total
  for (var hour = 0; hour < hours; hour++) {
    var hourlytotal = 0;
    cell = document.createElement('td');
    for (var store = 0; store < allCookieStores.length; store++) {
      hourlytotal = hourlytotal + allCookieStores[store].cookieHours[hour];
    }
    allStoresHourlySum += hourlytotal

    // appending hourly total cell
    cell.textContent = hourlytotal;
    row.appendChild(cell);
  }

  cell = document.createElement('td');
  cell.textContent = allStoresHourlySum;
  row.appendChild(cell);
  table.appendChild(row);
}


var seattleLocation = new Store('seatlle', 23, 65, 6.3); 
var tokyoLocation = new Store('tokyo', 3, 24, 1.2); 
var dubaiLocation = new Store('dubai', 3, 24, 1.2);
var parisLocation = new Store('paris', 20, 38, 3.7);
var limaLocation = new Store('lima', 2, 16, 4.6);

var locations = [seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation];
// function writeData() {
//         //parent / where is this element going in HTML? 
//     var tableEl= document.getElementById('table');
    
//     // var sum = 0;
//     for (var i = 0; i < locations.length; i++){
//         locations[i].generate();
//                 //child / create another element to append(add/attatch) to listEl
//         var rowEl = document.createElement('tr');
//         var locationCell = document.createElement('td');
//         locationCell.textContent = locations[i].name;
//         rowEl.appendChild(locationCell);
//         console.log(locations[i].totalCookies);
//         for(var cell = 0; i < locations[i].totalCookies; i++) {
//             var hourCell = document.createElement('td');
//             hourCell.textContent = locations[i].totalCookies[cell];
//             rowEl.appendChild(hourCell);
//         }

//         var timeCell = document.createElement('td');
//         timeCell.textContent = locations[i].cookieSum;
//         rowEl.appendChild(timeCell);

//         tableEl.appendChild(rowEl);
//     }
//     }


//     writeData();


    
//     //city name / cookie value per hour in total Cookies / sum of all cookies
//     //city name



//     //cookies per hour
// //     this.randomHourNumber();
// //     for (var i = 0; i < this.totalCookies.length; i++){
// //         var hourEl = document.createElement('td');
        
// //         hourEl.textContent = this.totalCookies[i];
// //         rowEl.appendChild(hourEl);
// //     }
// //     //sum of all cookies / create and append a new the bottom of sales list
// //     var sumEl = document.createElement('td');
// //     sumEl.textContent = 'total : ' + this.cookieSum;
// //     rowEl.appendChild(sumEl);
// //     tableEl.appendChild(rowEl);
// // }


// function writeData() {
//     //parent / where is this element going in HTML? 
//     var tableEl= document.getElementById('table');


//     //child / create another element to append(add/attatch) to listEl
//     var rowEl = document.createElement('tr');
    
//     //city name / cookie value per hour in total Cookies / sum of all cookies
//     //city name
//     var locationCell = document.createElement('td');
//     locationCell.textContent = this.name;
//     rowEl.appendChild(locationCell);


//     //cookies per hour
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
// // }  var hours = [
//     '6am',
//     '7am',
//     '8am',
//     '9am',
//     '10am',
//     '11am',
//     '12pm', 
//     '1pm',
//     '2pm',
//     '3pm',
//     '4pm',
//     '5pm',
//     '6pm',
//     '7pm'];