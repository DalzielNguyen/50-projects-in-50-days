const toasts = document.getElementById('toasts');
const button = document.getElementById('button');

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
]

const types = ['info', 'success', 'error'];

button.addEventListener('click', createNotification)


function createNotification() {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.classList.add(getRandomType());
  toast.innerText = messages[Math.floor(Math.random() * messages.length)];

  toasts.appendChild(toast);

  setTimeout(() => {
    toast.remove()
  }, 3000);
}


function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
