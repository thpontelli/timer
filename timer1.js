
const alarms = process.argv.slice(2);

for (const alarm of alarms) {
  // checking if an alarm entry is a number
  if (typeof parseInt(alarm) === "number") { 
    // checking if a number is positive
    if (alarm >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      },alarm);
    }
  }
}

//console.log(alarms);