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

        function __construct($task_id, $title, $description, $due_date, $priority, $status, $user_id){
            $this->task_id = $task_id;
            $this->title = $title;
            $this->description = $description;
            $this->due_date = $due_date;
            $this->priority = $priority;
            $this->status = $status;
            $this->user_id = $user_id;
        }

        function createTask() {
            // Retrieve task data from the request
            $newTaskData = json_decode(file_get_contents('php://input'), true);

            // Validate and sanitize the input data
            // ...

            // Generate a new task ID (if not provided in the request)
            $taskId = $newTaskData['task_id'] ?? uniqid();

            // Create a new task object
            $newTask = new Task(
                $taskId,
                $newTaskData['title'],
                $newTaskData['description'],
                $newTaskData['due_date'],
                $newTaskData['priority'],
                $newTaskData['status'],
                $newTaskData['user_id']
            );

            // Save the new task to the database
            $stmt = $this->pdo->prepare("INSERT INTO task (task_id, title, description, due_date, priority, status, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)");
            $stmt->execute([$taskId, $newTaskData['title'], $newTaskData['description'], $newTaskData['due_date'], $newTaskData['priority'], $newTaskData['status'], $newTaskData['user_id']]);

            // Return the newly created task
            echo json_encode($newTask);
        }

        function updateTask() {
            // Retrieve task ID and updated task data from the request
            $taskId = $_GET['task_id'];
            $updatedTaskData = json_decode(file_get_contents('php://input'), true);

            // Validate and sanitize the input data
            // ...

            // Update the task object with the updated data
            $existingTask = new Task(
                $taskId,
                $updatedTaskData['title'],
                $updatedTaskData['description'],
                $updatedTaskData['due_date'],
                $updatedTaskData['priority'],
                $updatedTaskData['status'],
                $updatedTaskData['user_id']
            );

            // Update the task in the database
            $stmt = $this->pdo->prepare("UPDATE task SET title = ?, description = ?, due_date = ?, priority = ?, status = ?, user_id = ? WHERE task_id = ?");
            $stmt->execute([$updatedTaskData['title'], $updatedTaskData['description'], $updatedTaskData['due_date'], $updatedTaskData['priority'], $updatedTaskData['status'], $updatedTaskData['user_id'], $taskId]);

            // Return the updated task
            echo json_encode($existingTask);
   
        }

        function deleteTask() {
            $taskId = $_GET['task_id'];

            // Delete the task from the database
            $stmt = $this->pdo->prepare("DELETE FROM task WHERE task_id = ?");
            $stmt->execute([$taskId]);

            // Return a success message
            echo json_encode(['message' => 'Task deleted successfully']);
            }

        function getTaskById() {
            // Retrieve task ID from the request
            $taskId = $_GET['task_id'];

            // Retrieve the task from the database
            $stmt = $this->pdo->prepare("SELECT * FROM task WHERE task_id = ?");
            $stmt->execute([$taskId]);

            $task = $stmt->fetch(PDO::FETCH_ASSOC);

            // Return the task
            echo json_encode($task);
        }

        function getAllTasks() {
            // Retrieve all tasks from the database
            $stmt = $this->pdo->prepare("SELECT * FROM task");
            $stmt->execute();
            
            $tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            // Return all tasks
            echo json_encode($tasks);
        }
    }

?>
   

