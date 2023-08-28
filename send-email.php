<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header('Content-Type: application/json; charset=utf-8');

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

use function PHPSTORM_META\type;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';

    session_start();

    require("connect.php");

    $body = file_get_contents("php://input");
    $requestData = json_decode($body, true);
    $data = $requestData[0];
    $emailTo = $requestData[1];

    // $data = implode(', ', $data);

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "";
    $mail->Password = "";
    $mail->SMTPSecure = "ssl";
    $mail->Port = 465;

    $mail->setFrom("");
    $mail->addAddress("bryanba02@yahoo.com");
    $mail->isHTML(true);
    $mail->Subject = 'Carmelite Alumni Data';
    $mail->Body = "ok chief";

    $mail->send();

    if ($mail) {
        echo "Email sent successfully";
    } else {
        echo "Email sending failed";
    };

    mysqli_close($connection);

?>