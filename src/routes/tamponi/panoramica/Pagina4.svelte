<script>
  import foto from "$lib/assets/foto_manufactor.png";
</script>

<div class="pagina4">
  <div class="background_model"> <img src={foto} />
    <div class="manufactoring_container">
      <div class="left4">
        <div class="title">Manufactoring</div>
        <div class="text">
          Il tampone in carbonio aerodinamico è disponibile in diversi modelli,
          adatti alle diverse marche e modelli di moto. Grazie alla sua
          modularità, potrai scegliere il modello che meglio si adatta alle tue
          esigenze e alla tua moto
        </div>
        
        <span>
          Utilizzando le ultime tecnologie del mondo della stampa 3d affiancato da
          materiali tecnici (nylon caricato a carbonio) con tecniche di post
          processo finalizzate a migliorane ulteriormente la resistenza abbiamo
          ottenuto un prodotto dalle alte prestazioni
        </span>
      </div>
      <div class="right4">
        <div class="foto">
          
        </div>
        <div class="text">
          Inoltre, la sua installazione è semplice e veloce, e potrai farlo tu stesso senza dover ricorrere all'aiuto di un tecnico.
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .pagina4 {
    .background_model {
      /* border: 2px solid black; */
      transition: all ease-in 1s;
      width: 100%;
      height: calc(var(--vh, 1vh) * 100 - var(--navbar-height-2));
      position: sticky;
      img {
        position: absolute;
        top: 30%;
        left: 30%;
        object-fit:fill;
        opacity: 90%;
      }
      .manufactoring_container {
        display: flex;
        height: 100%;
        .left4{
          padding: 1rem;
          /* border: 2px solid black; */
          flex: 1;
          color: white;
          transition: all ease-in 1s;
          display: flex;
          flex-direction: column;
          gap: 5rem;
          .title{
            margin-top: 20px;
            font-size: xx-large;
            transition: all ease-in 2s;
          }
          .text{
            margin-top: 20px;
            font-size: x-large;
            transition: all ease-in 2s;
          }
          span{
            margin-top: 50px;
            font-size: x-large;
            text-align: left;
            transition: all ease-in 2s;
          }
        }
        .right4{
          padding: 1rem;
          /* border: 2px solid black; */
          flex: 1;
          color: white;
          transition: all ease-in 1s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6rem;
          .text{
            font-size: x-large;
            transition: all ease-in 2s;
          }
          .foto{
            /* padding: 2%; */
            width: 90%;
            /* height: 20%; */
            flex: 0.5;
            border-radius: 1%;
            box-sizing: border-box;
            background-color: grey;

          }
        }
      }
    }
    
  }
  @media (max-width: 768px) {
    .pagina4{
      .background_model{
      .manufactoring_container{
        .left4{
          .text{
            font-size: medium;
          }
          span{
            font-size: medium;
          }
        }
        .right4{
          .text{
            font-size: medium;
          }
        }
      }
    }
    }
  
  }
</style>
