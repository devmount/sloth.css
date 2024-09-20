const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // Init plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Global data
  eleventyConfig.addGlobalData('baseUrl', 'https://devmount.github.com/sloth.css'); // the production URL
  eleventyConfig.addGlobalData('repoUrl', 'https://github.com/devmount/sloth.css'); // the repository URL
  eleventyConfig.addGlobalData('cdnUrl', 'https://unpkg.com/@devmount/sloth.css@1'); // the repository URL
  eleventyConfig.addGlobalData('layout', 'default'); // make 'default' the default layout
  eleventyConfig.addGlobalData('toc', true); // enable the table of contents
  eleventyConfig.addGlobalData('meta', {
    title: 'Sloth.css',
    description: 'A drop-in utility component CSS library for lazy mammals like me.',
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
