import webPackConfig from '../webpack.config.prod';
import webpack from 'webpack';
import chalk from 'chalk';


process.env.NODE_ENV ='production';

console.log(chalk.blue('generating minified bundle for production....')); // eslint-disable-line no-console
webpack(webPackConfig).run((err, stats) => {
    if(err){
        console.log(chalk.red(err)); // eslint-disable-line no-console
        return 1;
    } 
    
    const jsonStats = stats.toJson();

    if(jsonStats.hasErrors){
        return jsonStats.errors.map( error => console.log(chalk.red(error))) // eslint-disable-line no-console
    }
    if(jsonStats.hasWarnings){
        console.log(chalk.yellow('web pack generated following warnings'));  // eslint-disable-line no-console
        jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));  // eslint-disable-line no-console
    }

    console.log(`webpack stats : ${stats}`);// eslint-disable-line no-console
    console.log(chalk.green(`your  app has been build for production written /dist`));// eslint-disable-line no-console
    return 0;
});

