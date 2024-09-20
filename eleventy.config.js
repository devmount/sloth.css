module.exports = function(eleventyConfig) {
  // Global data
  eleventyConfig.addGlobalData('baseUrl', 'https://shoelace.style/'); // the production URL
  eleventyConfig.addGlobalData('layout', 'default'); // make 'default' the default layout
  eleventyConfig.addGlobalData('toc', true); // enable the table of contents
  eleventyConfig.addGlobalData('meta', {
    title: 'Shoelace',
    description: 'A forward-thinking library of web components.',
  });

  // Layout aliases
  eleventyConfig.addLayoutAlias('default', 'default.njk');

  // Get sloth.css
  eleventyConfig.addPassthroughCopy({ 'docs/assets': 'assets'});
  eleventyConfig.addPassthroughCopy({ src: 'assets/styles' });

  // 11ty config
  return {
    dir: {
      input: "docs/pages",
      output: "docs/public",
      includes: "../_includes",
    },
    // use Nunjucks instead of Liquid for markdown files
    markdownTemplateEngine: 'njk',
    // just Nunjucks and then markdown
    templateEngineOverride: ['njk'],
  }
};
