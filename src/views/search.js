var SearchView = Backbone.View.extend({
  
  
  events: {
    'click .btn' : 'runSearch',
    'keyup .form-control' : 'enter'  
  },
  
  enter: function(event) {
    if (event.keyCode === 13) {
      this.runSearch($('.form-control').val());
    }
  },
  
  runSearch: function() {
    this.collection.search($('.form-control').val());
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
