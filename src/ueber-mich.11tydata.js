// Die Seite wird nur gebaut, wenn im Editor „Seite anzeigen“ angehakt ist.
export default {
  eleventyComputed: {
    permalink: (data) => (data.about && data.about.show === false ? false : "/ueber-mich/"),
  },
};
