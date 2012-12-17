var zurff = zurff || {};

var zurffView = Backbone.View.extend({
    el: '#ZurffAudio',

    events: {
        'click ul#songList li': 'unselectAll',
        'dblclick ul#songList li': 'unselectAll'
    },

    initialize: function() {
        this.$footer = this.$('#footer');
        this.$songList = this.$('#songList');

        window.zurff.songsList.on( 'add', this.addASong, this );
        window.zurff.songsList.on( 'all', this.render, this );

        this.$footer.html("totalSongs : " + zurff.songsList.length );
    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
        var totalSongs = zurff.songsList.length;
        this.$footer.html("totalSongs : " + totalSongs );
    },

    addASong : function(songItem){
        var view = new zurff.songItemView({ model: songItem });
        $('#songList').append( view.render().el );
    },

    unselectAll : function(){
        window.zurff.songsList.each(function(songItem){
            console.log('handling in zurfffffview')
            songItem.toggleSelect('unselect');
        })
    }

});

zurff.zurffView = zurffView;
