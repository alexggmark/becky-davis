<template>
  <section class="content-section" :class="{'reversed': reversed}">
    <div class="content-section__container">
      <div class="content-section__content">
        <h2 class="content-section__title">Operational Experience in Major Companies</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
      </div>
      <div class="content-section__image">
        <div class="content-section__button shadow"><img src="@/assets/img/next.svg"></div>
        <img class="content-section__image--inner" v-if="reversed" src="@/assets/img/mobile1.png">
        <img class="content-section__image--inner" v-else src="@/assets/img/lamp1.png">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['reversed'],
}
</script>

<style lang="scss">
.content-section {
  background-color: $color-white;
  margin: 1rem 0;

  &__container {
    @include container;
    display: flex;
    flex-flow: column-reverse;
    min-height: 600px;
  }

  &__content {
    background-color: $color-white;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 2rem;
    text-align: center;
  }

  &__image {
    align-items: center;
    box-sizing: border-box;
    background-color: $color-secondary;
    display: flex;
    justify-content: center;
    padding: 2rem 0 4rem;
    position: relative;
    width: 100%;

    img {
      max-height: 250px;
    }

    .reversed & {
      background-color: $color-quaternary;
    }
  }

  &__title {
    color: $color-black;
    font-family: $font-secondary;
    font-size: 36px;
    letter-spacing: 1px;
    line-height: 51px;
    margin: 1rem 0;
  }

  &__button {
    align-items: center;
    background-color: $color-black;
    border-radius: 100%;
    bottom: -18px;
    display: flex;
    height: 35px;
    justify-content: center;
    left: auto;
    position: absolute;
    width: 35px;

    img {
      transform: rotate(90deg);
      width: 14px;
    }
  }

  @media screen and (min-width: $breakpoint-md) {
    background: linear-gradient(90deg, #{$color-white} 50%, #{$color-secondary} 51%);

    &.reversed {
      background: linear-gradient(-90deg, #{$color-white} 50%, #{$color-quaternary} 51%);
    }

    &__container {
      flex-flow: row;
      min-height: 600px;

      .reversed & {
        flex-flow: row-reverse;
      }
    }

    &__content {
      padding: 0 5rem 0 0;
      text-align: left;
      width: 66.6%;

      .reversed & {
        padding: 0 0 0 5rem;
      }
    }

    &__image {
      justify-content: flex-end;
      padding: 0;
      width: 33.3%;

      img {
        max-height: 100%;
      }

      .reversed & {
        justify-content: flex-start;
      }

      &--inner {
        width: 60%;
      }
    }

    &__button {
      bottom: auto;
      left: -18px;

      .reversed & {
        left: auto;
        right: -18px;
      }

      img {
        transform: rotate(0deg);

        .reversed & {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>