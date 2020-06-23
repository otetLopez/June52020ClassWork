$(document).ready(function() {
    $("#brownbear").hide();
    $("#brownbear").click(function() {
        $(this).hide();
        $("#conyrabbit").show(); 
        $("h2").show();           
    });
    $("#conyrabbit").click(function() {
        $("#brownbear").show();
        $("#conyrabbit").hide();
        $("h2").hide();
    });
}); 