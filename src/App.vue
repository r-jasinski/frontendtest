<template>
  <main>
    <section>
      <div class="game">
        <PlayerTag
          flag="images/flag.png "
          image="images/black_400.png"
          name="Guest2939666985"
          time="5:00"
        />
        <ChessBoard @squareSelect="handleSelect" />
        <PlayerTag
          flag="images/flag.png "
          image="images/white_400.png"
          is-player-turn
          name="Guest9241962816"
          time="4:58"
        />
        <span class="settings">
          <GearsSVG />
        </span>
      </div>
    </section>
    <section>
      <SideBar :notations="notations" />
    </section>
  </main>
</template>

<script lang="ts">
import ChessBoard from './components/ChessBoard.vue'
import GearsSVG from './assets/icons/gears.svg?component'
import PlayerTag from './components/PlayerTag.vue'
import SideBar from './components/SideBar.vue'

export type Notation = {
  square: number
  notation: string
}

export default {
  name: 'App',
  components: { ChessBoard, PlayerTag, GearsSVG, SideBar },
  data() {
    return {
      notations: [] as Notation[]
    }
  },
  methods: {
    /**
     * Handles the selection of a square on the game board.
     *
     * @param {number} square - The number of the square that was selected.
     * The squares are numbered from 1 to 64, starting from the top left of the board and going right and down.
     *
     * This method calculates the file (column) and rank (row) of the selected square in standard chess notation.
     * The file is a letter from 'a' to 'h' and the rank is a number from 1 to 8.
     * It then creates a Notation object with the square number and its notation, and adds it to the notations array.
     */
    handleSelect(square: number) {
      const file = String.fromCharCode(104 - ((square - 1) % 8))
      const rank = Math.ceil(square / 8)
      const data: Notation = { square, notation: `${file}${rank}` }
      this.notations.push(data)
    }
  }
}
</script>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
  min-width: 340px;
  display: flex;
  place-items: center;
  padding: 2rem;
  gap: 34px;
}
section {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
}
.game {
  height: 80%;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
}
.settings {
  position: absolute;
  right: 0;
  translate: 24px;
  opacity: 0.5;
}
@media screen and (max-width: 768px) {
  main {
    padding: 0;
    flex-direction: column;
  }
  .game {
    width: 100%;
    margin-bottom: 16px;
  }
  .settings {
    right: 8px;
    bottom: 0;
    translate: 0 128px;
    z-index: 999;
  }
}
</style>
