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
const searchInput = document.querySelector('#search');
searchInput.addEventListener('change', (event) => {
  console.log(event.target.value);
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
