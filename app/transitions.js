const duration = 1000;

export default function () {
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );

  // Scope the transition to the modal-if class to avoid
  // conflicting transitions.
  this.transition(this.hasClass('modal-if'), this.use('fade', { duration }));

  // Scope the transition of a specific from-route
  this.transition(
    this.fromRoute('book.detail.index'),
    this.use('toLeft', { duration }),
    this.reverse('toRight', { duration })
  );
}
