<script setup lang="ts">

</script>

<template>
  <label class="label">
    <div class="toggle">
      <input class="toggle-state" type="checkbox" name="check" value="check">
      <div class="indicator"></div>
    </div>
  </label>
</template>

<style scoped>
.label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: var(--color-text-primary);
}

.label-text {
  margin-left: 1rem;
}

.toggle {
  isolation: isolate;
  position: relative;
  height: 2rem;
  width: 4rem;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--color-bg);
  box-shadow: -8px -4px 8px 0px var(--color-shadow2),
  8px 4px 12px 0px var(--color-shadow1),
  4px 4px 4px 0px var(--color-shadow1) inset,
  -4px -4px 4px 0px var(--color-shadow2) inset;

}

.toggle-state {
  display: none;
}

.indicator {
  height: 100%;
  width: 200%;
  background: var(--color-bg);
  border-radius: 12px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  box-shadow: -8px -4px 8px 0px var(--color-shadow2),
  8px 4px 12px 0px var(--color-shadow1);
}

.toggle-state:checked ~ .indicator {
  transform: translate3d(25%, 0, 0);
}
.toggle-state:checked ~ .toggle {
  background-color: var(--color-b);
}




</style>
