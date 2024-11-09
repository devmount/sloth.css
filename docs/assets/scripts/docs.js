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
let index = [];
fetch('/assets/scripts/searchIndex.json')
  .then((response) => response.json())
  .then((data) => { index = data; });

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

  // Calculate search result
  const result = index.filter((e) => (`${e.title} ${e.text} ${e.tags}`).toLowerCase().includes(query));

  // Handle search results
  if (result.length) {
    searchResult.innerHTML = result.reduce((p, c) => {
      const icon = {
        'getting-started': '<path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />',
        'core': '<path d="M6 17.6l-2 -1.1v-2.5" /><path d="M4 10v-2.5l2 -1.1" /><path d="M10 4.1l2 -1.1l2 1.1" /><path d="M18 6.4l2 1.1v2.5" /><path d="M20 14v2.5l-2 1.12" /><path d="M14 19.9l-2 1.1l-2 -1.1" /><path d="M12 12l2 -1.1" /><path d="M18 8.6l2 -1.1" /><path d="M12 12l0 2.5" /><path d="M12 18.5l0 2.5" /><path d="M12 12l-2 -1.12" /><path d="M6 8.6l-2 -1.1" />',
        'utilities': '<path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />',
        'components': '<path d="M3.604 7.197l7.138 -3.109a.96 .96 0 0 1 1.27 .527l4.924 11.902a1 1 0 0 1 -.514 1.304l-7.137 3.109a.96 .96 0 0 1 -1.271 -.527l-4.924 -11.903a1 1 0 0 1 .514 -1.304z" /><path d="M15 4h1a1 1 0 0 1 1 1v3.5" /><path d="M20 6c.264 .112 .52 .217 .768 .315a1 1 0 0 1 .53 1.311l-2.298 5.374" />',
      }[c.cat];
      return `${p}<a href="${c.url}" class="entry">
        <div class="text-muted">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">${icon}</svg>
        </div>
        <div>
          <h5>${c.name}</h5>
          <div class="text-muted">${c.text}</div>
        </div>
      </a>`;
    }, '')
  } else {
    searchResult.innerHTML = `<div class="state empty">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M3 7v4a1 1 0 0 0 1 1h3" /><path d="M7 7v10" /><path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z" /><path d="M17 7v4a1 1 0 0 0 1 1h3" /><path d="M21 7v10" /></svg>
      <h4>Sorry, no matching pages found</h4>
      <p class="text-muted">Please try changing the search term.</p>
    </div>`;
  }
});
const focusSearch = () => setTimeout(() => searchInput.focus(), 50);

// Core: Form
const invalidInput = document.querySelector('#invalid-input');
invalidInput?.setCustomValidity("Invalid field.");

// Component: Toast
const toast = document.querySelector('#toast-demo');
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

// Component: Tab
const tabList = document.querySelector('#tab-demo > nav > ol');
const tabPanels = document.querySelectorAll('#tab-demo > section');
const tabs = tabList.querySelectorAll('li');
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'))
    tabPanels.forEach(p => p.style.display = 'none');
    const panel = [...tabPanels][i];
    panel.style.display = 'block';
    tab.classList.add('active');
  });
});


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
