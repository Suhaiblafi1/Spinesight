<?php
// SpineSight contact form handler — delivers to hello@spinesight.health
// Works on GoDaddy / cPanel hosting (PHP mail).

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$to      = 'hello@spinesight.health';
$name    = trim(strip_tags($_POST['name'] ?? ''));
$email   = trim(filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL));
$org     = trim(strip_tags($_POST['organization'] ?? ''));
$topic   = trim(strip_tags($_POST['topic'] ?? ''));
$country = trim(strip_tags($_POST['country'] ?? ''));
$orgtype = trim(strip_tags($_POST['org_type'] ?? ''));
$volume  = trim(strip_tags($_POST['volume'] ?? ''));
$pacs    = trim(strip_tags($_POST['pacs'] ?? ''));
$timing  = trim(strip_tags($_POST['timeline'] ?? ''));
$message = trim(strip_tags($_POST['message'] ?? ''));

if ($name === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Invalid input']);
    exit;
}

$subject = '[SpineSight Website] ' . ($topic !== '' ? $topic : 'New inquiry') . ' — ' . $name;

$body  = "New message from the SpineSight website\n";
$body .= "----------------------------------------\n";
$body .= "Name:             $name\n";
$body .= "Email:            $email\n";
$body .= "Organization:     $org\n";
$body .= "Topic:            $topic\n";
$body .= "Country:          $country\n";
$body .= "Organization type:$orgtype\n";
$body .= "Monthly volume:   $volume\n";
$body .= "Current PACS/RIS: $pacs\n";
$body .= "Pilot timeline:   $timing\n";
$body .= "----------------------------------------\n\n";
$body .= $message . "\n";

$headers  = "From: SpineSight Website <no-reply@spinesight.health>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail server error']);
}
