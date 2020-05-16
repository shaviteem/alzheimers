<?

$to = 'contact@alzheimerinisrael.com';
$subject = 'Contact from AlzeheimerInIsrael.com';
$message = 'From: ' . "\n\n" . 
'First name: ' . $_REQUEST['first_name'] . "\n\n" . 
'Last name: ' . $_REQUEST['last_name'] . "\n\n" . 
'Phone: ' . $_REQUEST['cell_phone'] . "\n\n" . 
'Email Address: ' . $_REQUEST['email'] . "\n\n" . 
'Comments: ' . "\n\n" . $_REQUEST['comments'];

//convert to utf-8
$message = mb_convert_encoding( $message , 'ISO-8859-8' , 'utf-8' );

//variables
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$name = $_REQUEST['first_name'];

$headers = 'From: ' . $email . "\r\n" .
            'Reply-To: ' . $email . "\r\n" .
          'X-Mailer: PHP/' . phpversion();
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/plain; charset=ISO-8859-8";

if ( !($name || $phone) ) {

	echo 'Please go back and fill out the required fields';
} else {
	
	mail ($to, $subject, $message, $headers);
	header("Location: thankyou.html");
}
?>

