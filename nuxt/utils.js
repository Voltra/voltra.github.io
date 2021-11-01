/**
 * @var {string} utm - The UTM query string used for the website
 */
export const utm = "utm_source=ludwig-guerin.fr&utm_medium=site&utm_campaign=external_ref";

/**
 * Append the UTM query string to the given url
 * @param {string} url - The URL to append the query string to
 * @returns {string}
 */
export const withUtm = url => {
  if (url.endsWith("?") || url.endsWith("&"))
    return `${url}${utm}`;
  else if (url.includes("?"))
    return `${url}&${utm}`;
  else
    return `${url}?${utm}`;
};

const makeKeywords = tags => {
  if (Array.isArray(tags))
    return tags.join(",");
  else if (typeof tags == "string")
    return tags;
  else
    return "";
};

export const makeMeta = ({ title, description, tags }) => ({
  title,
  meta: [
    {
      vmid: "og:title",
      property: "og:title",
      content: title,
    },
    {
      vmid: "og:description",
      property: "og:description",
      content: description,
    },
    {
      vmid: "description",
      property: "description",
      content: description,
    },
    {
      vmid: "keywords",
      property: "keywords",
      content: makeKeywords(tags),
    },
  ],
});

