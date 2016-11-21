/*function func(){
	
	alert("Page Loaded");
}

$(document).ready(func);
*/


function removeAllfunc(){
	$("#list").empty();
}



function removeLastfunc(){
	$("li:last").remove();
}

	
	$(document).ready(function(){
		
		$("#clearAll").click(removeAllfunc);
		
	});
	
	$(document).ready(function(){
		
		$("#clearLast").click(removeLastfunc);
		
	});
	
	
	
	
	
	function addfunc(){
		
		
		var name =  $("#name").val();
		var date= $("#date").val();
		if(name==""|| date==""){
			//alert("Enter both Name and Date");
			$("#error").empty();
			$("#error").css("color", "red");
			$("#error").append("Enter both Name and Start Date");
		}else{
			$("#error").empty();
			var newStudent = "<li>"+name +", "+date + "</li>";
			//alert("In else:" +  newStudent);
			$("#list").append(newStudent);
			$("#error").css("color", "green");
			$("#error").append("Student added Successfully!");
			$("#name").val("");
			$("#date").val("");
            $("#endDate").val("");			
		}
		
		
	}
	
	$(document).ready(function(){
		
		$("#form").keypress(function(event){
			
			
			var keycode = (event.keyCode ? event.keyCode : event.which);
           if(keycode == '13'){
            addfunc();
    }
		});
		
		
		
	});
	
	$(document).ready(function(){
		
		$("#add").click(addfunc);
		
	});
	
	
	
	
		
		$(function() {
		$("#date").datepicker({
		changeMonth: true,
		changeYear: true,
		onClose: function( selectedDate ) {
        $( "#endDate" ).datepicker( "option", "minDate", selectedDate );
      }
		}
		
		);
		
		
		
		
	
	

		
		$("#endDate").datepicker({
			
		changeMonth: true,
		changeYear: true,
		onClose: function( selectedDate ) {
        $( "#date" ).datepicker( "option", "maxDate", selectedDate );
      }
			
			
			
			
			
		});
		
		});
		
		

	
	
	
	
	
	
	