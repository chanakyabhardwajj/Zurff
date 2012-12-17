var zurff = zurff || {};

zurff.songItem = Backbone.Model.extend({
    defaults:{
        title:"Untitled Song",
        path:"Unknown Path",
        isPlaying:false,
        isSelected:false
    },

    toggleSelect:function (force /*optional*/) {
        if(force=='select'){
            this.set({'isSelected':true});
            console.log("I selected myself : " + this.get('title'));
        }

        else if(force=='unselect'){
            this.set({'isSelected':false});
            console.log("I unselected myself : " + this.get('title'));
        }

        else{
            var conditional = !this.get('isSelected');
            this.set({'isSelected':conditional});
            console.log('I ' + (conditional ? "": "un" ) + "selected myself : " + this.get('title'));
        }
    },

    togglePlay:function (force /*optional*/) {
        if(force=='play'){
            this.set({'isPlaying':true});
            console.log("I played myself : " + this.get('title'));
        }

        else if(force=='pause'){
            this.set({'isPlaying':false});
            console.log("I paused myself : " + this.get('title'));
        }

        else{
            var conditional = !this.get('isPlaying');
            this.set({'isPlaying':conditional});
            console.log('I ' + (conditional ? "played": "paused" ) + " myself : " + this.get('title'));
        }
    }
})