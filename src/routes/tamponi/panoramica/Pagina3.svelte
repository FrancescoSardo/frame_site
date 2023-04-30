<script>
  import foto_render from "$lib/assets/foto_render.png";
</script>

<div class="pagina3">
  <div class="left3" />
  <div class="right3">
    <div class="img">
      <img src={foto_render} />
    </div>
    <div class="text">
      Progettato per i motociclisti. Ogni motociclista ha esigenze diverse e
      stili di guida diverti, attravero gli innovativi sistemi di produzione
      affiancati da strumenti ingenieristici abbiamo sviluppato più soluzioni
      Per poterti personalizzare il tuo pezzo
    </div>
  </div>
</div>

<style lang="scss">
  .pagina3 {
    box-sizing: border-box;
    height: 100%;
    display: flex;

    .left3 {
      flex: 2;
      background-color: #0f0a485a;
      transition: all ease-in 2s;
    }
    .right3 {
      .img {
        img {
          width: 50vh;
          height: 50vh;
          object-fit: cover;
        }
      }
      flex: 1;
      color: white;
      transition: all ease-in 2s;
      .text {
        font-size: x-large;
        padding: 6%;
        transition: all ease-in 2s;
      }
    }
  }
</style>
