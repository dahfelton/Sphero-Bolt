//Programmer: Billy Felton
//Team Member: Miles Shannon
//Bolt ID: SB-52F9
//Date: 4.23.2024
//Program: Maze Competition
//Program URL: https://edu.sphero.com/program/16788325/edit

async function startProgram() {
	// Programmer: Billy Felton - Start Text & Audio Commit - Date: 4.30.2024
		await scrollMatrixText('Start!', { r: 66, g: 56, b: 255 }, 15, true)
		await speak("Start", true),
		


	// Programmer: Miles Shannon - Blue LED Checkpoint Commit - Date: 4.30.24
			await roll (0, 72, 2),
			await delay(1),
		setMainLed({ r: 0, g: 0, b: 255 });



	// Programmer:  - Sound One Checkpoint Commit - Date:



	// Programmer:  - Red LED Checkpoint Commit - Date:



	// Programmer:  - Sound TWo Checkpoint Commit - Date:



	// Programmer:  - Green LED Checkpoint Commit - Date:



	// Programmer:  - Purple LED & Sound Three Checkpoint Commit - Date:



	// Programmer:  - Finish Text & Audio Commit - Date:
}
