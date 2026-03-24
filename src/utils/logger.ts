import chalk from 'chalk';

class Logger {
    static debug(message: string) { console.log(chalk.blue(`[DEBUG] ${message}`)); }
    static info(message: string) { console.log(chalk.green(`[INFO] ${message}`)); }
    static warn(message: string) { console.log(chalk.yellow(`[WARN] ${message}`)); }
    static error(message: string) { console.log(chalk.red(`[ERROR] ${message}`)); }
    static success(message: string) { console.log(chalk.green.bold(`[SUCCESS] ${message}`)); }
    static title(message: string) { console.log(chalk.magenta.bold(`=== ${message} ===`)); }
}

export default Logger;