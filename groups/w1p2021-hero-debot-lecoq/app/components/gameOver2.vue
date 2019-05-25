<template>
  <div class="big-header">
    <h1>Vous n'avez pas réussi a livrer les pizzas correctement </h1>
    <br />
    <img src="/assets/images/pizza-4.svg" class="pizza-4"/>
    <img src="/assets/images/pizza-5.svg" class="pizza-5"/>
    <img src="/assets/images/pizza-man.svg" class="pizza-man"/>
    <img src="/assets/images/pizza-part.svg" class="pizza-part"/>
    <img src="/assets/images/cut.svg" class="cut"/>
    <router-link class="button" to="/">Home</router-link>
  </div>
</template>

<style lang="scss">
    .pizza-4{
    position: absolute;
    top: 0%;
    right: 0%;
    animation-name: Move_pizza-1;
    animation-duration: 8s;
    animation-iteration-count: infinite;

    @keyframes Move_pizza-1 {
        0%{
            top: 0%;
            right: 0%;
            transform: rotate(0deg)
        }
        15%{
            right: 15%;
        }
        75%{
            right: 75%;
        }
        100%{
            top: 100%;
            right: 100%;
            transform: rotate(360deg)
        }
    }
}
.pizza-5{
    position: absolute;
    top: 50%;
    right: 50%;

    animation-name: Move_pizza-2;
    animation-duration: 20s;
    animation-iteration-count: infinite;

    @keyframes Move_pizza-2 {
        0%{
            top: 0%;
            right: 0%;
            transform: rotate(0deg)
        }
        15%{
            right: 55%;
        }
        75%{
            right: 65%;
        }
        100%{
            top: 100%;
            right: 70%;
            transform: rotate(360deg)
        }
    }
   
}
.pizza-man{
    position: absolute;
    right: 0%;

    animation-name: Move_man;
    animation-duration: 25s;
    animation-iteration-count: infinite;

    @keyframes Move_man {
        0%{
            right: 0%;
            transform: rotate(0deg)
        }
        100%{
            right: 100%;
            transform: rotate(360deg)
        }
    }
}
.pizza-part{
    position: absolute;
    right: 0%;
    top: 10%;

    animation-name: Move_part;
    animation-duration: 15s;
    animation-iteration-count: infinite;

    @keyframes Move_part {
        0%{
            right: 0%;
            transform: rotate(0deg)
        }
        15%{
            right: 15%;
        }
        25%{
            right: 25%;
        }
        75%{
            right: 75%;
        }
        100%{
            right: 100%;
            transform: rotate(360deg)
        }
    }
}
.cut{
    position: absolute;
    left: 0%;
    top: 78%;

    animation-name: Move_cut;
    animation-duration: 20s;
    animation-iteration-count: infinite;

    @keyframes Move_cut {
        0%{
            left: 0%;
            transform: rotate(0deg)
        }
        15%{
            left: 15%;
        }
        25%{
            left: 25%;
        }
        75%{
            left: 75%;
        }
        100%{
            left: 100%;
            transform: rotate(360deg)
        }
    }
}
</style>