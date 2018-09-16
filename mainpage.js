function ResourceInfo(resource, quantity, location) {
    this.resource = resource;
    this.quantity = quantity;
    this.location = location;
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

        var resourceinfo = new ResourceInfo(resource, quantity, location);
        requests.push(resourceinfo)
        console.log(requests)
    })
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("offerbutton").addEventListener("click", function() {
        var resourcetext = document.getElementById("resourcetext");
        var resource = resourcetext.value;
        var quantitytext = document.getElementById("quantitytext");
        var quantity = quantitytext.value;
        var locationtext = document.getElementById("locationtext");
        var location = locationtext.value;

        var resourceinfo = new ResourceInfo(resource, quantity, location);
        offers.push(resourceinfo)
        console.log(offers)
    })
});
