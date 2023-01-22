/*
===========================================
; Title: index.js
; Author: Professor Krasso
; Date: 01 13 2023
; Modified by: Patrick Cuauro
; Description: NPM dependencies work.
===========================================
*/
//this line is for importing the functions from
//team-manages.js
const teamManager = require("./team-manager");
//displays the returned data from team manager
//from getTeams function
// the keyword \n works as a break line
console.log("-- DISPLAY TEAMS --\n")
//the variable equipo was used to avoid confusion
//with names
for (const equipo of teamManager.getTeams()) {
    teamManager.displayTeam(equipo);
}
//displays the teams that matches
//the values from the declared team names
//in this case Barcelona & Juventus
console.log("-- DISPLAY TEAM --\n");
let team1 = "Barcelona";
let team2 = "Juventus";
let equipo = teamManager.getTeam(team1);

teamManager.displayTeam(equipo);
equipo = teamManager.getTeam(team2);
console.log("-- DISPLAY TEAM --\n");
teamManager.displayTeam(equipo);