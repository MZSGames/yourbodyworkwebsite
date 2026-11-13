// Die Seite wird nur gebaut, wenn im Editor „Seite anzeigen“ angehakt ist.
export default {
  eleventyComputed: {
    permalink: (data) => (data.contact && data.contact.show === false ? false : "/kontakt/"),
  },
};
