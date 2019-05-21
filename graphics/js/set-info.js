$(() => {
    loadSmashControl();

    function loadSmashControl(){
        const bundle = 'nodecg-smashcontrol';
        var bracket = $('.bracket-location');
        var player1tag = $('.player1-tag');
        var p1score = $('.player1-score');
        var player2tag = $('.player2-tag');
        var p2score = $('.player2-score');
        var p1ch = $('.player1-character');
        var p2ch = $('.player2-character');


        var player1score = nodecg.Replicant("player1Score", bundle);
        var player2score = nodecg.Replicant("player2Score", bundle);
        NodeCG.waitForReplicants(player1score, player2score).then(() => {
            player1score.on('change', (newVal) => {
            if (newVal){
                p1score.html(player1score.value);
            }
        });
        player2score.on('change', (newVal) => {
            if (newVal){
                p2score.html(player2score.value);
            }
        })
        });


        var setInfo = nodecg.Replicant("playerDataArray", bundle);
        setInfo.on('change', (newVal, oldVal) => {
            if (newVal)
            updateFields(newVal);
        });

        function updateFields(setData){
            bracket.html(setData.bracketlocation);
            player1tag.html(setData.player1tag);
            player2tag.html(setData.player2tag);
            var linkToImage = "../../../nodecg-smashcontrol/dashboard/images/" + setData.game + "/"
            p1ch.children().attr("src", (linkToImage + setData.player1character + ".png"));
            p2ch.children().attr("src", (linkToImage + setData.player2character + ".png"));
        }
    }
});
