// Die Workshops-Seite wird nur gebaut, wenn sie im Editor eingeschaltet ist.
export default {
  eleventyComputed: {
    permalink: (data) => (data.workshops && data.workshops.show ? "/workshops/" : false),
  },
};
