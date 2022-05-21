/**
 * @var {string} utm - The UTM query string used for the website
 */
const utm = "utm_source=ludwigguerin.fr&utm_medium=site&utm_campaign=external_ref";

/**
 * Append the UTM query string to the given url
 * @param {string} url - The URL to append the query string to
 * @returns {string}
 */
const withUtm = url => {
	if(url.endsWith("?") || url.endsWith("&"))
		return `${url}${utm}`;
	else if(url.includes("?"))
		return `${url}&${utm}`;
	else
		return `${url}?${utm}`;
};

const stopLoader = () => {
	const loader = document.getElementById("loader");
	if(!loader){
		console.warn("No loader found!");
		return;
	}

	loader.classList.add("loaded");
	document.body.classList.remove("locked");

	setTimeout(() => loader.remove(), 2000);
};

module.exports = {
	utm,
	withUtm,
	stopLoader,
};