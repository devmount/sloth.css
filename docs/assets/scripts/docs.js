// Theming
const lightToggle = document.querySelector('#light-mode');
const darkToggle = document.querySelector('#dark-mode');
const setDark = () => {
  localStorage.setItem('sloth.css/theme', 'dark');
  document.documentElement.style.colorScheme = 'dark';
  darkToggle.classList.add(['text-accent']);
  lightToggle.classList.remove(['text-accent']);
};
const setLight = () => {
  localStorage.setItem('sloth.css/theme', 'light');
  document.documentElement.style.colorScheme = 'light';
  lightToggle.classList.add(['text-accent']);
  darkToggle.classList.remove(['text-accent']);
};

// Search
const search = document.querySelector('#search');
const searchInput = search.querySelector('input');
const searchResult = search.querySelector('#result');
searchInput.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase();

  // Handle empty input
  if (!query.length) {
    searchResult.innerHTML = `<div class="state empty">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3" /><path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" /><path d="M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7" /><path d="M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1" /><path d="M17 12h.01" /><path d="M13 12h.01" /></svg>
      <h4>Waiting for search input</h4>
      <p class="text-muted">Please type something into the search field.</p>
    </div>`;
    return;
  }

  // Build search index
  const index = [
    {
      title: 'Home',
      url: '/',
      text: 'Hand-crafted core styles, utility classes and components for dropping in.',
    },
    {
      title: 'Installation',
      url: '/getting-started/installation',
      text: 'Getting started with Sloth.css, how to install it.',
    },
    {
      title: 'Usage',
      url: '/getting-started/usage',
      text: 'Getting started with Sloth.css, how to use it.',
    },
    {
      title: 'Contributing',
      url: '/getting-started/contributing',
      text: 'Getting started with Sloth.css, how to contribute.',
    },
    {
      title: 'Changelog',
      url: '/getting-started/changelog',
      text: 'Getting started with Sloth.css, see what\'s new.',
    },
  ];
  const result = index.filter((e) => (e.title + e.text).toLowerCase().includes(query));

  // Handle search results
  if (result.length) {
    searchResult.innerHTML = result.reduce((p, c) => {
      return `${p}<a href="${c.url}" class="entry">
        <h4>${c.title}</h4>
        <div class="text-muted">${c.text}</div>
      </a>`;
    }, '')
  } else {
    searchResult.innerHTML = `<div class="state empty">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M3 7v4a1 1 0 0 0 1 1h3" /><path d="M7 7v10" /><path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z" /><path d="M17 7v4a1 1 0 0 0 1 1h3" /><path d="M21 7v10" /></svg>
      <h4>Sorry, no matching pages found</h4>
      <p class="text-muted">Please try changing the search term.</p>
    </div>`;
  }
})

// Component: Toast
const toast = document.querySelector('#toast');
const toggleToast = () => toast.classList.toggle('active');
const toastPositions = ['br', 'tr', 'tl', 'bl'];
const positionToast = (pos) => {
  toastPositions.forEach(p => toast.classList.remove(p));
  toast.classList.add(pos);
}
const toastColors = ['neutral', 'accent', 'success', 'alert'];
const colorToast = (col) => {
  toastColors.forEach(c => toast.classList.remove(c));
  toast.classList.add(col);
}

// Ready? Let's go!
(() => {
  // Handle initial theme mode
  if (localStorage.getItem('sloth.css/theme') === 'dark') {
    document.documentElement.style.colorScheme = 'dark';
    darkToggle.classList.add('text-accent');
  }
  if (localStorage.getItem('sloth.css/theme') === 'light') {
    document.documentElement.style.colorScheme = 'light';
    lightToggle.classList.add('text-accent');
  }
})();
