<?php
    //  if (isset($_POST['submit'])) {
        $name = "test";
        $email = "test";
        $message = "test";

      // Set your email address where you want to receive emails. 
       $to = 'mclvnjvr02@gmail.com';
       $subject = 'Contact Request From Website';
       $headers = "From: ".$name." <".$email."> \r\n";
       $send_email = mail($to,$subject,$message,$headers);

       echo ($send_email) ? 'success' : 'error';

  // }
  ?>