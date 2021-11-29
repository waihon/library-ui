import { helper } from '@ember/component/helper';

// Singulars will always be returned as passed in, e.g.
//   book --> book, Book --> Book, BOOK --> BOOK, bOOk --> bOOK
// For irregular plural forms such as appendices:
// * All uppercase will return all in upeprcase, e.g.
//   APPENDIX --> APPENDICES
// * First character in uppercase (regarldess of the rest) will return first
//   character in uppercase while the remaining in lowercase, e.g.
//   Appendix --> Appendices, APPENdix --> Appendices
// * First character in lowercase (regarless of the rest) will return first
//   character in lowercase and the remaining in lowercase as well, e.g.
//   appendix --> appendices, appenDIX --> appendices
// For regular plural forms such as books:
// * All uppercase will return all in uppercase, e.g.
//   BOOK --> BOOKS
// * Lowercase or mixed case will be returned with the original singular
//   concated with 's', e.g.
//   book --> books, Book --> Books, bOOk --> bOOKs
// Plural form passed in will always be returned as it is, e.g.
//   appendixes --> appendixes, Appendixes --> Appendixes,
//   APPENDIXES --> APPENDIXES, aPPENDIXEs --> aPPENDIXEs
// Please refer to test/unit/helpers/pluralize-test.js for more examples.
export function pluralize(input) {
  const count = input[0];
  const singular = input[1];
  const plural = input[2];
  const lowerCasedSingular = singular.toLowerCase();
  const isAllUpperCase = /^[A-Z]*$/.test(singular);
  const isFirstCharUpperCase = /^[A-Z]/.test(singular.substring(0, 1));
  let pluralized;
  let isIrregular = false;

  // https://www.thoughtco.com/irregular-plural-nouns-in-english-1692634
  // https://www.englishpractice.com/improve/irregular-special-plurals/
  const singularPlural = new Map([
    ['addendum', 'addenda'], // or addendums
    ['aircraft', 'aircraft'],
    ['alumna', 'alumnae'],
    ['alumnus', 'alumni'],
    ['analysis', 'analyses'],
    ['antenna', 'antennae'], // or antennas
    ['antithesis', 'antitheses'],
    ['apex', 'apices'], // or apexes
    ['appendix', 'appendices'], // or appendixes
    ['axis', 'axes'],
    ['bacillus', 'bacilli'],
    ['bacterium', 'bacteria'],
    ['basis', 'bases'],
    ['beau', 'beaux'], // or beaus
    ['bison', 'bison'],
    ['bureau', 'bureaux'], // or bureaus
    ['calf', 'calves'],
    ['cactus', 'cacti'], // or cactuses
    ['château', 'châteaux'], // or châteaus
    ['child', 'children'],
    ['codex', 'codices'],
    ['concerto', 'concerti'], // or concertos
    ['corpus', 'corpora'],
    ['crisis', 'crises'],
    ['criterion', 'criteria'], // or criterions
    ['crossroads', 'crossroads'],
    ['curriculum', 'curricula'], // or curriculums
    ['datum', 'data'],
    ['deer', 'deer'], // or deers
    ['diagnosis', 'diagnoses'],
    ['die', 'dice'], // or dies
    ['dwarf', 'dwarves'], // or dwarfs
    ['elf', 'elves'],
    ['ellipsis', 'ellipses'],
    ['erratum', 'errata'],
    ['faux pas', 'faux pas'],
    ['fez', 'fezzes'], // or fezes
    ['fish', 'fishes'], // or fishes
    ['focus', 'foci'], // or focuses
    ['foot', 'feet'], // or foot
    ['formula', 'formulae'], // or formulas
    ['fungus', 'fungi'], // or funguses
    ['genus', 'genera'], // or genuses
    ['goose', 'geese'],
    ['graffito', 'graffiti'],
    ['grouse', 'grouse'], // or grouses
    ['half', 'halves'],
    ['headquarters', 'headquarters'],
    ['hoof', 'hooves'], // or hoofs
    ['hypothesis', 'hypotheses'],
    ['index', 'indices'], // or indexes
    ['knife', 'knives'],
    ['larva', 'larvae'], // or larvas
    ['libretto', 'libretti'], // or librettos
    ['life', 'lives'],
    ['loaf', 'loaves'],
    ['locus', 'loci'],
    ['louse', 'lice'],
    ['man', 'men'],
    ['matrix', 'matrices'], // or matrixes
    ['means', 'means'],
    ['medium', 'media'], // or mediums
    ['memorandum', 'memoranda'], // or memorandums
    ['millennium', 'millennia'],
    ['minutia', 'minutiae'],
    ['moose', 'moose'],
    ['mouse', 'mice'],
    ['nebula', 'nebulae'], // or nebulas
    ['nucleus', 'nuclei'], // or nucleuses
    ['oasis', 'oases'],
    ['offspring', 'offspring'], // or offsprings
    ['opus', 'opera'], // or opuses
    ['ovum', 'ova'],
    ['ox', 'oxen'], // or ox
    ['parenthesis', 'parentheses'],
    ['person', 'people'],
    ['penny', 'pence'],
    ['phenomenon', 'phenomena'], // or phenomenons
    ['phylum', 'phyla'],
    ['quiz', 'quizzes'],
    ['radius', 'radii'], // or radiuses
    ['referendum', 'referenda'], // or referendums
    ['salmon', 'salmon'], // or salmons
    ['scarf', 'scarves'], // or scarfs
    ['self', 'selves'],
    ['series', 'series'],
    ['sheaf', 'sheaves'],
    ['sheep', 'sheep'],
    ['shelf', 'shelves'],
    ['shrimp', 'shrimp'], // or shrimps
    ['species', 'species'],
    ['stimulus', 'stimuli'],
    ['stratum', 'strata'],
    ['swine', 'swine'],
    ['syllabus', 'syllabi'], // or syllabuses
    ['symposium', 'symposia'], // or symposiums
    ['synopsis', 'synopses'],
    ['tableau', 'tableaux'], // or tableaus
    ['thesis', 'theses'],
    ['thief', 'thieves'],
    ['tooth', 'teeth'],
    ['trout', 'trout'], // or trouts
    ['tuna', 'tuna'], // or tunas
    ['vertebra', 'vertebrae'], // or vertebras
    ['vertex', 'vertices'], // or vertexes
    ['vita', 'vitae'],
    ['vortex', 'vortices'], // or vortexes
    ['wharf', 'wharves'], // or wharfs
    ['wife', 'wives'],
    ['wolf', 'wolves'],
    ['woman', 'women'],
  ]);

  // Determine the plural form
  if (plural) {
    pluralized = plural;
  } else {
    pluralized = singularPlural.get(lowerCasedSingular);
    if (pluralized) {
      isIrregular = true;
    } else {
      // Singular in original case + 's'
      pluralized = `${singular}s`;
    }
  }

  // Convert the case if necessary
  if (isIrregular) {
    if (isAllUpperCase) {
      pluralized = pluralized.toUpperCase();
    } else if (isFirstCharUpperCase) {
      pluralized =
        pluralized.substring(0, 1).toUpperCase() + pluralized.substring(1);
    }
  } else {
    if (isAllUpperCase) {
      pluralized = pluralized.toUpperCase();
    }
  }

  return count === 1 ? `${count} ${singular}` : `${count} ${pluralized}`;
}

export default helper(pluralize);
