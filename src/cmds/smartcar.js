module.exports.command = 'smartcar <cmd>';

module.exports.aliases = 'sc';

module.exports.describe = 'sc deploy-to-staging';

module.exports.builder = (yargs) => {
  this.yargs = yargs;
  return yargs.commandDir('smartcar');
};

module.exports.handler = () => this.yargs.showHelp();
