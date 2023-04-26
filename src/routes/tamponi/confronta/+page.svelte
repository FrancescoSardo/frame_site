<script lang="ts">
  import Selector from "$lib/components/Selector.svelte";
  import { goto } from "$app/navigation";
</script>

<div class="confronta">
  <div class="testo">
    <div class="h1">Confronta i modelli</div>
    <div class="h2">
      ti serve un consiglio? manda un messaggio a questo numero +39 349302390
    </div>
  </div>
  <div class="content">
    <div class="left">
      <Selector
        options={[
          {
            label: "Specchietto",
            value: "specchietto",
          },
          {
            label: "Tamponi",
            value: "tamponi",
          },
          {
            label: "Tamponi",
            value: "tamponi",
          },
          {
            label: "Tamponi",
            value: "tamponi",
          },
        ]}
      />

     <!--  <div class="image">
        <!-- ////////
      </div> -->

      <div class="material-content">
        <div class="material">
          <div class="circle" />
          <div class="text">Carbonio</div>
        </div>
        <!--    <div class="material">
          <div class="circle" />
          <div class="text">Carbonio</div>
        </div> -->
      </div>

      <div class="line" />

      <div class="content-box">
        <div class="text">a partire da</div>
        <div class="price">99$</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="button"
          on:click={() => {
            goto("/frame_site/tamponi/panoramica");
          }}
        >
          acquista
        </div>
      </div>

      <div class="content-tec">
        <div class="spacer-1" />
        <div class="cc">
          <div class="text">Tecnico</div>
          <div class="line" />
        </div>
      </div>
      <div class="img" />
      <div class="img" />
      <div class="content-tec">
        <div class="spacer-1" />
        <div class="cc">
          <div class="text">Design</div>
          <div class="line" />
        </div>
      </div>
      <div class="img" />
      <div class="img" />
    </div>

    <div class="right">
      <Selector
        options={[
          {
            label: "Specchietto",
            value: "specchietto",
          },
          {
            label: "Tamponi",
            value: "tamponi",
          },
          {
            label: "Tamponi",
            value: "tamponi",
          },
          {
            label: "Tamponi",
            value: "tamponi",
          },
        ]}
      />

     <!--  <div class="image">
        <!-- //////// 
      </div> -->

      <div class="material-content">
        <div class="material">
          <div class="circle" />
          <div class="text">Carbonio</div>
        </div>
        <!--     <div class="material">
          <div class="circle" />
          <div class="text">Carbonio</div>
        </div> -->
      </div>

      <div class="line" />

      <div class="content-box">
        <div class="text">a partire da</div>
        <div class="price">99$</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="button"
          on:click={() => {
            goto("/frame_site/tamponi/panoramica");
          }}
        >
          acquista
        </div>
      </div>

      <div class="content-tec">
        <div class="cc">
          <div class="text">tecnico</div>
          <div class="line" />
        </div>
        <div class="spacer-1" />
      </div>
      <div class="img" />
      <div class="img" />
      <div class="content-tec">
        <div class="cc">
          <div class="text">tecnico</div>
          <div class="line" />
        </div>
        <div class="spacer-1" />
      </div>
      <div class="img" />
      <div class="img" />
    </div>
  </div>
</div>

<style lang="scss">
  .confronta {
    display: flex;
    width: 100%;
    height: 150vh;
    overflow-y: scroll;
    flex-direction: column;
    .testo {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 50vh;
      text-align: center;
      justify-content: center;
      align-items: center;
      /* gap: 2rem; */
      .h1 {
        font-size: 3rem;
      }
      .h2 {
        color: grey;
      }
    }
    .content {
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: 100vh;
      /* border: 1px solid black; */
      .right {
        justify-content: space-around;
        box-sizing: border-box;
        margin-top: 20px;
        
        height: 150vh;

        display: flex;
        
        align-items: center;
        flex-direction: column;
        flex: 1;
        .image {
          min-width: 15rem;
          min-height: 15rem;
          background-color: green;
          border-radius: 20%;
        }
        .material-content {
          display: flex;
          gap: 1rem;
          .material {
            display: flex;
            flex-direction: column;
            align-items: center;
            .circle {
              width: 2rem;
              height: 2rem;
              background-color: black;
              border-radius: 50%;
            }
          }
        }
        .line {
          max-width: 15rem;
          background-color: grey;
        }
        .content-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          .button {
            width: 5rem;
            text-align: center;
            user-select: none;
            cursor: pointer;
            border-radius: 1rem;

            font-size: small;
            box-sizing: border-box;
            padding: 0.2rem;
            // background-color: #0085ff;
            color: #0085ff;
            background-color: white;
            border: 2px solid #0085ff;
            transition: background-color 0.2s ease-in-out,
              color 0.2s ease-in-out;

            font-weight: bold;
          }

          .button:hover {
            background-color: #0085ff;
            color: white;
            // background-color: white;
            // color: #0085ff;
          }
          .text {
            color: grey;
          }
        }
        .content-tec {
          display: flex;
          text-align: left;
          width: 100%;
          max-height: 28px;
          .cc {
            flex: 5;
            display: flex;
            flex-direction: column;
            text-align: left;
            width: 100%;
            color: white;
            .line {
              /* width: 100vw; */
              max-width: 45vw;
              height: 30px;
              background-color: grey;
            }
            .text {
              font-size: x-large;
            }
          }
        }
        .img {
          background-color: grey;
          width: 100px;
          height: 100px;
          border-radius: 20%;
        }
      }
      .left {
        justify-content: space-around;
        box-sizing: border-box;
        margin-top: 20px;
        
        height: 150vh;

        display: flex;
        
        align-items: center;
        flex-direction: column;
        flex: 1;
        
        .image {
          min-width: 15rem;
          min-height: 15rem;
          background-color: red;
          border-radius: 20%;
        }
        .material-content {
          display: flex;
          gap: 1rem;
          .material {
            display: flex;
            flex-direction: column;
            align-items: center;
            .circle {
              width: 2rem;
              height: 2rem;
              background-color: black;
              border-radius: 50%;
            }
          }
        }
        .line {
          max-width: 15rem;
          background-color: grey;
        }
        .content-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          .button {
            width: 5rem;
            text-align: center;
            user-select: none;
            cursor: pointer;
            border-radius: 1rem;

            font-size: small;
            box-sizing: border-box;
            padding: 0.2rem;
            // background-color: #0085ff;
            color: #0085ff;
            background-color: white;
            border: 2px solid #0085ff;
            transition: background-color 0.2s ease-in-out,
              color 0.2s ease-in-out;

            font-weight: bold;
          }

          .button:hover {
            background-color: #0085ff;
            color: white;
            // background-color: white;
            // color: #0085ff;
          }
          .text {
            color: grey;
          }
        }
        .content-tec {
          max-height: 28px;
          display: flex;
          text-align: left;
          width: 100%;
          .cc {
            flex: 5;
            display: flex;
            flex-direction: column;
            text-align: left;
            width: 100%;
            .line {
              width: 100vw;
              max-width: 45vw;
              height: 3px;
              background-color: grey;
            }
            .text {
              font-size: x-large;
            }
          }
        }
        .img {
          background-color: grey;
          min-width: 100px;
          min-height: 100px;
          border-radius: 20%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .confronta{
    /*   .content{
        .left{
        height: 200vh;
      }
      .right{
        height: 200vh;
      }
      } */
    
    }

  }
</style>
