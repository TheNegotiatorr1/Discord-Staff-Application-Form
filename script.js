const form = document.getElementById('staffForm');
const confirmation = document.getElementById('confirmation');

// Replace with your Discord webhook URL
const WEBHOOK_URL = "YOUR_DISCORD_WEBHOOK_URL";

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const age = document.getElementById('age').value;
  const experience = document.getElementById('experience').value.trim();
  const motivation = document.getElementById('motivation').value.trim();

  if (!username || !age || !experience || !motivation) {
    alert('Please fill in all fields!');
    return;
  }

  const payload = {
    content: `**New Staff Application**\n**Username:** ${username}\n**Age:** ${age}\n**Experience:** ${experience}\n**Motivation:** ${motivation}`
  };

  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    form.reset();
    confirmation.classList.remove('hidden');
  } catch (err) {
    alert("Failed to send application. Check your webhook URL.");
    console.error(err);
  }
});
