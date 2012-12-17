var zurff = zurff || {};

var songItemView = Backbone.View.extend({

    tagName:  'li',

    template : _.template($("#songitem-template").html()),

    // The DOM events specific to an item.
    events: {
        'click label': 'handleClick',
        'dblclick ul li div' : 'handleDblClick',
        'click .destroy' : 'destroy'
    },

    initialize: function() {
        this.model.on( 'change', this.render, this );
        this.model.on( 'destroy', this.remove, this );
    },

    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
    },

    handleClick: function() {
        console.log('handling in songitemview')
        if(this.model.get('isSelected')){
            this.model.toggleSelect('unselect');
        }
        else{
            this.model.toggleSelect('select');
        }

    },

    handleDblClick: function() {
        this.model.toggleSelect('select');
        this.$el.addClass('songItemSelected');
        this.model.togglePlay('play');
        this.model.trigger('song.play', this.model);
    },

    destroy: function() {
        this.model.destroy();
    }
});

zurff.songItemView = songItemView;