<template>
  <footer>

    <div class="top-footer">
      <div class="container">

        <div class="left-footer">
          <nav>
            <ul>
              <li></li>
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
  height: 300px;
}

</style>
