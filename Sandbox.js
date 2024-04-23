//Programmer: Billy Felton
//Team Member: Miles Shannon
//Bolt ID:SB-52F9
//Date: 4.16.2024
//Program: Hello World - Sandbox
//Program URL: https://edu.sphero.com/program/16700411/edit

//async function startProgram() {
	//await speak("Hello World", true);
	//setMainLed({ r: 0, g: 0, b: 255});
	//setSpeed(60);
	//await delay (2);
	//setSpeed(0);
//}
/*
async function startProgram() {
	setMainLed({ r: 255, g: 0, b: 255 });
	await Sound.Effects.Laser.play(true);
	await speak("Time to move", true);
	await delay(1);
	for (var _i1 = 0; _i1 < 4; _i1++) {
		await strobe({ r: 255, g: 0, b: 255 }, (3 / 15) * 0.5, 15);
		await roll((getHeading() + 90), 60, 1);
		await delay(1);
	}
}
*/
async function startProgram() {
	await roll(0, 40, 2)
	await 2
	await roll (-180, 40, 2)
}