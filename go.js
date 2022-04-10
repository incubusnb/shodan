// Initial script to be run. Very simple, checks to see if there's enough ram on home to run shodan.js. If not, run the bootstrap script.

if (enoughRAM()) {
  ns.run("shodan.js");
} else {
  ns.run("bootstrap.js");
}

async function enoughRAM(ns) {
  return ns.getServer("home").maxRam > 32;
}
