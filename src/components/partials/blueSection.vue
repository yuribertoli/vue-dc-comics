<template>
  <main>

    <div class="info">
      <div class="container">
        <ul>
          <li v-for="(info, index) in infos" :key="index">
            <img :class="{'smaller': info.text == 'dc power visa'}" :src="info.img" :alt="info.img">
            <a :href="info.url">{{info.text}}</a>
          </li>
        </ul>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: 'blueSection',
  
  data() {
    return {
      infos: [
        {
        img: require("../../assets/img/buy-comics-digital-comics.png"),
        url: "#",
        text: "digital comics"
        },
        {
        img: require("../../assets/img/buy-comics-merchandise.png"),
        url: "#",
        text: "dc merchandise"
        },
        {
        img: require("../../assets/img/buy-comics-subscriptions.png"),
        url: "#",
        text: "subscription"
        },
        {
        img: require("../../assets/img/buy-comics-shop-locator.png"),
        url: "#",
        text: "comic shop locator"
        },
        {
        img: require("../../assets/img/buy-dc-power-visa.svg"),
        url: "#",
        text: "dc power visa"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/css/variables.scss";

.info {
  background-color: $mainColor;
  height: $heightRow2;

  ul {
    display: flex;
    justify-content: space-around;
    height: $heightRow2;
    position: relative;
    z-index: 2;

    li {
      display: flex;
      align-items: center;

      img {
      height: 40px;
      width: auto;
      }
      a {
        color: white;
        text-transform: uppercase;
        font-size: 0.8rem;
        white-space: nowrap;
        padding-left: 5px;
      }
      .smaller {
        height: 30px;
        width: auto;
      }
    } 
  }
}

@media (max-width: 900px) {

    li {
        flex-direction: column;
        justify-content: center;

        .smaller {
          margin-bottom: 10px;
          transform: translateY(10px);
        }
    }

}

@media (max-width: 730px) {

  .container {
    overflow-x: hidden;
    li {
      margin: 0 30px;
    }
  }
    
}

@media (max-width: 600px) {

  .container li {
      margin: 0 110px;
  }
}

</style>
