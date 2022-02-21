<template>
  <header class="container">

    <div class="left-header">
      <img src="../assets/img/dc-logo.png" alt="logo DC">
    </div>

    <div class="right-header">
      <nav>
        <ul>

          <li v-for="(item, index) in navbar" :key="index">
            <a :class="item.current? 'active' : '' " :href="item.url">{{item.text}}</a>
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

      navbar: [
        {
          text: "characters",
          url: "#",
          current: false
        },
        {
          text: "comics",
          url: "#",
          current: true
        },
        {
          text: "movies",
          url: "#",
          current: false
        },
        {
          text: "tv",
          url: "#",
          current: false
        },
        {
          text: "games",
          url: "#",
          current: false
        },
        {
          text: "collectibles",
          url: "#",
          current: false
        },
        {
          text: "videos",
          url: "#",
          current: false
        },
        {
          text: "fans",
          url: "#",
          current: false
        },
        {
          text: "news",
          url: "#",
          current: false
        },
        {
          text: "shop",
          url: "#",
          current: false
        },
      ]

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
        background-color: azure;
        }
    }
  }
}

.active {
  color: $mainColor;
  border-bottom: 5px solid $mainColor;
}

</style>
