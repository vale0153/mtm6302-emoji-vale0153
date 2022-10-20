const $emojis =
      document.getElementById('emojis')

const emojis = []

for (let i=2; i<50; i++){
  emojis.push(`<div class="emoji">${i}</div>`)
}

$emojis.innerHTML += emojis.join('')