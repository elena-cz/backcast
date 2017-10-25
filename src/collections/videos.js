var Videos = Backbone.Collection.extend({

  
  
  model: Video,

  
  initialize: function() {

    // this.reset(window.exampleVideoData);
    this.search('dog');
  },
  
  resetVideos: function(data) {
    console.log(data);
    this.reset(data.items);
    console.log(this, 'this');
  },

  
  search: function(query) {
    
    var that = this;

    $.ajax({
      method: 'GET',
      url: `https://www.googleapis.com/youtube/v3/search?&key=${window.YOUTUBE_API_KEY}&q=${query}&part=snippet`,
      maxResults: 5,
      part: 'snippet',
      success: function(data) {
        console.log(that, 'that');
        that.resetVideos(data);
      },
      fail: function(data) {
        console.log('err!');
      }           
    });
    
    
  }

});

