// Die Seite wird nur gebaut, wenn im Editor „Seite anzeigen“ angehakt ist.
export default {
  eleventyComputed: {
    permalink: (data) => (data.testimonials && data.testimonials.show === false ? false : "/erfahrungen/"),
  },
};
