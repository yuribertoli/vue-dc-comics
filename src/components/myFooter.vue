<template>
  <footer>

    <div class="top-footer">
      <div class="container">

        <div class="left-footer">
          <nav>
            <ul>
              <li v-for="(item, index) in colonne" :key="index">
                <h5>{{item.titolo}}</h5>
                <a v-for="(link, indice) in colonne[index].links" :key="indice" :href="link.url">{{link.nome}}</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="right-footer">
          <img src="../assets/img/dc-logo-bg.png" alt="logo dc">
        </div>

      </div>
    </div>

    <div class="bottom-footer">

      <div class="container">

        <div class="sign-up">
          <button>SIGN-UP NOW!</button>
        </div>

        <div class="social-media">

          <h3>FOLLOW US</h3>

          <ul>
            <li v-for="(item, index) in socials" :key="index">
              <img :src="item.sito" alt="social media">
            </li>
          </ul>

        </div>

      </div>

    </div>      

  </footer>
</template>

<script>
export default {
  name: 'myFooter',
  data() {
    return {

      colonne: [

        {
          titolo: "dc comics",
          links: [
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            }
          ]
        },

        {
          titolo: "dc",
          links: [
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            }
          ]
        },

        {
          titolo: "sites",
          links: [
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            }
          ]
        },

        {
          titolo: "shop",
          links: [
            {
            url: "#",
            nome: "Lorem"
            },
            {
            url: "#",
            nome: "Lorem"
            }
          ]
        }
      ],

      socials: [
        {
          sito: require("../assets/img/footer-facebook.png"),
          url: "#"
        },
        {
          sito: require("../assets/img/footer-periscope.png"),
          url: "#"
        },
        {
          sito: require("../assets/img/footer-pinterest.png"),
          url: "#"
        },
        {
          sito: require("../assets/img/footer-twitter.png"),
          url: "#"
        },
        {
          sito: require("../assets/img/footer-youtube.png"),
          url: "#"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/css/variables.scss";
.top-footer {
  background-image: url("../assets/img/footer-bg.jpg");
  height: $heightRow3;

  .container {
    display: flex;
  }

  .left-footer {
    width: 40%;

      ul {
      height: $heightRow3;
      display: flex;
      flex-wrap: wrap;
      padding: 40px 0;

      li {
        flex-basis: 33.333333%;
        display: flex;
        flex-direction: column;
        max-height: calc($heightRow3 - 60%);

        h5 {
          color: white;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        a {
          color: gray;
          padding: 3px 0;
          font-size: 0.6rem;
          &:hover {
            color: white;
          }
        }
      }
    } 
  } 

  .right-footer {
    width: 60%;
    position: relative;

    img {
      height: calc($heightRow3 + 50%);
      width: auto;
      position: absolute;
      left: 20%;
      top: -30%;
    }
  }
}

.bottom-footer {
  height: $heightRow1;
  background-color: #303030;
  position: relative;
  z-index: 2;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .sign-up {
    line-height: $heightRow1;

      button {
        background-color: transparent;
        border: 2px solid $mainColor;
        color: white;
        padding: 10px 15px;
        &:hover {
          background-color: rgba(2,130,249,0.2);
          cursor: pointer;
        }
      }
    }

    .social-media {
      display: flex;
      align-items: center;

      h3 {
        color: $mainColor;
        margin-right: 20px;
      }

      ul {
        display: flex;

        li {
          padding: 0 5px;

          img {
            width: 30px;
            height: auto;
          }
        }
      }
    }
  }

  
}

</style>
