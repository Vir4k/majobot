const natural = require('natural')

const sprawdz = async (message, command) => {
  await natural.BayesClassifier.load('majonezie.json', null, (err, classifier) => {
    if (err) throw err
    message.reply(classifier.classify(command))
  })
}
module.exports = sprawdz