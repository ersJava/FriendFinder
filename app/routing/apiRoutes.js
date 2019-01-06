var path = require("path");

var friends = [
    {
        name: "Beth",
        photolink: "",
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
    

        // loop through api data and calulate lowest score and set object to that friend
        for(var i = 0; i < friends.length; i++){
            var diff = 0;
            for(var j = 0; j < newFriend.scores.length; j++){
               Math.abs()
                // Math.abs()
                //parseInt()
            }
        }


        res.json(newFriend);
    });
}

