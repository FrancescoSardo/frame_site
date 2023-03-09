<script lang="ts">
  import Selector from "$lib/components/Selector.svelte";

</script>
<div class="confronta">
  <div class="testo">
    <div class="h1">Confronta i modelli</div> 
    <div class="h2">ti serve un consiglio? manda un messaggio a questo numero  +39 349302390</div> 
  </div>
  <div class="content">
    <div class="left"><Selector options={
      [{
        label: "Specchietto",
        value: "specchietto"
      },
      {
        label: "Tamponi",
        value: "tamponi"
      },
      {
        label: "Tamponi",
        value: "tamponi"
      },
      {
        label: "Tamponi",
        value: "tamponi"
      }]
    } /></div>
    
    <div class="right"><Selector options={
      [{
        label: "Specchietto",
        value: "specchietto"
      },
      {
        label: "Tamponi",
        value: "tamponi"
      }]
    } /></div>
  </div>
</div>

<style lang="scss">
.confronta{
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  flex-direction: column;
  .testo{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 50vh;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .h1{
      font-size: 3rem;
    }
    .h2{
      color: grey;
    }
  }
  .content{
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    /* border: 1px solid black; */
    .right{
      flex: 1;
      height: 100%;
      
      display: flex;
      justify-content: center;
    }
    .left{
      flex: 1;
      height: 100%;
      
      display: flex;
      justify-content: center;
      
    }
  }
}
</style>
