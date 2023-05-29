<?php session_start(); ?>
<?php require_once "../config.php"; ?>
<?php 
    class User {

        private $user_id;
        private $username;
        private $password;
        private $email;
        public static $loggedIn = false;
        public static $userId;
        // private $userId;
        

        function __construct($user_id, $username, $password, $email){
            $this->user_id = $user_id;
            $this->username = $username;
            $this->password = $password;
            $this->email = $email;
        }

        function getUserId(){
            return $this->user_id;
        }

        function setUserId($user_id){
            $this->user_id = $user_id;
        }

        function getUsername(){
            return $this->username;
        }

        function setUsername($username){
            $this->username = $username;
        }

        function getPassword(){
            return $this->password;
        }

        function setPassword($password){
            $this->password = $password;
        }

        function getEmail(){
            return $this->email;
        }

        function setEmail($email){
            $this->email = $email;
        }
        
        function register() {
            global $pdo;
            if (empty($this->username) || empty($this->password) || empty($this->email)) {
                $response = [
                    'status' => 'error',
                    'message' => 'Please fill in all fields.'
                ];
                echo json_encode($response);
                return;
            }
            
            // Validate email format
            if (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
                $response = [
                    'status' => 'error',
                    'message' => 'Invalid email address.'
                ];
                echo json_encode($response);
                return;
            }
            
            
            $hashedPassword = password_hash($this->password, PASSWORD_DEFAULT);
            
            // Assuming you have a PDO database connection object named $pdo
            $sql = "INSERT INTO `users` (`username`, `password`, `email`) VALUES (?, ?, ?)";
            $statement = $pdo->prepare($sql);
            
            if ($statement->execute([$this->username, $hashedPassword, $this->email])) {
                $response = [
                    'status' => 'success',
                    'message' => 'User created successfully'
                ];
                echo json_encode($response);
            } else {
                $response = [
                    'status' => 'error',
                    'message' => 'Error inserting data'
                ];
                echo json_encode($response);
            }
        }

        function login() {
            global $pdo;

            $sql = "SELECT * FROM `users` WHERE `email` = ?";
            $statement = $pdo->prepare($sql);
            $statement->execute([$this->email]);
            $user = $statement->fetch(PDO::FETCH_ASSOC);

            if (!$user || !password_verify($this->password, $user['password'])) {
              $response = [
                'status' => 'error',
                'message' => 'Invalid email or password',
              ];

              http_response_code(200); 
              echo json_encode($response);
            }

            if(!isset($_SESSION["user_id"]) && !isset($_SESSION["username"]) && !isset($_SESSION["logged_in"])){
                $_SESSION['user_id'] = $user['user_id'];
                $_SESSION['username'] = $user["username"];
                $_SESSION['logged_in'] = true;
                self::$loggedIn = $_SESSION["logged_in"];
                self::$userId = $_SESSION["user_id"];
            }  

            // Return success response
            $response = [
              'status' => 'success',
              'message' => 'Login successful',
            ];

            echo json_encode($response);
        }

        function __toString(){
            return $this->email . " - " . $this->password;
        }


        function getSessions() {
            printf("%d", isset($_SESSION["user_id"]));
            if (isset($_SESSION["user_id"])) {
                $userId = $_SESSION["user_id"];
                echo "User ID: " . $userId;
            }
        }

        static function userLoggedIn(){
            return self::$loggedIn;
        }

        static function userId(){
            return self::$userId;
        }
    }

?>