<template>
  <div>
    <ClientOnly>
      <ul>
        <li
          v-for="color of ['system', 'light', 'dark', 'sepia']"
          :key="color"
          :class="{
            preferred: !$colorMode.unknown && color === $colorMode.preference,
            selected: !$colorMode.unknown && color === $colorMode.value,
          }"
        >
          <component
            :is="`colors-icon-${color}`"
            @click="$colorMode.preference = color"
          />
        </li>
      </ul>
      <p>
        <ColorScheme placeholder="..." tag="span">
          Color mode: <b>{{ $colorMode.preference }}</b>
          <span v-if="$colorMode.preference === 'system'"
            >&nbsp;(<i>{{ $colorMode.value }}</i> mode detected)</span
          >
        </ColorScheme>
      </p>
    </ClientOnly>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: inline-block;
  padding: 5px;
}
p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}
.feather {
  width: 40px;
  height: 40px;
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -3px;
}
.preferred .feather {
  border-color: var(--color-primary);
  top: -3px;
}
.selected .feather {
  color: var(--color-primary);
}
</style>
