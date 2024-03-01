
let sound, reverb;

function preload() {
  soundFormats('mp3', 'ogg');
  soundFile = loadSound('assets/Damscray_DancingTiger');

  // disconnect the default connection
  // so that we only hear the sound via the reverb.process
  soundFile.disconnect();
}

function setup() {
  createCanvas(720, 100);
  background(0);

  reverb = new p5.Reverb();

  // sonnects soundFile to reverb with a
  // reverbTime of 6 seconds, decayRate of 0.2%
  reverb.process(soundFile, 6, 0.2);

  reverb.amp(4); // turn it up!
}

function mousePressed() {
  soundFile.play();
}
