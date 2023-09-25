function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar imagem
  let img = document.querySelector("#profile img")

  //alterar imagem
  if (html.classList.contains("light")) {
    ///se for light, imagem 1
    img.setAttribute("src", "./assets/pi-light2.jpg")
    img.setAttribute(
      "alt",
      "Imagem de usuario, Pietro. Com barba, blusa vermelha. ao céu aberto"
    )
  } else {
    ///se não, imagem 2
    img.setAttribute("src", "./assets/pi-dark2.jpg")
    img.setAttribute(
      "alt",
      "Imagem de usuario, Pietro. Com barba, blusa preta. Fundo decorado com luzes"
    )
  }
}
