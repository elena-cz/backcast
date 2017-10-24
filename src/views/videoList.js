var VideoListView = Backbone.View.extend({


  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    for (var i = 0; i < 5; i++) {
      this.renderVideoListEntry(this.collection.models[i]);
    }
    return this;
  },
  
  

  template: templateURL('src/templates/videoList.html'),
  
  renderVideoListEntry: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$('.video-list').append(videoListEntryView.render());
  }
  
  
  
  
  // render: function() {
  //   this.$el.empty();
  //   this.collection.forEach(this.renderMovie, this);
  // },

  // renderMovie: function(movie) {
  //   var movieView = new MovieView({model: movie});
  //   this.$el.append(movieView.render());
  // }

});
