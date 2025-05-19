const team = [];

async function getPokemon(name) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    if (!res.ok) throw new Error("Pokémon not found.");
    return await res.json();
  } catch (err) {
    alert(err.message);
    return null;
  }
}

async function addPokemon() {
  const input = document.getElementById('pokeInput');
  const name = input.value.trim().toLowerCase();
  if (!name) return;

  if (team.length >= 6) {
    alert("You can only have up to 6 Pokémon on your team.");
    input.value = '';
    return;
  }

  if (team.some(p => p.name === name)) {
    alert(`${name} is already on your team.`);
    input.value = '';
    return;
  }

  const data = await getPokemon(name);
  if (data) {
    team.push({
      name: data.name,
      sprite: data.sprites.front_default,
      types: data.types.map(t => t.type.name)
    });
    updateTeamPreview();
  }

  input.value = '';
}

function removePokemon(name) {
  const index = team.findIndex(p => p.name === name);
  if (index !== -1) {
    team.splice(index, 1);
    updateTeamPreview();
  }
}

function updateTeamPreview() {
  const list = document.getElementById('teamList');
  const countDisplay = document.getElementById('teamCount');
  countDisplay.textContent = `Team Size: ${team.length} / 6`;

  list.innerHTML = team.map(p => `
    <div class="preview-card">
      <img src="${p.sprite}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.types.join(' / ')}</p>
      <button onclick="removePokemon('${p.name}')">❌ Remove</button>
    </div>
  `).join('');
}

async function saveTeam() {
  if (team.length === 0) {
    alert("You need to add some Pokémon first!");
    return;
  }

  const teamName = prompt("Enter a name for your team:");
  if (!teamName) return;

  const saveBtn = document.querySelector("button[onclick='saveTeam()']");
  saveBtn.disabled = true;
  saveBtn.textContent = "Saving...";

  try {
    const res = await fetch('https://pokecombo-api.onrender.com/api/teams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ teamName, members: team.map(p => p.name) })
    });

    const result = await res.json();

    if (res.ok) {
      alert('Team saved successfully!');
      team.length = 0;
      updateTeamPreview();
    } else {
      alert('Error saving team: ' + (result.error?.message || "Unknown error."));
    }
  } catch (error) {
    alert('Failed to connect to the server.');
    console.error(error);
  } finally {
    saveBtn.disabled = false;
    saveBtn.textContent = "Save Team";
  }
}
