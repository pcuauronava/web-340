/*
===========================================
; Title: team-manager.js
; Author: Professor Krasso
; Date: 01 15 2023
; Modified by: Patrick Cuauro
; Description: NPM team-manager dependency file.
===========================================
*/
const Team = require("./team")
//auto corrected by vs code
// import Team from "./team";

let teams = [
    //inside the array is not used let
    Barcelona = new Team("Barcelona", "L-avi", 11),
    Juventus = new Team("Juventus", "Jay the zebra", 11),
    Arsenal = new Team("Arsenal", "Gunnersaurus", 11),
    ManchesterUnited = new Team("ManchesterUnited", "Fred the Red", 11),
    Napoli = new Team("Napoli", "OCiuccio", 11)
]
//this function returns the whole teams array
function getTeams() {
    return teams;
}
//this function returns the element that matches
//the name of the value provided in the case the name
function getTeam(name) {
    return teams.find(element => {
        //looks for the argument name
        //to be the identical from
        //the object Team
        if (element.name === name) {
            return element;
        }
    });
}
module.exports = { getTeam, getTeams, displayTeam }
function displayTeam(equipo) {
    console.log("Name:" + equipo.name + "\n" + "Mascot:" + equipo.mascot + "\n" + "Player Count:" + equipo.playerCount + "\n");
}