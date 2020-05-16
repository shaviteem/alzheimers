$(function() {

$('.button').hover(function() {
	//on
	$(this).css('background-color','#0e8dda');
}, function() {
	//off
	$(this).css('background-color','#0764B2');
});

$('.contact_field').each(function() {
	var default_value = this.value;
	
	$(this).focus(function() { 
		if(this.value == default_value) {
			this.value = '';
			$(this).css({	
				'color': 'black',
				'background-color': '#eff4a4'
			});
		}
	});
	$(this).blur(function() {
		if(this.value == '') {
			this.value = default_value;
			$(this).css({			
				'color': 'gray',
				'background-color': 'white'
			});
		}
	});
});

$('#email').focus(function() {
	$(this).css({
	'direction': 'ltr',
	'text-align': 'left'
	});
}).blur(function() {	
	$(this).css({
	'direction': 'rtl',
	'text-align': 'right'
	});
});//#email


// CONTACT US PAGE
// ON BLUR COMMANDS

// variables

var nameOrig = $('#first_name').val();
	phoneOrig = $('#cell_phone').val();
	extraSpace = 40; // extra padding
	spanId1 = 'nameE'; // first name
	spanId2 = 'phoneE'; // phone

// name check

$('#first_name').blur(function() {
	var $item = $(this);
		position = $item.position();
		right = '<span id="' + spanId1 + '" class="right feedback"><img src="images/check.png" class="checkImg" alt="נכון" /></span>';
		wrong = '<span id="' + spanId1 + '" class="wrong feedback">יש למלא את השם הפרטי</span>';
		
	if ( ($item.val() == nameOrig) || ($item.val() == "") && ($.browser.msie && $.browser.version.substr(0,1)>6) ) {
		
		$(wrong).appendTo('#contact_form').hide().fadeIn("normal").css({
			'top' : position.top + 'px'
		});
		
		$item.addClass('textError');
	} else {
	
		$(right).appendTo('#contact_form').hide().fadeIn("normal").css({
			'top' : position.top + (extraSpace*0.1) + 'px'
		});	
	}
	
}).focus(function() {
	var $spanId = $('#' + spanId1);
	$spanId.remove();
	$(this).removeClass('textError');
});


//email check
$('#cell_phone').blur(function() {
	var $item = $(this);
		position = $item.position();
		
	var right = '<span id="' + spanId2 + '" class="right feedback"><img src="images/check.png" class="checkImg" alt="נכון" /></span>';
	var wrong = '<span id="' + spanId2 + '" class="wrong feedback">יש למלא את מספר הטלפון</span>';
		
	if ( ($item.val() == phoneOrig) || ($item.val() == "") || ($item.val().length < 5) ) {
		
		$(wrong).appendTo('#contact_form').hide().fadeIn("normal").css({
			'top' : position.top + 'px'
		});
		
		$item.addClass('textError');
	} else {
	
		$(right).appendTo('#contact_form').hide().fadeIn("normal").css({
			'top' : position.top + (extraSpace*0.1) + 'px'
		});	
	}
	
}).focus(function() {
	var $spanId = $('#' + spanId2);
	$spanId.remove();
	$(this).removeClass('textError');
});

// ON SUBMIT COMMANDS

// name check

$('#form-submit').click(function() {
	
	var $item1 = $('#first_name');
		$item2 = $('#cell_phone');
		position1 = $item1.position();
		position2 = $item2.position();
		$errors = false;
		wrong1 = '<span id="' + spanId1 + '" class="wrong feedback">יש למלא את השם הפרטי</span>';
		wrong2 = '<span id="' + spanId2 + '" class="wrong feedback">יש למלא את מספר הטלפון</span>';
		
	if ( ($item1.val() == nameOrig) || ($item1.val() == "") ) { //name check
		
		$(wrong1).appendTo('#contact_form').hide().fadeIn("normal").css({
			'top' : position1.top + 'px'
		});
		
		$item1.addClass('textError');
		var $errors = true;
	}

	if ( ($item2.val() == phoneOrig) || ($item2.val() == "") || ($item2.val().length < 5) ) { //phone check
		
		$(wrong2).appendTo('#contact_form').hide().fadeIn("normal").css({
			'top' : position2.top + 'px'
		});
		
		$item2.addClass('textError');
		var $errors = true;
	}	
	
	if ( !($errors) ) {
		//do nothing, no errors
	} else {
		return false;
	}
});

$('input').focus(function() {
	$errors = "";
});


/* READ MORE *
 * HOME PAGE */
$('.read_more').next().hide();

 
$('.read_more').click(function() {
	$(this).next().fadeTo("slow",1, function() {
		//this.style.removeAttribute('filter');
		$(this).removeAttr('filter');  // for IE (removes blurriness)!
	});
	$(this).remove();
	return false;
});

});