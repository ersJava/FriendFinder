var path = require("path");

var friends = [
    {
        name: "Beth",
        photolink: "www.photoofme.com",
        scores:[
            "1",
            "2",
            "1",
            "2",
            "1",
            "2",
            "1",
            "2",
            "1",
            "2"
        ],
        
    },
  ];

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;
        friends.push(newFriend);

        console.log(newFriend);
        console.log('friends!: ' ,friends)

        var bestMatch = {
            name:'',
            photo:'',
            pointDiff:Infinity

        };
        // bestMatch.name ='Beth'

        // loop through api data and calulat lowest score and set object to that friend
        for(var i = 0; i < friends.length; i++){
            var diff = 0;
            for(var j = 0; j < newFriend.scores.length; j++){
                console.log("J: ", newFriend.scores[j])

                // Math.abs()
                //parseInt()
            }
        }

       


        // Math for closest match




        res.json(newFriend);
    });
}

