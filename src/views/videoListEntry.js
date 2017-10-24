var VideoListEntryView = Backbone.View.extend({


  render: function() {
    // console.log(this.$el, '$el');
    this.$el.html(this.template(this.model.attributes));
    console.log(this, 'return this');

    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
