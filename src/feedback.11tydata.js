// Die Seite wird nur gebaut, wenn im Editor „Seite anzeigen“ angehakt ist.
export default {
  eleventyComputed: {
    permalink: (data) => (data.feedback && data.feedback.show === false ? false : "/feedback/"),
  },
};
