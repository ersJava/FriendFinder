var path = require("path");

var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;

        var bestMatch = {
            name:'',
            photo:'',
            pointDiff: Infinity,
        };
         
        for(var i = 0; i < friends.length; i++){
            var diff = 0;
            var currentFriend = friends[i];
            console.log("Current Friend: ", currentFriend)
            for(var j = 0; j < currentFriend.scores.length; j++){
               diff += Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j])); 
               
            }
            console.log("DIFF: ", diff)

            if(diff <= bestMatch.pointDiff){
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.pointDiff = diff
            }   
        }

        friends.push(newFriend);

        res.json(bestMatch);
    });
}

