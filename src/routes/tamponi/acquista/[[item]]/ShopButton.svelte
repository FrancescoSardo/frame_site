<script lang="ts">
export let label: string;
export let selected: boolean;
export let onClick: () => void = () => {};
export let cost: number;
export let no_pointer: boolean = false;
export let no_hover: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="shop-btn" class:selected class:no_pointer class:no_hover on:click={onClick}>
  <div class="label">{label}</div>
  <slot />
  <div class="spacer-1"></div>
  <div class="cost">{cost == 0 ? "" : `+€ ${cost}` }</div>
</div>

<style lang="scss">
.shop-btn {
  user-select: none;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 1rem;
  height: 5rem;
  min-height: 5rem;

  width: 100%;
  border: 3px solid var(--color-var0);

  gap: 1rem;

  transition: border 0.3s ease-in-out, color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  font-weight: bolder;

  .label{
    color: var(--color-var0);

    width: 12rem;
  }
  .cost {
    color: rgb(158, 155, 155);
    transition: color 0.3s ease-in-out;

    min-width: 5rem;
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
  @media (max-width: 768px) {
    .label{
      color: var(--color-var0);

      min-width: 8rem;
    }
  }
}


.shop-btn:not(.no_pointer) {
  &:not(.selected) {
    cursor: pointer;
  }
}

.shop-btn:not(.no_hover) {
  &:not(.selected) {
    &:hover {
      background-color: #F5F5F7;
    }
  }
}
</style>