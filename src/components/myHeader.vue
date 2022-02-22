<template>
  <header class="container">

    <div class="left-header">
      <img src="../assets/img/dc-logo.png" alt="logo DC">
    </div>

    <div class="right-header">
      <nav>
        <ul>

          <li v-for="(item, index) in navbar" :key="index">
            <a @click="attivo(index)" :class="{'active': activeIndex === index}" :href="item.url">{{item.text}}</a>
          </li>
          
        </ul>
      </nav>
    </div>
    
  </header>
</template>

<script>
export default {

  name: 'myHeader',

  data() {
    return {

      activeIndex: 1,

      navbar: [
        {
          text: "characters",
          url: "https://www.google.com/"
        },
        {
          text: "comics",
          url: "#"
        },
        {
          text: "movies",
          url: "#"
        },
        {
          text: "tv",
          url: "#"
        },
        {
          text: "games",
          url: "#"
        },
        {
          text: "collectibles",
          url: "#"
        },
        {
          text: "videos",
          url: "#"
        },
        {
          text: "fans",
          url: "#"
        },
        {
          text: "news",
          url: "#"
        },
        {
          text: "shop",
          url: "#"
        },
      ]

    }
  },

  methods: {
    
    attivo(indice) {
      this.activeIndex = indice;
      this.$router.push(this.navbar[indice].url)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/css/variables.scss";

header {
  display: flex;
  justify-content: space-between;
  height: $heightRow1;

  .left-header {
    display: flex;
    align-items: center;
    img {
        height: calc($heightRow1 - 25%);
        width: auto;
      }
  }
  
  .right-header nav ul {
    display: flex;
    li a {
      display: inline-block;
      height: $heightRow1;
      line-height: $heightRow1;
      text-transform: uppercase;
      font-size: 0.7rem;
      padding: 0 10px;
        &:hover {
        background-color: rgba(2,130,249,0.1);
        border-bottom: 5px solid $mainColor;
        }
    }
  }
}

.active {
  color: $mainColor;
  border-bottom: 5px solid $mainColor;
}

</style>
