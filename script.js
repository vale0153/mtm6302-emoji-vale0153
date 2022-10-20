const $emojis =
      document.getElementById('emojis')

const emojisHTML = []

for (let i=129410; i<=129460; i++){
  emojisHTML.push(`<div class = "emoji">${'&#'+i}<span class="size">${i}</span></div>`)
  }

$emojis.innerHTML += emojisHTML.join('')