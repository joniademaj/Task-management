<?php 
    class TaskAssignment{

        private $assignment_id;
        private $task_id;
        private $user_id;

        function __construct($assignment_id, $task_id, $user_id){
            $this->assignment_id = $assignment_id;
            $this->task_id = $task_id;
            $this->user_id = $user_id;
        }

        function assignTask() {
            // code...
        }

        function unassignTask() {
            // code...
        }
    }

?>