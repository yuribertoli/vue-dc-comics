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
            nome: "Characters"
            },
            {
            url: "#",
            nome: "Comics"
            },
            {
            url: "#",
            nome: "Movies"
            },
            {
            url: "#",
            nome: "TV"
            },
            {
            url: "#",
            nome: "Games"
            },
            {
            url: "#",
            nome: "Videos"
            },
            {
            url: "#",
            nome: "News"
            }
          ]
        },

        {
          titolo: "dc",
          links: [
            {
            url: "#",
            nome: "Terms Of Use"
            },
            {
            url: "#",
            nome: "Privacy policy (New)"
            },
            {
            url: "#",
            nome: "Ad Choices"
            },
            {
            url: "#",
            nome: "Advertising"
            },
            {
            url: "#",
            nome: "Jobs"
            },
            {
            url: "#",
            nome: "Subscriptions"
            },
            {
            url: "#",
            nome: "Talent Workshops"
            },
            {
            url: "#",
            nome: "CPSC Certificates"
            },
            {
            url: "#",
            nome: "Ratings"
            },
            {
            url: "#",
            nome: "Shop Help"
            },
            {
            url: "#",
            nome: "Contact Us"
            }
          ]
        },

        {
          titolo: "sites",
          links: [
            {
            url: "#",
            nome: "DC"
            },
            {
            url: "#",
            nome: "MAD Magazine"
            },
            {
            url: "#",
            nome: "DC Kids"
            },
            {
            url: "#",
            nome: "DC Universe"
            },
            {
            url: "#",
            nome: "DC Power Visa"
            }
          ]
        },

        {
          titolo: "shop",
          links: [
            {
            url: "#",
            nome: "Shop DC"
            },
            {
            url: "#",
            nome: "Shop DC Collectibles"
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
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 950px) {

  .top-footer .right-footer img {
    height: 350px;
    left: 20%;
    top: -10%;
  }    

}

@media (max-width: 750px) {

  .top-footer {

    .right-footer img {
      height: 300px;
      left: -10%;
      top: 0;
    }  

    .left-footer {
      width: 60%;
    }

    .right-footer {
      width: 40%;
    }
  }
}

@media (max-width: 690px) {

  .top-footer {

    .right-footer img {
      height: 200px;
      left: 0;
      top: 20%;
    }  

    .left-footer {
      width: 70%;
    }

    .right-footer {
      width: 30%;
    }
  }
}

@media (max-width: 600px) {

  .top-footer {

    .right-footer img {
      height: 100px;
    }  

    .left-footer {
      width: 80%;
    }

    .right-footer {
      width: 20%;
    }
  }

  .bottom-footer {
    .social-media h3 {
      display: none;
    }
  }
}

@media (max-width: 460px) {

  .top-footer {

    .right-footer img {
      height: 0px;
    }

    .left-footer {
      width: 100%;
    }

    .right-footer {
      width: 0%;
    }
  }

  .bottom-footer {

    .container {
      display: unset;

      .sign-up {
        display: none;
      }

      .social-media {
        display: unset;

        ul {
          line-height: 100px;
          justify-content: center;
        }
      }
    }
  }
}

</style>
