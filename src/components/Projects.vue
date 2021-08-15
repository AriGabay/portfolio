<template>
  <div class="card-container">
    <ul class="flashcard-list">
      <li class="card-container draw" v-on:click="toggleCard(card)" v-for="(card, index) in cards" v-bind:key="index">
        <transition name="flip">
          <div v-bind:key="card.flipped" class="card">
            <div v-if="!card.flipped" class="front-card">
              <h2>{{ card.front }}</h2>
            </div>
            <div v-else class="back-card">
              <div class="img-container">
                <img width="250px" height="250px" :src="card.back.img" />
              </div>
              <ul class="tecnical-container">
                <li v-for="(tecnical, index) in card.back.tecnical" :key="index">{{ tecnical }}</li>
              </ul>
              <div class="link-container">
                <button @click="openLinks(card.back.link)">Link</button>
              </div>
            </div>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
// import Paginate from 'vuejs-paginate';
import { cards } from '../data/cards';
// import AirBnbImg from '../assets/projectImg/Airbnb.png';
// import MisterBitcon from '../assets/projectImg/Mister-Bitcon.jpg';
// import Appsus from '../assets/projectImg/Appsus.png';
// import BookShop from '../assets/projectImg/book-shop.jpg';
// import GuessMe from '../assets/projectImg/GuessMe.jpg';
// import Pacman from '../assets/projectImg/Pacman.jpg';
// import Minesweeper from '../assets/projectImg/Minesweeper.jpg';
// import ResponsiveBlog from '../assets/projectImg/ResponsiveBlog.jpg';
// import MemeGen from '../assets/projectImg/MemGen.png';
// const cards = [
// {
//   front: 'Airbnb',
//   back: {
//     img: AirBnbImg,
//     link: 'https://livepublic2.herokuapp.com/',
//     tecnical: ['Responsive-App', 'VueJs', 'Express', 'MongoDB', 'Heroku', 'Atlas']
//   },
//   flipped: false
// },
// {
//   front: 'Mister-Bitcon',
//   back: {
//     img: MisterBitcon,
//     link: 'https://arigabay.github.io/Mister-Bitcoin/',
//     tecnical: ['Responsive-App', 'ReactJS', 'Express']
//   },
//   flipped: false
// },
// {
//   front: 'Appsus',
//   back: {
//     img: Appsus,
//     link: 'https://arigabay.github.io/AppSus/',
//     tecnical: ['Responsive-App', 'VueJs', 'MailBox', 'Notes']
//   },
//   flipped: false
// },
// {
//   front: 'Book Shop',
//   back: {
//     img: BookShop,
//     link: 'https://arigabay.github.io/AppSus/',
//     tecnical: ['Pannel', 'Tables', 'Data Control']
//   },
//   flipped: false
// },
// {
//   front: 'GuessMe',
//   back: {
//     img: GuessMe,
//     link: 'https://arigabay.github.io/GuessMe/',
//     tecnical: ['Game', 'Mouse events']
//   },
//   flipped: false
// },
// {
//   front: 'Pacman',
//   back: {
//     img: Pacman,
//     link: 'https://arigabay.github.io/pacman/',
//     tecnical: ['Game', 'Mouse events']
//   },
//   flipped: false
// },
// {
//   front: 'Minesweeper',
//   back: {
//     img: Minesweeper,
//     link: 'https://arigabay.github.io/minesweeper-/',
//     tecnical: ['Game', 'Matrixes', 'Mouse Click events']
//   },
//   flipped: false
// },
// {
//   front: 'Responsive Blog',
//   back: {
//     img: ResponsiveBlog,
//     link: 'https://arigabay.github.io/Responsive/',
//     tecnical: ['Blog', 'Responsive-Blog', 'For Phone Pc Tablet']
//   },
//   flipped: false
// },
// {
//   front: 'Meme Generator',
//   back: {
//     img: MemeGen,
//     link: 'https://arigabay.github.io/Meme-generator/',
//     tecnical: ['Game', 'Responsive-Web', 'For Phone Pc Tablet']
//   },
//   flipped: false
// }
// ];
export default {
  name: 'projects',
  data() {
    return {
      cards: cards,
      error: false
    };
  },
  methods: {
    toggleCard: function(card) {
      card.flipped = !card.flipped;
    },
    openLinks: (link) => {
      window.open(link, '_blank');
    }
  },
  computed: {},
  components: {
    // Paginate
  },
  created() {}
};
</script>
