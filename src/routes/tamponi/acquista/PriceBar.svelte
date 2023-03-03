<script lang="ts">
  let valore_corrente = 0;

  export let costo: number;

  let updater: NodeJS.Timer | null = null;
  let timeout: NodeJS.Timeout | null = null;

  $: {
    run_updater(costo);
  }

  function run_updater(_: any) {
    if (updater) clearInterval(updater);

    updater = setInterval(() => {
      if (valore_corrente === costo) {
        clearInterval(updater!);
        updater = null;
      } else {
        valore_corrente += Math.sign(costo - valore_corrente);
      }
    }, 20);

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      if (updater) {
        clearInterval(updater);
        updater = null;
        clearTimeout(timeout!);
        timeout = null;
      }

      valore_corrente = costo;
    }, 1000);
  }
</script>

<div class="pricebar">
  <div class="spacer-1" />
  <div class="container consegna desktop-only">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
      ><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
        d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
      /></svg
    >
    <div class="text cut">consegna gratuita garantita</div>
    <div class="link ">guarda le tempistiche</div>
  </div>
  <div class="container tempistica desktop-only">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
      ><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
        d="M45.9 42.1c3-6.1 9.6-9.6 16.3-8.7L307 64 551.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L426.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L307 64 223.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L24.1 170.6C4.8 165.1-4.7 143.4 4.2 125.5L45.9 42.1zM308.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L563 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C66 419.7 51 400.5 51 378.5v-167L178.6 248c27.8 8 57.6-3.8 72.5-28.6L305.9 128h2.2z"
      /></svg
    >
    <div class="text cut">politica di reso</div>
    <div class="link ">guarda le tempistiche</div>
  </div>
  <div class="spacer-5 desktop-only" />
  <div class="container prezzo">€{valore_corrente}</div>

  <div class="container carrello noselect">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
      ><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"
      /></svg
    >
    <div class="link">Aggiungi al carrello</div>
  </div>
  <div class="container ordina noselect">
    <div class="button">Ordina subito!</div>
  </div>
  <div class="spacer-1" />
</div>

<style lang="scss">
  .pricebar {
    height: var(--bar-height);
    max-height: var(--bar-height);
    width: 100vw;

    overflow: hidden;

    border-top: 2px solid black;
    box-sizing: border-box;

    background-color: #f5f5f7;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: fit-content;
      min-width: fit-content;

      font-size: small;

      flex: 1;

      svg {
        width: 2rem;
        height: 2rem;
      }

      .text {
        color: rgba(0, 0, 0, 0.46);
        text-align: center;
      }
    }

    .consegna {
      min-width: fit-content;
    }

    .tempistica {
      min-width: fit-content;
    }

    .prezzo {
      font-size: xx-large;
      font-weight: bold;

      width: 6rem;
      min-width: 6rem;
      align-items: flex-start;
    }

    .ordina {
      cursor: pointer;
      .button {
        text-align: center;
        background-color: #0085ff;
        color: white;

        padding: 1rem 2rem;
        border-radius: 0.5rem;

        font-size: large;
      }
    }
  }

  @media (max-width: 768px) {
    .pricebar {
      padding: 0 2rem;
      overflow-y: hidden;

      .desktop-only {
        display: none;
      }

      .container {
        flex: 1;
        width: fit-content;
        min-width: fit-content;
      }

      .ordina {
        .button {
          border-radius: 0.5rem;

          width: fit-content;

          font-size: small;
        }
      }
    }
  }
</style>
