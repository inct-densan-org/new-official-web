
module.exports = [
  {
    type: 'select',
    name: 'atomic',
    message: 'select directory',
    choices: [ 'components/layouts', 'components/utils', 'components' ],
  },
  {
    type: 'input',
    name: 'componentName',
    message: 'Input component name',
    validate: (input) => input !== '',
  },
  {
    type: 'confirm',
    name: 'isUseMotion',
    message: 'Use Framer-motion ?',
    choices: [ 'Yes', 'No' ],
    initial: 'Yes',
  }
]
