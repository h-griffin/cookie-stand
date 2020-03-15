'use strict';
var allStores = [];
var time = [
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
    this.totalCookies = this.randomHourNumber(); ;
    allCookieStores.push(this);
    this.writeRow();
}
    

Store.prototype.randomHourNumber = function() { 
    var cookieData = [];

    for (var hours = 0; hours < this.hoursOpen; hours++){
     //round down / random 0-1 / max-min range / +min to ensure it meets lowest value

        var customerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);

        var cookiePerHour = Math.floor(customerPerHour * this.avgCookieSalesPerCustomer);
        cookieData.push(cookiePerHour);   
    }
    return cookieData;
}

Store.prototype.writeRow = function(){
    var table = document.getElementById('table');
    var cookieSum = 0;

    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.textContent = this.name;
    row.appendChild(cell);

    for (var hour = 0; hour < this.hoursOpen; hour++) {
        cell = document.createElement('td');
        cell.textContent = this.totalCookies[hour];
        row.appendChild(cell);
        cookieSum = cookieSum + this.totalCookies[1];
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
    cell.textContent = 'Hourly Totals';
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
      hourlytotal = hourlytotal + allCookieStores[store].totalCookies[hour];
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

function writeHeader(){
    var headerEl = document.getElementById('table');
    var headerRow = document.createElement('tr');
    var headerCell = document.createElement('td');
    headerCell.textContent = 'Times';
    headerRow.appendChild(headerCell);
    headerEl.appendChild(headerRow);

    for(var i = 0; i < time.length; i++){
        headerCell = document.createElement('td');
        headerCell.textContent = time[i];
        headerRow.appendChild(headerCell);
    }
    headerCell = document.createElement('td');
    headerCell.textContent = 'Daily Totals';
    headerRow.appendChild(headerCell);
    headerEl.appendChild(headerRow);
}

writeHeader();

var seattleLocation = new Store('Seattle', 23, 65, 6.3); 
var tokyoLocation = new Store('Tokyo', 3, 24, 1.2); 
var dubaiLocation = new Store('Dubai', 11, 38, 3.7);
var parisLocation = new Store('Paris', 20, 38, 2.3);
var limaLocation = new Store('Lima', 2, 16, 4.6);

writeBottomRow();


var locations = [seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation];

