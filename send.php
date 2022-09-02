<?php

$recepient = "nice-dev@list.ru";
$subject = "Заявка с сайта";
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: Заявка с сайта <test.ru>\r\n";


$name = trim($_POST['name']);
$email = trim($_POST['email']);
$message = trim($_POST['message']);


$text = "Имя: $name <br/> E-mail: $email <br/> Сообщение: $message";

mail($recepient, $subject, $text, $headers);
