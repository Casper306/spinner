// process.stdout.write('hello from spinner1.js... \rheyyy\n');

let spinChr = '|/-\\|/-\\|\n'
let time = 0;
for (const chr of spinChr){
  time += 300;
setTimeout(() => {
  //process.stdout.write('\r' + chr + '  ');
  process.stdout.write(`\r${chr}   `);
}, time);
};
