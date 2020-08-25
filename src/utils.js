/**
 * @var {string} utm - The UTM query string used for the website
 */
export const utm = "utm_source=ludwigguerin.fr&utm_medium=site&utm_campaign=external_ref";

/**
 * Append the UTM query string to the given url
 * @param {string} url - The URL to append the query string to
 * @returns {string}
 */
export const withUtm = url => {
	if(url.endsWith("?") || url.endsWith("&"))
		return `${url}${utm}`;
	else if(url.includes("?"))
		return `${url}&${utm}`;
	else
		return `${url}?${utm}`;
};