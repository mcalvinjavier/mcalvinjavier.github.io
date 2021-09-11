$(document).ready(function(){
    $("input[type='number']").inputSpinner()

    $(document).on("input", "input", function() {
       this.value = this.value.replace(/\D/g,'');
   });
   
   $("#energyused").attr({
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
       const energygained = $("#energygained").val();
       const energydestroyed = $("#energydestroyed").val();
       
       var newenergy = energy - energyused - energydestroyed + 2;
       var newenergytotal = Number(newenergy)  + Number(energygained);
       if(newenergy >= 10){
           newenergy = 10;
       }
       $("#energycount").text(newenergytotal);
       $("#roundcount").text("  "+ i);
       $("#energyused").val(0);
       $("#energygained").val(0);
       $("#energydestroyed").val(0);
       $("#energyused").attr({
           "max" : newenergytotal,
           
        });
   });
   $(function () {
       $('[data-toggle="tooltip"]').tooltip()
     })

});