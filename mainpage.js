document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("offerbutton").addEventListener("click", function() {
        var resourcetext = document.getElementById("resourcetext");
        var resource = resourcetext.value;
        var quantitytext = document.getElementById("quantitytext");
        var quantity = quantitytext.value;
        var locationtext = document.getElementById("locationtext");
        location = locationtext.value;
    })
});
