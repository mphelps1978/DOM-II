// Your code goes here

// 1. The most annoying sound in the world (using Click event)
var sound = document.createElement('audio');
sound.src = '/img/Bike Horn-SoundBible.com-602544869.mp3';

document.querySelectorAll('.nav-link').forEach(element => {
	element.addEventListener('click', function() {
		sound.play();
	});
});

// 2, 3. Make the images POP (using MouseEnter and MouseLeave events)

const contentImages = document.querySelectorAll('img');
console.log(contentImages);
contentImages.forEach(element => {
	element.addEventListener('mouseenter', () => {
		element.style.transform = 'scale(1.2)';
		element.style.transition = 'transform 0.5s';
	});

	element.addEventListener('mouseleave', () => {
		element.style.transform = 'scale(1)';
		element.style.transition = 'transform 0.5s';
	});
});

// 4 and 5. This isn't a real company, so we probably don't want to sell any tours just yet, right? But this is just a test, so we should leave them alone for normal clicks. (using ShiftClick and AltClick events)

const soldOut = document.querySelectorAll('.btn');
soldOut.forEach(element => {
	element.addEventListener('click', event => {
		if (event.shiftKey) {
			alert('Sorry, sold out!');
		}
		if (event.altKey) {
			element.innerHTML = 'Booked! (not really)';
		}
	});
});

// 6. You know, I wonder if a page gets lonely when you tab away from it, so let's see what happens when you tab out and then back into it. (using visibilitychange event)

document.addEventListener('visibilitychange', () => {
	if (document.visibilityState === 'visible') {
		alert('Welcome back! I missed you!');
	}
});

// 7. Of course we don't want people to copy our work, right?
document.addEventListener('click', event => {


});
