// @ts-ignore
import ansi from 'ansi';
// @ts-ignore
import beepbeep from 'beepbeep';
// @ts-ignore
import clicolor from 'cli-color';

const cursor = ansi(process.stdout);

cursor.red().bg.grey().write('Hello World!').bg.reset().write('\n');

beepbeep(3, 1000);

console.log(clicolor.red('Text in red'));

console.log(clicolor.yellow('Text in yellow'));

console.log(clicolor.green('Text in green'));
