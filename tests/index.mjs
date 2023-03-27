import * as ansiEscapeCodes from '../index.mjs';

process.stdout.write(`\nCONSTANTS\n\n`);

for (const key in ansiEscapeCodes) {
	if (typeof ansiEscapeCodes[key] === 'function') {
		continue;
	}
	process.stdout.write(`${key}: ${ansiEscapeCodes[key]}Hello World${ansiEscapeCodes.RESET}.\n`);
}

process.stdout.write(`\nCOLOURS\n\n`);

for (let index1 = 0, length1 = 16; index1 < length1; index1++) {
	for (let index2 = 0, length2 = 16; index2 < length2; index2++) {
		const code = index1 * 16 + index2;
		process.stdout.write(`${ansiEscapeCodes.colour(code)}${String(code).padStart(4)}${ansiEscapeCodes.RESET}`);
	}
	process.stdout.write('\n');
}

process.stdout.write(`\nBG COLOURS\n\n`);

for (let index1 = 0, length1 = 16; index1 < length1; index1++) {
	for (let index2 = 0, length2 = 16; index2 < length2; index2++) {
		const code = index1 * 16 + index2;
		process.stdout.write(`${ansiEscapeCodes.bgColour(code)}${String(code).padStart(4)}${ansiEscapeCodes.RESET}`);
	}
	process.stdout.write('\n');
}

process.stdout.write(`\nLoading...\n`);
function showPercent(percent) {
	process.stdout.write(`${ansiEscapeCodes.left(1000)}${String(percent).padStart(3)}%`);
	if (percent !== 100) {
		setTimeout(() => void showPercent(percent + 1), 50);
	} else {
		process.stdout.write(`${ansiEscapeCodes.up(1)}${ansiEscapeCodes.left(1000)}Done.\n`);
	}
}
showPercent(0);
