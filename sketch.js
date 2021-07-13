
document.querySelector('button')?.addEventListener('click', async () => {
	await Tone.start()
  console.log('audio is ready')
})


function setup() {
  createCanvas(400, 400);
}

function hello() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "8n");
}

function draw() {
  background(220);
}
