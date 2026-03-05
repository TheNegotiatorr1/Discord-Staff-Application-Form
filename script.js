const form = document.getElementById('staffForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const userId = document.getElementById('userId').value.trim();
  const age = document.getElementById('age').value;
  const experience = document.getElementById('experience').value.trim();
  const position = document.getElementById('position').value.trim();

  if (!username || !userId || !age || !experience || !position) {
    alert('Please fill in all fields!');
    return;
  }

  console.log({ username, userId, age, experience, position });

  form.reset();
  confirmation.classList.remove('hidden');
});