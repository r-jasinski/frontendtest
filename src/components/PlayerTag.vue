<template>
  <div class="player">
    <div class="tagline">
      <img :src="image" alt="Player image" />
      <div class="user-tagline">
        <span>{{ name }}</span>
        <img :src="flag" alt="Player flag" />
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <div :class="['clock', { inactive: !isPlayerTurn }]">
      <ClockSVG />
      <span>{{ time }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ClockSVG from '../assets/icons/clock.svg?component'

export default defineComponent({
  name: 'PlayerTag',
  components: { ClockSVG },
  props: {
    flag: { type: String, required: true },
    image: { type: String, required: true },
    isPlayerTurn: { type: Boolean, default: false },
    name: { type: String, required: true },
    time: { type: String, required: true }
  }
})
</script>

<style scoped>
.player {
  width: 100%;
  display: flex;
  align-items: flex-start;
  background-color: transparent;
  color: var(--color-neutrals-white);
  font-size: 14px;
}
.tagline {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 5px;
}
img {
  width: 40px;
  aspect-ratio: 1;
  margin-right: 10px;
}
.user-tagline {
  display: flex;
  align-items: baseline;
  gap: 5px;
}
.user-tagline img {
  width: 18px;
  height: 14px;
  margin: 0;
  border-radius: 1px;
}
ul {
  display: flex;
  gap: 2px;
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  width: 4px;
  height: 10px;
  background-color: var(--color-neutrals-white);
  border-radius: 1px;
}
.clock {
  width: 124px;
  height: 40px;
  padding: 10px 17px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  border-radius: 3px;
  background-color: var(--color-neutrals-white);
  color: var(--color-gray-900);
  font-size: 24px;
}
.inactive {
  color: var(--color-neutrals-white);
  background-color: var(--color-gray-900);
}
.inactive span {
  opacity: 0.5;
}
.inactive svg {
  opacity: 0;
  pointer-events: none;
}
</style>
