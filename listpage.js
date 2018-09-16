document.body.innerHTML = "hi"
var myData = localStorage['dataToPass'];
localStorage.removeItem('dataToPass'); // Clear the localStorage
var requests = myData[0];
var offers = myData[1];
//alert('firstData: ' + firstData + '\nsecondData: ' + secondData);
console.log(requests)
console.log(offers)