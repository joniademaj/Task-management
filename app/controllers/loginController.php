<?php 
ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once '../models/User.php';
// phpinfo();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if (!isset($_SESSION['user'])) {
  $user = new User(null, null, "", "");
}
// $loggedIn = false;
// $userId = null;
// $username = null;

if($_SERVER['REQUEST_METHOD'] == 'POST') {
  $requestData = json_decode(file_get_contents('php://input'), true);

  // Retrieve email and password from the request data
  // $user_id = $requestData["user_id"];
  $email = $requestData['email'];
  $password = $requestData['password'];

  // $user->setUserId($user_id);
  $user->setEmail($email);
  $user->setPassword($password);

  $user->login();
  
  // Check if login was successful
  if ($user->userLoggedIn()) {
    // Store the user object in the session
    $_SESSION['user'] = $user;
    $_SESSION['email'] = $email;

    // echo $_SESSION["user"];
    print_r($_SESSION["user"]);

  } else {
    $response = [
      'status' => 'error',
      'message' => 'Invalid email or password',
    ];
    echo json_encode($response);
  }

  // echo $_SESSION["user"]["user_id"];

}else if($_SERVER['REQUEST_METHOD'] == 'GET'){

  var_dump($_SESSION);

  echo $user->userId();

  if (isset($_SESSION['user'])) {
    $user = $_SESSION['user'];

    // $userId = $user->getUserId();
    // $email = $_SESSION['email'];
    // $username = $user->getUsername();

    // $response = [
    //   'user_id' => $userId,
    //   'email' => $email,
    //   'username' => $username,
    // ];

    // echo json_encode($response);
  } else {
    $response = [
      'status' => 'error',
      'message' => 'User not logged in',
    ];
    echo json_encode($response);
  } 

}else{
  $response = [
      'status' => 'error',  
      'message' => 'Invalid request method',
  ];
  echo json_encode($response);
}

// $request = $_SERVER['REQUEST_METHOD'];
// switch($request){
//   case "POST":
//     $requestData = json_decode(file_get_contents('php://input'), true);

//     // Retrieve email and password from the request data

//     $user = new User(null, null, $email, $password);

//     $email = $requestData['email'];
//     $password = $requestData['password'];

//     $user->setEmail($email);
//     $user->setPassword($password);

//     $user->login();
//   break;

//   case "GET":
//     global $user;
//     echo "<br />";
//     echo "Email: " . $user->getEmail();
//     echo "Password: " . $user->getPassword();
//     $user->getSessions();
//   break;

// }

?>