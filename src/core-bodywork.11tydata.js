// Die Seite wird nur gebaut, wenn im Editor „Seite anzeigen“ angehakt ist.
export default {
  eleventyComputed: {
    permalink: (data) => (data.core && data.core.show === false ? false : "/core-bodywork/"),
  },
};
