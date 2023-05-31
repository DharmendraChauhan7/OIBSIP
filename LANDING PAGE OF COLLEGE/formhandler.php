<?php

  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $email_from = 'tech@yourwebsite.com';

  $email_subject = 'grerdddv';

  $email_body = "user name: $name.\n".
  "user email: $visitor_email.\n".
  "subject: $sunject.\n".
  "user message: $message";

  $to = 'chauhandharmendra7982@gmail.com';

  $header = " from: $email_from \r\n";
  $header .= " reply-to: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);

  header("location: contact.html");
?>