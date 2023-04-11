// Input/Output
// [input] integer array team1
// The power levels of the players in the first team. Teams have less than 100 players and each power level is less than 100.

// [input] integer array team2
// Array of the same length as team1, the power levels of the players of the second team.

// [output] an integer
// The maximum number of points the first team can get.

// Example
// For team1 = [3,2,4] and team2 = [1,2,3], the output should be 3.

// If you don't rearrange the players in the first team, it will get 2 points, since 3 > 1, 2 = 2 and 4 > 3.

// However, if you rearrange the order of the players to [2, 3, 4], the first team will get 3 points.

function maximizePoints(team1, team2) {
    //coding and coding..
    //console.log({team1},{team2});
    const newTeam1 = team1.sort((a,b)=>{
        return a-b
    })
    const newTeam2 = team2.sort((a,b)=>{
        return a-b
    })
    console.log({newTeam1},{newTeam2});
    let aux = 0;
    let i = 0;
    for(i=0;i<newTeam1.length;i++){
        if(newTeam1[i]>newTeam2[0]){
            newTeam1.splice(i,1);
            newTeam2.splice(0,1);
            i--
            aux++
        } 
    }
    console.log({newTeam1},{newTeam2},{aux},i-team1.length);
    return aux
}

maximizePoints([7, 19, 23, 18, 38, 37, 38, 40],[21, 12, 1, 0, 13, 38, 25, 49])