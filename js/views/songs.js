var zurff = zurff || {};

var songListView = Backbone.View.extend({
    el: '#ZurffAudio',

    events: {
        'click #playSong': 'clearCompleted',
        'click #toggle-all': 'toggleAllComplete'
    },

    initialize: function() {
        this.songUploader = this.$('#addSongs');
        this.$footer = this.$('#footer');
        this.$songList = this.$('#songList');

        window.zurff.songsList.on( 'add', this.addASong, this );
        window.zurff.songsList.on( 'all', this.render, this );

    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
        var totalSongs = zurff.songsList.length;
        var currentPlayingSong = zurff.songsList.getCurrentPlayingSong();
        var currentSelectedSong = zurff.songsList.getCurrentSelectedSong();

        this.$footer.html("totalSongs : " + totalSongs + "</br>current song : " + currentPlayingSong + "</br>selected song : " + currentSelectedSong  );

    },

    addASong : function(){

    }

})