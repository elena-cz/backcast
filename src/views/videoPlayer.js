var VideoPlayerView = Backbone.View.extend({
 

  render: function(video) {
    this.$el.html(this.template(video.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
