// Component: Toast
const toast = document.querySelector('#toast');
const toggleToast = () => toast.classList.toggle('active');
const toastPositions = ['br', 'tr', 'tl', 'bl'];
const positionToast = (pos) => {
  toastPositions.forEach(p => toast.classList.remove(p));
  toast.classList.add(pos);
}
const toastColors = ['neutral', 'accent', 'positive', 'negative'];
const colorToast = (col) => {
  toastColors.forEach(c => toast.classList.remove(c));
  toast.classList.add(col);
}
