const findTwoMovies = (movieList, flightTime) => {
	const movieSet = new Set();

	for (let i = 0; i < movieList.length; i++) {
		const targetDuration = flightTime - movieList[i];

		if (movieSet.has(targetDuration)) {
			return [movieList[i], targetDuration];
		}

		movieSet.add(movieList[i]);
	}

	return null;
};

const movieList = [85, 83, 120, 60];
const flightTime = 180;

console.log(findTwoMovies(movieList, flightTime));
