const toasts = document.getElementById('toasts');
const button = document.getElementById('button');

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
]

button.addEventListener('click', () => {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerText = messages[Math.floor(Math.random() * messages.length)];

  toasts.appendChild(toast);

  setTimeout(() => {
    toast.remove()
  }, 3000);
})
