import { helper } from '@ember/component/helper';

// Examples:
// pluralize(0, 'book') ==> '0 books'
// pluralize(1, 'Book') ==> '1 book'
// pluralize(3, 'BOOK') ==> '3 books'
// pluralize(0, 'appendix') ==> '0 appendices'
// pluralize(1, 'Appendix') ==> '1 appendix'
// pluralize(3, 'APPENDIX') ==> '3 appendices'
// pluralize(5, 'appendix', 'appendixes') ==> '5 appendixes')
export function pluralize(input) {
  const count = input[0];
  const singular = input[1] && input[1].toLowerCase();
  let plural = input[2] && input[2].toLowerCase();

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

  if (!plural) {
    plural = singularPlural.get(singular) ?? `${singular}s`;
  }

  return count === 1 ? `${count} ${singular}` : `${count} ${plural}`;
}

export default helper(pluralize);
