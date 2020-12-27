const exception = {
  person: 'people',
  leaf: 'leaves'
}

const resourceNamePluralizer = resource => {
  let noun = resource
  if(exception[noun]) return noun
  if (_.lastIndexOf(noun, 'y') === noun.length - 1) {
    return noun.substring(0, noun.length - 1) + 'ies'
  } else if (_.lastIndexOf(noun, 's') === noun.length - 1) {
    return noun
  }
  return `${noun}s`  
}

export default resourceNamePluralizer
