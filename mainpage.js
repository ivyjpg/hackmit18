function ResourceInfo(resource, quantity, location, contact) {
    this.resource = resource;
    this.quantity = quantity;
    this.location = location;
    this.contact = contact;
}

var requests = []
var offers = []

var dataToPass = [requests, offers]
localStorage.setItem('dataToPass', dataToPass);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("requestbutton").addEventListener("click", function() {
        var resourcetext = document.getElementById("resourcetext");
        var resource = resourcetext.value;
        var quantitytext = document.getElementById("quantitytext");
        var quantity = quantitytext.value;
        var locationtext = document.getElementById("locationtext");
        var location = locationtext.value;
        var contacttext = document.getElementById("contacttext");
        var contact = contacttext.value;

        var resourceinfo = new ResourceInfo(resource, quantity, location, contact);
        requests.push(resourceinfo)
        console.log(requests)
        alert("Your request has been posted. Please check back regularly to see if there are any matching offers.");
    })
});

/*function getUserName() {
    var nameField = document.getElementById('nameField').value;
    var result = document.getElementById('result');
    
    if (nameField.length < 3) {
        result.textContent = 'Username must contain at least 3 characters';
        //alert('Username must contain at least 3 characters');
    } else {
        result.textContent = 'Your username is: ' + nameField;
        //alert(nameField);
    }
    }

var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserName, false); 
*/

var showrequest = document.getElementById('showrequest');
var result1 = document.getElementById('result1');
showrequest.addEventListener('click', getRequests, false);

function getRequests() {
    a = "";
    for (i=0; i<requests.length; i++){
        req1=("Resource: " + requests[i].resource);
        req2=("Quantity: " + requests[i].quantity);
        req3=("Location: " + requests[i].location);
        req4=("Contact: " + requests[i].contact);
        a = a +("\nRequest "+(i+1) +": \n"+req1 + "\n" + req2 + "\n" + req3 + "\n"+ req4 + "\n");
    }

    alert('Here are the requests:' +"\n"+ a);
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("offerbutton").addEventListener("click", function() {
        var resourcetext = document.getElementById("resourcetext");
        var resource = resourcetext.value;
        var quantitytext = document.getElementById("quantitytext");
        var quantity = quantitytext.value;
        var locationtext = document.getElementById("locationtext");
        var location = locationtext.value;
        var contacttext = document.getElementById("contacttext");
        var contact = contacttext.value;

        var resourceinfo = new ResourceInfo(resource, quantity, location, contact);
        offers.push(resourceinfo)
        console.log(offers)
        alert("Thank you! Your offer has been posted.");
    })
});


var showoffer = document.getElementById('showoffer');
var result2 = document.getElementById('result2');
showoffer.addEventListener('click', getOffers, false);

function getOffers() {
    b = "";
    dummy2 = [['sleeping bag', 'for 1 adult', '60 Rode Ln, New Orleans, LA']]
    for (i=0; i<offers.length; i++){
        off1=("Resource: " + (offers[i].resource));
        off2=("Quantity: " + (offers[i].quantity));
        off3=("Location: " + (offers[i].location));
        off4=("Contact: " + (offers[i].contact));
        b = b +("\nOffer "+(i+1) +": \n"+off1 + "\n" + off2 + "\n" + off3 + "\n"+off4+"\n");
    }
    alert('Here are the offers:' +"\n"+ b);
};