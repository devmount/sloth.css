const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // Init plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Global data
  eleventyConfig.addGlobalData('baseUrl', 'https://devmount.github.com/sloth.css');
  eleventyConfig.addGlobalData('repoUrl', 'https://github.com/devmount/sloth.css');
  eleventyConfig.addGlobalData('cdnUrl', 'https://unpkg.com/@devmount/sloth.css@1');
  eleventyConfig.addGlobalData('layout', 'default');
  eleventyConfig.addGlobalData('toc', true);
  eleventyConfig.addGlobalData('meta', {
    title: 'Sloth.css',
    description: 'A drop-in utility component CSS library for lazy mammals.',
    utilitySections: [],
    components: [],
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
