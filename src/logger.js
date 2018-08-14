class Logger {
  constructor(chalk) {
    this.info = console.log;
    this.success = s => console.log(chalk.green(s));
  }
}

module.exports = Logger;
