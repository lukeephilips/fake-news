import Ember from 'ember';

export default Ember.Component.extend({
  showArticleUpdateForm: false,
  actions: {
    showUpdateArticle() {
      this.set('showArticleUpdateForm', true);
    },
    update(article) {
      var params = {
        title: this.get('title') ? this.get('title'): "",
        author: this.get('author') ? this.get('author'): "",
        text: this.get('text') ? this.get('text'): "",
        image: this.get('image') ? this.get('image'): "",
      };
      this.set('showArticleUpdateForm', false);
      this.sendAction('update', article, params);
    }
  }
});
