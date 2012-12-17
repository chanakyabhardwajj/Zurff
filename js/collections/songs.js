var zurff = zurff || {};

var songsList = Backbone.Collection.extend({
    model : zurff.songItem,

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