function makeScoreDisplayEl(correct, incorrect) {
	const totalCount = correct.length + incorrect.length;
	const score = Math.round((correct.length * 100) / totalCount);
	const scoreEl = document.createElement('h1');
	scoreEl.classList.add('text-8xl');
	scoreEl.innerHTML = `Score: ${correct.length}/${totalCount} (${score}%)`;
	return scoreEl;
}
