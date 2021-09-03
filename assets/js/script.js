 $(document).ready(function(){
     $("input[type='number']").inputSpinner()

     $(document).on("input", "input", function() {
        this.value = this.value.replace(/\D/g,'');
    });
    
    $("input").attr({
        "max" : 3,
     });

    $('#reset').click(function() {
        location.reload();
    });

    $("#energycount").text(3);
    $("#roundcount").text(1);
    
   
    var i = 1;
    var n;
    $('#endturn').click(function(event) {
        event.preventDefault();
        i = i+1;
        const energy = $("#energycount").text();
        const energyused = $("#energyused").val();
        var newenergy = energy - energyused + 2;
       
        console.log(newenergy);
        if(newenergy >= 10){
            newenergy = 10;
        }
        $("#energycount").text(newenergy);
        $("#roundcount").text(" "+ i);
        $("#energyused").val(0);
        $("input").attr({
            "max" : newenergy,
            
         });
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

});