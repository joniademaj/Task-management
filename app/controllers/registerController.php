<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
// Include the necessary files and dependencies
require_once '../models/User.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL);
ini_set('display_errors', 1);


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $requestData = json_decode(file_get_contents('php://input'), true);

    // Validate the registration data (e.g., check email format, password length, etc.)
    // ...

    // If the data is valid, create a new User instance and register the user
    $email = $requestData['email'];
    $name = $requestData['name'];
    $password = $requestData['password'];

    $user = new User(null, $name, $password, $email);

    // Call the register() method of the User class to perform the registration
    $user->register();

    header('Content-Type: application/json');
} else {
    $response = [
        'status' => 'error',
        'message' => 'Invalid request method'
    ];
    $jsonResponse = json_encode($response);

    // Set the appropriate headers
    echo $jsonResponse;
}

?>