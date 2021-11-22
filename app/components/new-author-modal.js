import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NewAuthorModalComponent extends Component {
  @service store;
  @tracked showModal = false;
  @tracked author;

  constructor() {
    super(...arguments);

    this.author = {
      first: '',
      last: '',
    };
  }

  @action
  save(event) {
    event.preventDefault();

    let author = this.store.createRecord('author', this.author);

    author.save().then(() => {
      this.showModal = false;

      this.args.onSave(author);
    });
  }
}
