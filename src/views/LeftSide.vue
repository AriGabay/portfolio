<template>
  <div class="left-side">
    <div class="my-img-container">
      <img src="@/assets/Ari_Photo.jpg" />
    </div>
    <div class="about-text">
      <h1>Ari Gabay</h1>
      <h2>Full Stack Developer</h2>
      <p>
        I’m a Full Stack Developer. I’m passionate about being a developer. I'm an alumnus of Unit 8200 as a system man.
        I worked at Bynet Data Communications for 10 months as System Administrator. I am also a graduate of Coding
        Academy I did a Full Stack course.
      </p>
    </div>
    <div class="social-media-and-links">
      <div class="social-media">
        <img class="icon linkedin" src="../assets/svgs/linkedin.svg" v-on:click="openLinks" />
        <img class="icon facebook" src="../assets/svgs/facebook.svg" v-on:click="openLinks" />
        <a class="icon" href="/files/CV.pdf" download="Ari-Gabay-Full-Stack-CV.pdf">
          <img class="pdf" src="../assets/svgs/pdf.svg" />
        </a>
      </div>
    </div>
    <div class="nav">
      <h2 v-on:click="renderRightSide">projects</h2>
      <h2 v-on:click="renderRightSide">about me</h2>
      <h2 v-on:click="renderRightSide">contact</h2>
    </div>
  </div>
</template>

<script>
import EventBus from '../service/eventBus';
// import aa from '../assets/files/aa.pdf';
export default {
  name: '',
  data() {
    return {};
  },
  methods: {
    openLinks: ({ target }) => {
      if (target.className.includes('linkedin')) {
        window.open('https://www.linkedin.com/in/ari-gabay-215292175/', '_blank');
      } else if (target.className.includes('facebook')) {
        window.open('https://www.facebook.com/arigabay', '_blank');
      } else if (target.className.includes('pdf')) {
        window.open('https://filebin.net/iiqjg6f6p1o823yu/Ari_Gabay_-_Full_Stack_CV.pdf', 'download');
      }
    },
    renderRightSide: (ev) => {
      console.log(ev.target.innerText);
      EventBus.$emit('RENDER_RIGHT_SIDE', ev.target.innerText);
    }
  },
  computed: {},
  components: {},
  created() {
    // this.pdf = aa;
  }
};
</script>
