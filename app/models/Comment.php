<?php 
    class Comment {

        private $comment_id;
        private $content;
        private $task_id;
        private $user_id;
        private $created_at;

        function __construct($comment_id, $content, $task_id, $user_id, $created_at){
            $this->comment_id = $comment_id;
            $this->content = $content;
            $this->task_id = $task_id;
            $this->user_id = $user_id;
            $this->created_at = $created_at;
        }

        function createComment() {
            // code...
        }

        function updateComment() {
            // code...
        }

        function deleteComment() {
            // code...
        }

        function getCommentById() {
            // code...
        }

        function getAllComments() {
            // code...
        }
    }

?>