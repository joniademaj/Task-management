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
            // code...
        }

        function updateTask() {
            // code...
        }

        function deleteTask() {
            // code...
        }

        function getTaskById() {
            // code...
        }

        function getAllTasks() {
            // code...
        }
    }

?>