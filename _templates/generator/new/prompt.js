// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'component_name',
    message: 'input component name',
    validate: (input) => input !== '',
  },
]
