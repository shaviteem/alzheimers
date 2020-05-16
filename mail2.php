<?

$to = 'contact@alzheimerinisrael.com';
$subject = 'Contact from AlzeheimerInIsrael.com';
$message = 'From: ' . "\n\n" . 
'Name: ' . $_REQUEST['name'] . "\n\n" . 
'Phone Number: ' . $_REQUEST['phone'];

//convert to utf-8
$message = mb_convert_encoding( $message , 'ISO-8859-8' , 'utf-8' );

//variables
$phone = $_REQUEST['phone'];
$email = $_REQUEST['phone'];
$name = $_REQUEST['name'];

$headers = 'From: ' . $email . "\r\n" .
            'Reply-To: ' . $email . "\r\n" .
          'X-Mailer: PHP/' . phpversion();
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/plain; charset=ISO-8859-8";		  
	
	
if ( (!($phone)) || (!($name)) ) {
	echo "Please go back and fill out the required fields";
	
} else {
	
	mail ($to, $subject, $message, $headers);
	header("Location: thankyou.html");
}

?>
