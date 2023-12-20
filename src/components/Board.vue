<template>
  <div class="board" @keydown.prevent tabindex="0">
    <span
      v-for="i in Array.from({ length: 64 }, (_, i) => 64 - i)"
      :data-file="getDataFile(i)"
      :data-rank="getDataRank(i)"
      :key="i"
      @click="onSquareSelect(i)"
      tabindex="1"
    >
    </span>
    <GearsSVG />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Board',
  props: { onSquareSelect: { type: Function, required: true } },
  methods: {
    getDataRank(square: number) {
      const rank = Math.ceil(square / 8)
      return square % 8 === 0 ? rank : null
    },
    getDataFile(square: number) {
      return square <= 8 ? String.fromCharCode(104 - ((square - 1) % 8)) : null
    }
  }
})
</script>

<style scoped>
.board {
  height: 100%;
  aspect-ratio: 1;
  position: relative;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  clip-path: inset(0 0 0 0 round 4px);
  background-color: var(--color-gray-300);
  color: var(--color-green-300);
}
span:nth-child(1) ~ span:nth-child(-2n + 8),
span:nth-child(8) ~ span:nth-child(-2n + 15),
span:nth-child(16) ~ span:nth-child(-2n + 24),
span:nth-child(24) ~ span:nth-child(-2n + 31),
span:nth-child(32) ~ span:nth-child(-2n + 40),
span:nth-child(40) ~ span:nth-child(-2n + 47),
span:nth-child(48) ~ span:nth-child(-2n + 56),
span:nth-child(56) ~ span:nth-child(-2n + 65) {
  background-color: var(--color-green-300);
  color: var(--color-gray-300);
}
span {
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  position: relative;
  outline: none;
  border: none;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
}
span:focus:after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(255, 255, 51);
  opacity: 0.5;
}
span[data-rank]:focus:after {
  width: calc(100% - 4px);
  height: calc(100% - 4px);
}
span[data-rank]:after {
  content: attr(data-rank);
  position: absolute;
  padding-left: 4px;
  padding-top: 4px;
}
span[data-file]:before {
  content: attr(data-file);
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 4px;
}
</style>
