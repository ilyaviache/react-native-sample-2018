import aButton from './aButton'
import aComponentWithChildren from './aComponentWithChildren'
import aThemedComponent from './aThemedComponent'

const sharedExamples = {
  aButton,
  aComponentWithChildren,
  aThemedComponent,
}

export const itBehavesLike = (sharedExampleName, args) => {
  sharedExamples[sharedExampleName](args)
}
