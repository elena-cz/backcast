var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    
    this.videos = new Videos(window.exampleVideoData);
    
    this.render();
    
    this.currentVideo = this.videos.models[0];//initialize current video to be 0
    
    this.searchView = new SearchView({
      el: this.$('.search')
    });
    this.searchView.render();
    
    this.videoPlayerView = new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    });
    this.videoPlayerView.render(this.currentVideo);
    
    this.videoListView = new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    });
    this.videoListView.render();
  
    
    this.videos.on('select', this.updateVideo, this);
  },
 


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html'),
  
  updateVideo: function(video) {
    this.currentVideo = video;
    this.videoPlayerView.render(this.currentVideo);
  }

});

