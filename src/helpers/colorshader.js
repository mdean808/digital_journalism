export default {
	color(seed, saturation, lightness) {
		let hash = 0, i, chr; //turn ur string into random jargin gargin numbers
		if (seed.length === 0) return hash;
		for (i = 0; i < seed.length; i++) {
			chr   = seed.charCodeAt	(i);
			hash  = ((hash << 5) - hash) + chr;
			hash |= 0; // Convert to 32bit integer
		}

		let x = Math.sin((hash + 2)) * 10000; //turn that random number into an even more random number between [0,1]
		return `hsl(${(x - Math.floor(x)) * 360}, ${saturation}%, ${lightness}%)`; //turn that into a cool color
	}
}
