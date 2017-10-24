var Videos = Backbone.Collection.extend({

  
  
  model: Video,
  
  initialize: function() {
    this.search('surfing');
  },
  
  

  
  search: function(query) {

    $.ajax({
      method: 'GET',
      url: `https://www.googleapis.com/youtube/v3/search?&key=${window.YOUTUBE_API_KEY}&q=${query}&fields=items(snippet(title))&part=snippet`,
      maxResults: 5,
      part: 'snippet',
      success: function(data) {
        console.log(data);
      },
      fail: function(data) {
        console.log('err!');
      }     
      
      // 'https://www.googleapis.com/youtube/v3/search?&key=' + YOUTUBE_API_KEY + '&q=surfing' + '&fields=items(snippet(title))'+ '&part=snippet",
      
    });
    
    
  }

});


// In collections/videos.js, create a search function to fetch data from YouTube's API.
// The ajax method should receive a data object with the following properties:
// query - the string to search for
// maxResults - the maximum number of videos to get, which should default to 5
// key - an authorized YouTube Browser API key
// Only fetch embeddable videos