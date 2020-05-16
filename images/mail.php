<?

$to = 'shavitamit@gmail.com';
$subject = 'Contact from AlzeheimerInIsrael.com';
$message = 'From: ' . "\n\n" . 'First name: ' . $_REQUEST['first_name'] . "\n\n" . 'Last name: ' . $_REQUEST['last_name'] . "\n\n" . 'Who is sick: ' . $_REQUEST['who_is_sick'] . "\n\n" . 'Cell phone: ' . $_REQUEST['cell_phone'] . "\n\n" . 'Home phone: ' . $_REQUEST['home_phone'] . "\n\n" . 'Address: ' . $_REQUEST['address'] . "\n\n" . 'Email Address: ' . $_REQUEST['email'] . "\n\n" . 'Comments: ' . "\n\n" . $_REQUEST['comments'];
$email = $_REQUEST['email'];
$headers = 'From: ' . $email . "\r\n" .
            'Reply-To: ' . $email . "\r\n" .
          'X-Mailer: PHP/' . phpversion();
 
mail ($to, $subject, $message, $headers);
header("Location: thankyou.html");

?>
