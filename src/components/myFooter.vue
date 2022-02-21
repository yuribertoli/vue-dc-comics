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

        </div>

      </div>
    </div>

    <div class="bottom-footer">
    
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

  ul {
    height: $heightRow3;
    display: flex;
    flex-wrap: wrap;
    width: 40%;
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

</style>
