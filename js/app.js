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

var formEl = document.getElementById('cookie-form');

function handleForm(formInput) {
    var location = formInput.target.location.value;
    var minCustomer = Number(formInput.target.minCustomer.value);
    var maxCustomer = Number(formInput.target.maxCustomer.value);
    var avgCustomer = Number(formInput.target.avgCustomer.value);

    new Store(location, minCustomer, maxCustomer, avgCustomer);
    console.log(allCookieStores);
    renderTable();
}

formEl.addEventListener('submit', handleForm);

new Store('Seattle', 3, 7, 5);
new Store('Lima', 5, 10, 2.4);
new Store('Tokyo', 2, 16, 8.4);
new Store('London', 7, 9, 6.4);

function renderTable(){
    var table = document.getElementById('table');
    table.innerHTML = null;

    for(var store = 0; store < allCookieStores.length; store++){
        allCookieStores[store].writeRow();
    }
    writeBottomRow();
}
renderTable();