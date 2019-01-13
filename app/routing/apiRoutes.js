var path = require("path");

var friends = [
    {
        name: "Beth",
        photolink: "www.photoofme.com",
        scores:[
            "4",
            "4",
            "3",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "3"
        ], 
    },

    {
        name: "Milo",
        photolink: "www.iamapuppy.com",
        scores:[
            "5",
            "5",
            "5",
            "3",
            "4",
            "5",
            "2",
            "5",
            "3",
            "3"
        ], 
    },
  ];

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var friendListScore = [];


        var bestMatch = {
            name:'',
            photo:'',
            pointDiff:100000000000000
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

