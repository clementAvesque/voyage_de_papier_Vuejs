<template>
  <div class="game-container">
    <h1>Jeu de Mémoire</h1>
    <div class="grid">
      <div v-for="(card, index) in cards" :key="index" class="card" 
           :class="{ flipped: card.flipped || card.matched }"
           :style="{ backgroundColor: card.flipped || card.matched ? card.color : '#ddd' }"
           @click="flipCard(index)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  data() {
    return {
      colors: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#FFC300'],
      cards: [],
      flippedCards: []
    };
  },
  created() {
    this.initializeGame();
  },
  methods: {
    initializeGame() {
      let deck = [...this.colors, ...this.colors]
        .sort(() => Math.random() - 0.5)
        .map(color => ({ color, flipped: false, matched: false }));
      this.cards = deck;
    },
    flipCard(index) {
      let card = this.cards[index];
      if (card.flipped || card.matched || this.flippedCards.length >= 2) return;
      
      card.flipped = true;
      this.flippedCards.push({ index, color: card.color });
      
      if (this.flippedCards.length === 2) {
        setTimeout(this.checkMatch, 1000);
      }
    },
    checkMatch() {
      let [first, second] = this.flippedCards;
      if (first.color === second.color) {
        this.cards[first.index].matched = true;
        this.cards[second.index].matched = true;
      } else {
        this.cards[first.index].flipped = false;
        this.cards[second.index].flipped = false;
      }
      this.flippedCards = [];
    }
  }
};
</script>

<style>
.game-container {
  text-align: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  gap: 10px;
  justify-content: center;
}
.card {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s;
}
</style>
