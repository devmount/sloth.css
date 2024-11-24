import fs from 'fs';
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownit from "markdown-it";
import anchor from "markdown-it-anchor";
import tocPlugin from "eleventy-plugin-toc";

const VERSION = '0.3.0';

export default function (eleventyConfig) {
  // Get utility sections
  // Those can be retrieved from the single _utilities.css file.
  // Every section is a single line CSS comment
  const slothUtilitySections = [];
  fs.readFileSync('src/_utilities.css').toString().split("\n").filter((l) => l.startsWith('/*')).forEach((section) => {
    slothUtilitySections.push(section.trim().slice(2, -2).trim().toLowerCase());
  });

  // Get components
  // Those can be retrieved by all files existing in the components/ directory
  const slothComponents = [];
  fs.readdirSync('src/components').forEach(file => {
    const slug = file.slice(1, -4);
    slothComponents.push({
      slug: slug,
      js: ['tab', 'toast'].includes(slug),
    });
  });

  // Init plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.setLibrary("md", markdownit().set({ html: true }).use(anchor));
  eleventyConfig.addPlugin(tocPlugin, {
    tags: ["h2", "h3"],
    ul: true,
  });

  // Build search index
  const index = [];
  const docsSrc = 'docs/pages/';
  const dirs = fs.readdirSync(docsSrc, { withFileTypes: true }).filter((e) => e.isDirectory()).map((d) => d.name);
  dirs.forEach((d) => {
    fs.readdirSync(`${docsSrc}${d}`).forEach(file => {
      const name = file.slice(0, -3);
      const meta = fs.readFileSync(`${docsSrc}${d}/${file}`).toString().split("\n", 5);
      const title = meta.filter((l) => l.startsWith('title:')).join().slice(6).trim();
      const text = meta.filter((l) => l.startsWith('description:')).join().slice(12).trim();
      const tags = meta.filter((l) => l.startsWith('tags:')).join().slice(5).trim();
      index.push({
        title: title,
        name: name,
        url: `/${d}/${name}`,
        text: text,
        tags: tags,
        cat: d
      });
    });
  });

  // Sort entries alphabetically by title
  index.sort((a, b) => a.title.localeCompare(b.title));

  // Write search index to file
  fs.mkdirSync('docs/public/assets/scripts', { recursive: true })
  fs.writeFileSync('docs/public/assets/scripts/searchIndex.json', JSON.stringify(index));

  // Global data
  eleventyConfig.addGlobalData('baseUrl', 'https://slothcss.devmount.com');
  eleventyConfig.addGlobalData('repoUrl', 'https://github.com/devmount/sloth.css');
  eleventyConfig.addGlobalData('cdnUrl', 'https://unpkg.com/@devmount/sloth.css@^0');
  eleventyConfig.addGlobalData('creatorUrl', 'https://devmount.com');
  eleventyConfig.addGlobalData('donationUrl', 'https://paypal.me/devmount');
  eleventyConfig.addGlobalData('layout', 'default');
  eleventyConfig.addGlobalData('meta', {
    title: 'Sloth.css',
    version: VERSION,
    description: 'A drop-in utility component CSS library for lazy mammals.',
    utilitySections: slothUtilitySections,
    components: slothComponents,
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
    // Nunjucks instead of Liquid for markdown
    markdownTemplateEngine: 'njk',
    templateEngineOverride: ['njk'],
  }
};
