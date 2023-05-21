<script>
  

</script>
<div class="pagina5">
  <div class="text1">Quale scegliere?</div>
  <span id="ttt">
    abbiamo progettato 3 tipologie diverse di aletta da implementare sull’
    aletta, in modo tale da offrire un nuovo livello di personalizzarzione
  </span>
</div>

<style lang="scss">
  .pagina5 {
    /* border: solid 2px red; */
    display: flex;
    height: calc(var(--vh, 1vh) * 100 - var(--navbar-height-2));
    justify-content:center;
    align-items: center;
    flex-direction: column;
    transition: all ease-in 1s;
    .text1 {
      text-align: center;
      font-size: 10rem;

      /* transform: translateX(-10vh); */
      transition: all ease-in 1s;
      
    }
    span[id=ttt] {
      /* color: white; */
      font-size: 2rem;
      /* color: white; */
      text-align: center;
      margin: 2rem;
      
    }
  }
  @media (max-width: 768px) {
    .pagina5 {
      .text1 {
        font-size: 5rem;
      }
      span[id=ttt] {
        font-size: 1rem;
      }
    }
  }
</style>
