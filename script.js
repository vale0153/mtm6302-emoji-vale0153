const $emojis =
      document.getElementById('emojis')

const emojis = []

for (let i=129410; i<=129460; i++){
  emojis.push(`<div class="emoji">&#${i}</div>`)
}

$emojis.innerHTML += emojis.join('')