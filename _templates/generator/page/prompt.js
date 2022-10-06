module.exports = [
  {
    type: 'input',
    name: 'pageName',
    message: 'Please enter a page name',
    validate: (input) => input !== '',
  },
  {
    type: 'input',
    name: 'metaTitle',
    message: 'Please enter a meta title',
  },
  {
    type: 'confirm',
    name: 'isUseMotion',
    message: 'Use Framer-motion ?',
    choices: [ 'Yes', 'No' ],
    initial: 'Yes',
  }
]
