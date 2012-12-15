var zurff = zurff || {};

var songsList = Backbone.Collection.extend({
    model : zurff.songItem,


    unselectAllSongs : function(){
        zurff.songsList.each(function(songItem){
            songItem.unselect();
        });
    },

    selectSong : function(songItem){
        zurff.songsList.unselectAllSongs();
        songItem.select();
    },

    unselectSong : function(songItem){
        songItem.unselect();
    },

    pauseCurrentPlayingSong : function(){
        var currentPlayingSong = zurff.songsList.getCurrentPlayingSong();
        if(currentPlayingSong){
            currentPlayingSong.pause();
        }
    },

    playSelectedSong : function(){
        zurff.songsList.pauseCurrentPlayingSong();

        var songToBePlayed = zurff.songsList.getCurrentSelectedSong();
        if(songToBePlayed){
            songToBePlayed.play();
        }
        else{
            if(zurff.songsList.length>0){
                zurff.songsList.first().play();
                console.log("Nothing was selected, so the first songItem was played!")
            }
            else{
                console.log("No songItem has been added. Can't play anything.")
            }
        }
    },

    getCurrentSelectedSong:function () {
        var selectedSongs = this.filter(function (songItem) {
            return songItem.get('isSelected');
        });

        if (selectedSongs.length == 0) {
            return null;
        }
        else if (selectedSongs.length == 1) {
            return selectedSongs[0];
        }
        else {
            console.log("SOMETHING'S WRONG : getCurrentSelectedSong function is returning the following ==> ");
            console.dir(selectedSongs);
            return null;
        }
    },

    getCurrentPlayingSong:function () {
        var playingSongs = this.filter(function (songItem) {
            return songItem.get('isPlaying');
        });

        if (playingSongs.length == 0) {
            return null;
        }
        else if (playingSongs.length == 1) {
            return playingSongs[0];
        }
        else {
            console.log("SOMETHING'S WRONG : getCurrentPlayingSong function is returning the following ==> ");
            console.dir(playingSongs);
            return null;
        }
    },

    nextOrder: function() {
        if ( !this.length ) {
            return 1;
        }
        return this.last().get('order') + 1;
    },

    // songsList are sorted by their original insertion order.
    comparator: function( songItem ) {
        return songItem.get('order');
    }

});

zurff.songsList = new songsList();