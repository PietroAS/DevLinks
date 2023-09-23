function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar imagem
  let img = document.querySelector("#profile img")

  //alterar imagem
  if (html.classList.contains("light")) {
    ///se for light, imagem 1
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Imagem de usuario, Mayk brito. Com barba, oculos escuros e jaqueta preta. Fundo colorido"
    )
  } else {
    ///se não, imagem 2
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Imagem de usuario, Mayk brito. Com barba, oculos e camiseta preta. Fundo amarelo"
    )
  }
}
