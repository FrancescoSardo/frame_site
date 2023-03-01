<script lang="ts">
export let label: string;
export let selected: boolean;
export let onClick: () => void;
export let cost: number;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="shop-btn" class:selected on:click={onClick}>
  <div class="label">{label}</div>
  <slot />
  {#if cost > 0}
    <div class="cost">+€ {cost}</div>
  {/if}
</div>

<style lang="scss">
.shop-btn{
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 1rem;
  height: 5rem;
  min-height: 5rem;

  width: 100%;
  border: 3px solid var(--color-var0);

  transition: border 0.3s ease-in-out, color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  font-weight: bolder;

  .label{
    color: var(--color-var0);
  }
  .cost {
    color: rgb(158, 155, 155);
    transition: color 0.3s ease-in-out;
  }

  &:not(.selected) {
    cursor: pointer;

    &:hover {
      background-color: #F5F5F7;
    }
  }

  &.selected{
    border: #0071E3 solid 3px;
    color: #0071E3;

    .label{
      color: #0071E3;
    }
    .cost {
      color: #0071E3;
    }
  }
}
</style>