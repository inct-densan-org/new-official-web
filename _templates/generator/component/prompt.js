module.exports = [
  {
    type: 'select',
    name: 'atomic',
    message: 'Please select directory',
    choices: [ 'components/layouts', 'components/utils', 'components' ],
  },
  {
    type: 'input',
    name: 'componentName',
    message: 'Please enter a component name',
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
