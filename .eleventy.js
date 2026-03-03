module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByTag("posts");
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
