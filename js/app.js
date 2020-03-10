'use strict';
var allStores = [];

var store1 = {
    name: 'Seattle' ,
    minCustomer: 23 ,
    maxCustomer: 65 ,
    avgCookie: 6.3 ,
    // hourOpenPerDay: 14 ,
    hours = ['8am', '9am', '10am'] ,
    totalCookies: [] ,
    totalCustomer: [] ,
    cookieSum = 0 ,

    randomHourNumber: function() {  
        //round down / random 0-1 / max-min range / +min to ensure it meets lowest value
        var customerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
        console.log(customerPerHour);
        var cookiePerHour = Math.floor(customerPerHour * this.avgCookie);
        console.log(cookiePerHour);

        //array
        var cookiesAndCustomerPerHour = [customerPerHour, cookiePerHour];
        console.log(cookiesAndCustomerPerHour);

        return cookiesAndCustomerPerHour
    },

    // average and total customers & cookies per hour open
    saleTracker: function(){ 
        // var cookieSum = 0;
        // var totalcookie = [];
        // var totalCustomerIt = 0;
        // var totalCustomer = [];


        for (var i = 0; i < this.hours.length; i++){
                var cookiesAndCustomerPerHour = this.randomHourNumber();
            
                //do we need to track this?
                // this.totalCustomer.push(cookiesAndCustomerPerHour[0]);
                // totalCustomerIt = totalCustomerIt + cookiesAndCustomerPerHour[0];

                //add to array
                this.totalcookie.push(cookiesAndCustomerPerHour[1]);
                cookieSum = (cookieSum + cookiesAndCustomerPerHour[1]);
            }

            // customerVar = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer); 

    } , 
    status: function () {
        console.log(this.totalCookies, this.totalCustomer);
    } ,
    //write all cookie data to DOM
    write: function() {
        //parent / where is this element going in HTML? 
        var listEl= document.getElementById('list');

        //child / create another element to append(add/attatch) to listEl
        var itemEl = document.createElement('li');
        
        //display
        //city name / cookie value per hour in total Cookies / sum of all cookies
        
        //city name
        var nameEl = document.createElement('p');
        nameEl.textContent = this.name;
        itemEl.appendChild(nameEl);
        listEl.appendChild(listEl);

        //
        var salesList = document.createElement('ul');
        salesList.appendChild(salesList);

        //cookie value per hour in totalCookies
        for (var i = 0; i < this.totalCookies.length; i++){
            var hourEl = document.createElement('li');
        
            hourEl.textContent = this.totalCookies[i];
            hourEl.appendChild(hourEl);
            listEl.appendChild(salesList);
        }
        //sum of all cookies
        // create and append a new the bottom of sales list
        var sumEl = document.createElement('li');
        sumEl.textContent = 'total : ' + this.cookieSum;
        salesList.appendChild(sumEl);
    }
}
allStores.push(store1); 
store1.saleTracker();
store1.status();
store1.write();


// var store2 = {
//     name: 'Tokyo',
//     minCustomer: 3,
//     maxCustomer: 24,
//     avgCookie: 1.2,
//     generateCustomers: randomNumber,
// }
// randomNumber(3, 24);

// var store3 = {
//     name: 'Dubai',
//     minCustomer: 11,
//     maxCustomer: 38,
//     avgCookie: 3.7,
//     generateCustomers: randomNumber,
// }
// randomNumber(11, 38);

// var store4 = {
//     name: 'Paris',
//     minCustomer: 20,
//     maxCustomer: 38,
//     avgCookie: 2.3,
//     generateCustomers: randomNumber,
// }
// randomNumber()

// var store5 = {
//     name: 'Lima',
//     minCustomer: 2,
//     maxCustomer: 16,
//     avgCookie: 4.6,
//     generateCustomers: randomNumber,

//     // randomNumber(2, 16);
// }

// // console.log(store1.generateCustomers());

// //min-max range 
// // function randomNumber() {
// //     /// calculate nuber between 23 - 65
// //     return Math.floor(Math.random() * ( + 1));
// // }

// function randomNumber(min, max) {  
//     return Math.random() * (max - min) + min; 

// }  
// // document.write("Random Number between 1 and 5: ")  
//   randomNumber(23, 65);