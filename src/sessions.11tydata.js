// Die Seite wird nur gebaut, wenn im Editor „Seite anzeigen“ angehakt ist.
export default {
  eleventyComputed: {
    permalink: (data) => (data.sessions && data.sessions.show === false ? false : "/sessions/"),
  },
};
