

$(document).ready(function () {
    $("button").click(function() { 
        var b1 = document.getElementById('b1');
        var b2 = document.getElementById('b2');
        var b3 = document.getElementById('b3');
        if($(this).attr('id') !== undefined) {
            console.log("id not empty")
            var id = $(this).attr('id');
            if(id === "b1") {
                console.log("b1")
                document.getElementById('pText').innerHTML = "You pressed Button 1";
            } 
            else if (id === "b2") {
                console.log("b2")
                document.getElementById('pText').innerHTML = "You pressed Button 2";
            }
            else {
                console.log("b3")
                document.getElementById('pText').innerHTML = "You pressed Button 3";
        
            }
        }
    });
});  



