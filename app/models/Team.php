<?php 
    class Team{
        
        private $team_id;
        private $team_name;
        private $team_lead_id;

        function __construct($team_id, $team_name, $team_lead_id){
            $this->team_id = $team_id;
            $this->team_name = $team_name;
            $this->team_lead_id = $team_lead_id;
        }

        function createTeam() {
            // code...
        }

        function updateTeam() {
            // code...
        }

        function deleteTeam() {
            // code...
        }

        function getTeamById() {
            // code...
        }

        function getAllTeams() {
            // code...
        }
    }

?>