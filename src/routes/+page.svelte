<div class="product">
  <div class="left-navbar"></div>
  <div class="scroll-container">
    <div class="prova1"></div>
    <div class="prova2"></div>
  </div>
</div>

<script lang="ts">
  


</script>

<style lang="scss" >

.product {
  background-color: red;

  height: 100%;
  width: 100%;

  display: flex;

  .left-navbar{
    width: 5rem;
    height: 100%;
    background-color: var(--color-1);
  }

  .scroll-container {
    height: 100%;
    // width: 100%;
    flex: 1;

    overflow-y: scroll;

    .prova1{
      height: 100%;
      background-color: aqua;
    }

    .prova2{
      height: 100%;
      background-color: gold;
    }
  }
}
</style>