// var seattle = [minCookie, maxCookie, avgCookie];

var store1 = {
    name: 'Seattle' ,
    minCustomer: 23 ,
    maxCustomer: 65 ,
    avgCookie: 6.3 ,
    // generateCustomers: randomNumber,
    hourOpenPerDay: 14 ,

    randomHourNumber: function() {  
        //max - min
        //math rondom times difference plus min
        // var difference = (this.maxCustomer - this.minCustomer)
        // var customers = (this.maxCustomer - this.minCustomer);
        // var  = (Math.random() * customers + 1) + this.minCustomer;
        // differenceTimesFloor =  Math.floor(differenceTimes);
        // console.log(differenceTimesFloor);

        customerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
        console.log(customerPerHour);
        cookiePerHour = Math.floor(customerPerHour * this.avgCookie);
        console.log(cookiePerHour);
        var cookiesAndCustomerPerHour = [customerPerHour, cookiePerHour];
        console.log(cookiesAndCustomerPerHour);

        return cookiesAndCustomerPerHour
    },

    saleTracker: function(){ 
        var totalCookieIt = 0;
        var totalcookie = [];
        var totalCustomerIt = 0;
        var totalCustomer = [];


        for (var i = 0; i < this.hourOpenPerDay; i++){
                var cookiesAndCustomerPerHour = this.randomHourNumber();
                totalCustomer.push(cookiesAndCustomerPerHour[0]);
                totalCustomerIt = totalCustomerIt + cookiesAndCustomerPerHour[0];
                totalcookie.push(cookiesAndCustomerPerHour[1]);
                totalCookieIt = (totalCookieIt + cookiesAndCustomerPerHour[1]);

            }

            // customerVar = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer); 

    }  
}
store1.saleTracker();

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