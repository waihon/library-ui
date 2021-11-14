import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuthorFormComponent extends Component {
  constructor() {
    super(...arguments);

    this.first = this.args.author.first;
    this.last = this.args.author.last;
  }

  @action
  submitChanges(event) {
    // Prevent the form from reloading the page.
    event.preventDefault();

    this.args.onSubmit({
      first: this.first,
      last: this.last,
    });
  }
}
