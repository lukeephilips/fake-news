import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleToggle() {
      this.toggleProperty('addNewArticle');
    },
    saveArticle() {
      var params = {
        title: this.get('title') ? this.get('title'): "",
        author: this.get('author') ? this.get('author'): "",
        text: this.get('text') ? this.get('text'): "",
        image: this.get('image') ? this.get('image'): "",
      };
      this.toggleProperty('addNewArticle');
      this.sendAction('saveArticle',params);
    }
  }
});
