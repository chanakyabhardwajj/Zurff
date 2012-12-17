var zurff = zurff || {};

zurff.player = Backbone.Model.extend({
    defaults : {
        currentPlayingSong : null
    },

    getCurrentPlayingSong : function(){
        return this.get('currentPlayingSong');
    },

    play : function(songItem /*optional*/){
        if(songItem){
            songItem.toggleSelect(true);
            songItem.togglePlay(true);
            this.set({'currentPlayingSong':songItem});
            console.log('Now playing : ' + songItem.get('title'));
        }

        else {
            var preSelectedSong = zurff.player.getCurrentPlayingSong();
            if(preSelectedSong && !preSelectedSong.get('isPlaying')){
                songItem.togglePlay(true);
                console.log('Now playing the already paused song : ' + preSelectedSong.get('title'));
            }
            else{

            }

        }
    },

    pause : function(){
        var songToBePaused = zurff.player.getCurrentPlayingSong();
        if(songToBePaused){
            songItem.togglePlay(false);
            console.log('Now pausing : ' + songItem.get('title'));
        }
    },
    stop : function(){},
    playNext : function(){},
    playPrevious : function(){},

})