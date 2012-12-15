var zurff = zurff || {};

zurff.songItem = Backbone.Model.extend({
    defaults:{
        title:"Untitled Song",
        path:"Unknown Path",
        duration:"Unknown Duration",
        isPlaying:false,
        isSelected:false
    },

    select:function () {
        this.set({'isSelected':true});
        console.log('I selected myself : ' + this.get('title'));
    },

    unselect:function () {
        this.set({'isSelected':false});
        console.log('I unselected myself : ' + this.get('title'));
    },

    play:function () {
        this.select();
        if (this.get('isPlaying')) {
            console.log('Nothing to do! I am already playing : ' + this.get('title'));
        }
        else {
            this.set({'isPlaying':true});
            console.log('Yayy! I am playing now : ' + this.get('title'));
        }
    },

    pause:function () {
        this.select();
        if (this.get('isPlaying')) {
            this.set({'isPlaying':false});
            console.log('I was playing but am paused now : ' + this.get('title'));
        }
        else {
            console.log('I can not pause as I am not playing : ' + this.get('title'));
        }

    }

})