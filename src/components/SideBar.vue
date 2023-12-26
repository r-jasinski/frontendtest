<template>
  <div class="sidebar">
    <div class="tabs">
      <span>
        <TimerSVG />
        Play
      </span>
      <span>
        <MoreSVG />
        New Game
      </span>
      <span>
        <ChessBoardSVG />
        Games
      </span>
      <span>
        <PlayersSVG />
        Players
      </span>
    </div>
    <div class="opening">
      Center Game: Beyer Gambit
      <span><BookSVG /><CompassSVG /></span>
    </div>
    <div class="move-list">
      <ol>
        <li
          v-for="({ notation }, index) in notations"
          :key="`${index + 1}-${notation}`"
        >
          <span>{{ notation }}</span>
        </li>
        <li ref="moveListRef"></li>
      </ol>
    </div>
    <div class="game-buttons">
      <span><HalfSVG />Draw<FlagSVG />Resign</span>
      <span><FirstSVG /><PreviousSVG /><NextSVG /><LastSVG /><FlipSVG /></span>
    </div>
    <div class="chat">
      <span>NEW GAME</span>
      <span>Guest2939666985 vs Guest9241962816 (5 min Unrated)</span>
    </div>
    <div class="chat-login">
      Please <a href="#">Sign Up</a> to use the chat.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ChessBoardSVG from '../assets/icons/board.svg?component'
import BookSVG from '../assets/icons/book.svg?component'
import CompassSVG from '../assets/icons/compass.svg?component'
import FirstSVG from '../assets/icons/first.svg?component'
import FlagSVG from '../assets/icons/flag.svg?component'
import FlipSVG from '../assets/icons/flip.svg?component'
import HalfSVG from '../assets/icons/half.svg?component'
import LastSVG from '../assets/icons/last.svg?component'
import MoreSVG from '../assets/icons/more.svg?component'
import NextSVG from '../assets/icons/next.svg?component'
import PlayersSVG from '../assets/icons/players.svg?component'
import PreviousSVG from '../assets/icons/previous.svg?component'
import TimerSVG from '../assets/icons/timer.svg?component'

import { Notation } from '../App.vue'

export default defineComponent({
  name: 'SideBar',
  components: {
    ChessBoardSVG,
    BookSVG,
    CompassSVG,
    FirstSVG,
    FlagSVG,
    FlipSVG,
    HalfSVG,
    LastSVG,
    MoreSVG,
    NextSVG,
    PlayersSVG,
    PreviousSVG,
    TimerSVG
  },
  props: {
    notations: Array as PropType<Notation[]>
  },
  watch: {
    notations: {
      deep: true,
      handler() {
        this.scrollToElement()
      }
    }
  },
  methods: {
    /**
     * Scrolls the move list into view.
     *
     * This method uses the `scrollIntoView` method of the `HTMLElement` interface to scroll the move list into view.
     * The `behavior` option is set to 'smooth', so the scrolling is done smoothly rather than instantly.
     */
    scrollToElement() {
      ;(this.$refs.moveListRef as HTMLElement).scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
})
</script>

<style scoped>
.sidebar {
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  background-color: var(--color-gray-900);
  font-size: 12px;
  color: var(--color-text-muted);
}
* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-gray-900) var(--color-bg-tertiary);
}
*::-webkit-scrollbar {
  width: 10px;
}
*::-webkit-scrollbar-track {
  background: var(--color-bg-tertiary);
  opacity: 0.4;
}
*::-webkit-scrollbar-thumb {
  background-color: var(--color-gray-900);
  border-radius: 10px;
  border: 2px solid var(--color-bg-tertiary);
  opacity: 0.4;
}
.tabs {
  width: 100%;
  height: 50px;
  display: flex;
}
.tabs span:first-of-type {
  color: var(--color-neutrals-white);
}
.tabs span {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: var(--color-bg-tertiary);
  /* color: var(--color-gray-300); */
}
.tabs span:first-of-type {
  background-color: transparent;
}
.opening {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  font-weight: 300;
  border-bottom: 1px solid var(--theme-background-color);
}
.opening span {
  display: flex;
  align-items: center;
  gap: 6px;
}
.move-list {
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  font-weight: 300;
  overflow-y: auto;
  overflow-x: hidden;
}
ol {
  list-style: none;
  padding: 0;
  margin: 0;
  counter-reset: item;
}
li {
  height: 24px;
  margin: 0 auto;
  padding-left: 32px;
  position: relative;
  line-height: 24px;
}
li:not(:last-of-type):nth-child(odd) {
  height: 24px;
  background-color: var(--color-bg-tertiary);
}
li:not(:last-of-type):before {
  content: counter(item) '\002E';
  counter-increment: item;
  position: absolute;
  translate: -16px;
  height: 24px;
}
li:last-of-type span {
  visibility: hidden;
  pointer-events: none;
}
li:nth-last-of-type(2) span {
  font-weight: 500;
  color: var(--color-neutrals-white);
}
li:nth-last-of-type(2) span:after {
  content: '';
  position: absolute;
  width: 42px;
  height: calc(100% - 4px);
  left: 28px;
  border-radius: 2px;
  background-color: var(--color-neutrals-white);
  border-bottom: 4px solid var(--color-bg-tertiary);
  opacity: 0.3;
}
.game-buttons {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  font-weight: 500;
  background-color: var(--color-bg-tertiary);
}
.game-buttons span {
  display: flex;
  gap: 8px;
}
.chat {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  font-weight: 300;
  flex-grow: 1;
}
.chat span:first-of-type {
  font-weight: 500;
}
.chat-login {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-end;
  padding: 0 12px;
  font-weight: 300;
  border-top: 1px solid var(--theme-background-color);
}
a {
  margin: 0 3px;
  color: var(--color-text-link);
  text-decoration: none;
}
</style>
