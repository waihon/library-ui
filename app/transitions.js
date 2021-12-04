const duration = 600;

// Wait for the background to finish fading in before sliding the card in
// from the right to the left.
const slidingCardIn = [
  {
    pickNew: '.slide-out-bg',
    use: ['fade', { duration }],
  },
  {
    pickNew: '.slide-out-card',
    use: ['wait', duration, { then: 'toLeft' }, { duration }],
  },
];

// Wait for the card to finish sliding out from the left to the right
// before fading out the background.
// The sequence of classes appears to be significant, i.e. .slide-out-bg
// must appear before .slide-out-card.
const slidingCardOut = [
  {
    pickOld: '.slide-out-bg',
    use: ['wait', duration, { then: 'fade' }, { duration }],
  },
  {
    pickOld: '.slide-out-card',
    use: ['toRight', { duration }],
  },
];

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

  this.transition(
    this.fromRoute('author.detail.index'),
    this.use('fade', { duration }),
    this.reverse('fade', { duration })
  );

  this.transition(
    this.fromRoute('author.index'),
    this.use('explode', ...slidingCardIn),
    this.reverse('explode', ...slidingCardOut)
  );
}
