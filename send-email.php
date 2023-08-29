<?php
    //Import PHPMailer classes into the global namespace
    //These must be at the top of your script, not inside a function

    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Add the allowed HTTP methods
    header("Access-Control-Allow-Headers: Content-Type");
    header('Content-Type: application/json; charset=utf-8');

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    //Load Composer's autoloader
    require 'vendor/autoload.php';


    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $message = $data[0];
    $emailTo = $data[1];
    $message = json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);
    $message = json_decode($message);

    $htmlResponse = "<table style='border-collapse: collapse; border: 1px solid black;'>";
    // Start of the HTML table

    // Generating the table header row with keys from the first object
    $htmlResponse .= "<tr>";
    foreach ($message[0] as $key => $value) {
        $htmlResponse .= "<th style='border: 1px solid black; padding: 8px;'>" . $key . "</th>";
    }
    $htmlResponse .= "</tr>";

    // Generating rows with values from all objects
    foreach ($message as $object) {
        $htmlResponse .= "<tr>";
        foreach ($object as $value) {
            $htmlResponse .= "<td style='border: 1px solid black; padding: 8px;'>" . $value . "</td>";
        }
        $htmlResponse .= "</tr>";
    }

    $htmlResponse .= "</table>"; // End of the HTML table


    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username = "learniverseonline@gmail.com";
        $mail->Password = "nbswsjdolovntrvj";                         //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom("learniverseonline@gmail.com");
        $mail->addAddress($emailTo);

        //Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Carmelite Alumni Data';
        $mail->Body    = $htmlResponse;
        $mail->AltBody = $htmlResponse;

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

?>