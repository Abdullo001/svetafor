const elRed = document.querySelector('.red');
const elYellow = document.querySelector('.yellow');
const elGreen = document.querySelector('.green');
const elRedTimer = document.querySelector('.red-timer');
const elGreenTimer = document.querySelector('.green-timer');

function system() {
	setTimeout(() => {
		let count = 10;
		elGreen.style.backgroundColor = 'antiquewhite';
		elRed.style.backgroundColor = 'red';
		elRedTimer.textContent = count;
		const redTimer = setInterval(() => {
			count--;
			elRedTimer.textContent = count;
		}, 1000);

		setTimeout(() => {
			clearInterval(redTimer);
		}, 10000);
	}, 0);

	setTimeout(() => {
		elYellow.style.backgroundColor = 'yellow';
		console.log('hiii');
	}, 7000);

	setTimeout(() => {
		let count = 10;

		elYellow.style.backgroundColor = 'antiquewhite';
		elRed.style.backgroundColor = 'antiquewhite';
		elGreen.style.backgroundColor = 'green';

		elGreenTimer.textContent = count;
		const greenTimer = setInterval(() => {
			count--;
			elGreenTimer.textContent = count;
		}, 1000);

		setTimeout(() => {
			clearInterval(greenTimer);
		}, 10000);
	}, 10000);
}

system();

setInterval(() => {
	system();
}, 20000);
