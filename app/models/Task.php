<?php require_once "../config.php"; ?>
<?php 
    class Task {
        
        private $task_id;
        private $title;
        private $description;
        private $due_date;
        private $priority;
        private $status;
        private $user_id;
        private $project_id;

        function __construct($task_id, $title, $description, $due_date, $priority, $status, $user_id, $project_id){
            $this->task_id = $task_id;
            $this->title = $title;
            $this->description = $description;
            $this->due_date = $due_date;
            $this->priority = $priority;
            $this->status = $status;
            $this->user_id = $user_id;
            $this->project_id = $project_id;
        }

        function createTask() {
            global $pdo;

            try {
                $stmt = $pdo->prepare("INSERT INTO `tasks` (`title`, `description`, `due_date`, `user_id`, `project_id`) 
                                       VALUES (?, ?, ?, ?, ?)");
                $stmt->execute([$this->title, $this->description, $this->due_date, $this->user_id, $this->project_id]);
    
                $taskId = $pdo->lastInsertId();

                $response = [
                    'task_id' => $taskId,
                    'status' => 'success',
                    'message' => 'Project created successfully'
                ];

                echo json_encode($response);
                
            } catch (PDOException $e) {
                return $e->getMessage();
            }
        }

        function updateTask() {
      
        }

        function deleteTask() {
           
        }

        function getTaskById() {
            
        }

        function getAllTasks($projectId) {
            global $pdo;
    
            try {
                $stmt = $pdo->prepare("SELECT * FROM `tasks` WHERE `project_id` = ?");
                $stmt->execute([$projectId]);
                $tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
                return $tasks;

            } catch (PDOException $e) {
                // Handle the exception or return an error message
                return [];
            }
        }
    }

?>