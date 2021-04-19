<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';

$mail = new PHPMailer();
$mail->CharSet = "UTF-8";


$mail->SetFrom("info@newsab.se", $_POST["name"]);
$mail->AddReplyTo($_POST["mail"], $_POST["name"]);
$mail->AddAddress("info@newsab.se");	
$mail->Subject = "Mail från hemsidan";
$mail->WordWrap   = 80;
//$mail->MsgHTML($_POST["message"]);

$mail->Body = <<<EOT
Email: {$_POST['mail']}
Namn: {$_POST['name']}
Telefon: {$_POST['phone']} 
Meddelande: 
{$_POST['message']}
EOT;

if(is_array($_FILES)) {
	$mail->AddAttachment($_FILES['file']['tmp_name'],$_FILES['file']['name']); 
}

$mail->IsHTML(false);
if(!$mail->Send()) {
	echo "Problem in Sending Mail.";
} else {
	header('Location: ../'); //------- skickar man vidare 
	echo "Contact Mail Sent.";
}