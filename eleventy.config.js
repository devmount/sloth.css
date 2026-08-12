import fs from 'fs';
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownit from "markdown-it";
import anchor from "markdown-it-anchor";

const VERSION = '0.4.2';

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

  // Build a table of contents from h2/h3 headings with ids (set by markdown-it-anchor)
  eleventyConfig.addFilter('toc', (content) => {
    const headings = [];
    const headingRegex = /<(h2|h3)([^>]*)>([\s\S]*?)<\/\1>/g;
    let match;
    while ((match = headingRegex.exec(content))) {
      const [, tag, attrs, inner] = match;
      const idMatch = attrs.match(/\sid="([^"]*)"/);
      if (!idMatch) continue;
      headings.push({
        tag,
        id: idMatch[1],
        text: inner.replace(/<[^>]+>/g, ''),
        children: [],
      });
    }
    if (headings.length === 0) return '';

    const tree = [];
    let currentH2 = null;
    headings.forEach((heading) => {
      if (heading.tag === 'h2') {
        tree.push(heading);
        currentH2 = heading;
      } else if (currentH2) {
        currentH2.children.push(heading);
      } else {
        tree.push(heading);
      }
    });

    const renderList = (items) => {
      if (items.length === 0) return '';
      const listItems = items.map((heading) =>
        `<li><a href="#${heading.id}">${heading.text}</a>${renderList(heading.children)}</li>`
      );
      return `<ul>${listItems.join('')}</ul>`;
    };

    return `<nav class="toc">${renderList(tree)}</nav>`;
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
