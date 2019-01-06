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
        

        friends.push(newFriend);

        var bestMatch = {
            name:'',
            photo:'',
            pointDiff:Infinity
        };

        // Did work with my tutor and did a step by step walk-through video on youtube for the 
        // solution to calculate the scores so I could understand the logic
         
        for(var i = 0; i < friends.length; i++){
            var diff = 0;
            for(var j = 0; j < newFriend.scores.length; j++){
               diff += Math.abs(newFriend.scores[j] - friends[i].scores[j]); 
                //parseInt()
            }

            friendListScore.push({
                name: friends[i].name,
                photo: friends[i].photo,
                diff: diff
            });
        }
        var bestMatch = friends.sort(function(a,b){
            return a.diff - b.diff;
        })[0];

        res.json(newFriend);
    });
}

