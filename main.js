((d, c) => {
  let commentBox = d.querySelector(".facebook-comentarios");

  const link = [
    "https://www.facebook.com/marty.lanier.543?hc_ref=ARTg82Hb4uGSwyLqoJYel5HYGyH9mFZ1-EjYWSh4YYucW_aTM0uhsSh_psoAdRFi6Dc",

    "https://www.facebook.com/voight.smith.3",

    "https://www.facebook.com/profile.php?id=100012993796609",

    "https://www.facebook.com/austin.stallings.503?hc_ref=ARS0iZMwhbGXhr0nEovK4ZAY2e00az_Uh9ChIjMxXunpnwkjVRf3Z3xVyIqaLjqc3TU",

    "https://www.facebook.com/brandon.spencer.1675275?hc_ref=ARRzL5eYYUDs4VxH5hHurf4xae-YVTXScUV3pv2y-IIHeCYVf9gioAPHlZXSQSafgBM",

    "https://www.facebook.com/jd.hewett.5",

    "https://www.facebook.com/profile.php?id=100024280865554",

    "https://www.facebook.com/profile.php?id=100004476977995",

    "https://www.facebook.com/vicky.babu.5817300",

    "https://www.facebook.com/hussnian.hussnian.1800"
  ];

  let comentario = [
    {
      name: "marty lanier",
      contenido:
        "I'm going to prove only that it's much cheaper than in other places",
      imagen: "./img/marty_lanier.png",
      link: link[0]
    },
    {
      name: "voight smith",
      contenido: "I will try my fortune",
      imagen: "./img/Voight_Smith.png",
      link: link[1]
    },
    {
      name: "Boba Key",
      contenido: "I already buy, ar' videos, I hope it works",
      imagen: "./img/zeze_montañes.jpg",
      link: link[2]
    },
    {
      name: "austin stallings",
      contenido: "I am 18 cm and I want to reach 20 cm, kkkkk",
      imagen: "./img/Austing_Stalling.png",
      link: link[3]
    },
    {
      name: "brandon spencer",
      contenido: "I try it, good change, but now I masturbate a lot kkjajajaj",
      imagen: "./img/Brandon_Spencer.png",
      link: link[4]
    },
    {
      name: "jd hewett",
      contenido: "with what is paid?",
      imagen: "./img/jd_hewett.png",
      link: link[5]
    },
    {
      name: "Sham Ali",
      contenido:
        "cuanto vale?",
      imagen: "./img/sham_ali.png",
      link: link[6]
    },

    {
      name: "Ali Sahil",
      contenido:
        "si sirve?",
      imagen: "./img/Ali_Sahil.png",
      link: link[7]
    },

    {
      name: "vicky babu",
      contenido:
        "Does it work yes or no?",
      imagen: "/img/orlando_ruiz arenas.png",
      link: link[8]
    },

    {
      name: "hussnian hussnian",
      contenido:
        "my results, just 3cm in 4 months.",
      imagen: "./img/hussnian_hussnian.png",
      link: link[9]
    }
  ];

  window.addEventListener("load", insertarComentario(comentario));

  function insertarComentario(data) {
    /**
     * Establece un tiempo ramdom para el setInterval
     */
    let time = random(2000, 8000);
    let s = setInterval(() => {
      let time = random(2000, 10000);
      let comentario = data.shift();

      /**
       * Si el array esta vacio limpia el setInterval
       */
      if (data.length === 0) {
        clearInterval(s);
      }

      setTimeout(() => {
        let miDiv = d.createElement("div");
        miDiv.innerHTML = templateComentario(comentario);
        commentBox.insertAdjacentElement("afterbegin", miDiv);
      }, time);
    }, time);
  }

  function templateComentario(obj) {
    let html = `
    <div class="facebook-box">
        <img class="facebook-box__img" src="${obj.imagen}" alt="">
        <div class="facebook-box__body">
          <span class="facebook-box__title"><a href="${obj.link}" target="blank">${obj.name}</a></span>
          <span class="facebook-box__content">${obj.contenido}</span>
          <div class="facebook-box__footer">
              <span class="enlace-facebook">Me gusta</span>
              <span> · </span>
              <span class="enlace-facebook">Responder</span>
              <span><img style="
                width:14px;
                height:14px;
                " src="img/like.png" alt=""></span>
              <span> · </span>
              <span id="numberLike"></span>
              <!-- <span> · </span> -->
              <span class="enlace-gris">Justo ahora</span>
            </div>
        </div>
    </div>
    `;
    return html;
  }
  /** Devuelve un numero aleatorio entre 2 numeros */
  function random(t, c) {
    return Math.round(Math.random() * (c - t) + t);
  }
})(document, console);
