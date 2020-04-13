<template>
  <section class="content-section" :class="{'reverse': reversed}">
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
  background: linear-gradient(90deg, #{$color-white} 50%, #{$color-secondary} 51%);
  margin: 1rem 0;

  &.reverse {
    background: linear-gradient(-90deg, #{$color-white} 50%, #{$color-quaternary} 51%);
  }

  &__container {
    @include container;
    display: flex;
    min-height: 600px;

    .reverse & {
      flex-flow: row-reverse;
    }
  }

  &__content {
    background-color: $color-white;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 0 5rem 0 0;
    width: 66.6%;

    .reverse & {
      padding: 0 0 0 5rem;
    }
  }

  &__image {
    align-items: center;
    box-sizing: border-box;
    background-color: $color-secondary;
    display: flex;
    justify-content: flex-end;
    position: relative;
    width: 33.3%;

    .reverse & {
      background-color: $color-quaternary;
      justify-content: flex-start;
    }

    &--inner {
      width: 60%;
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
    display: flex;
    height: 35px;
    justify-content: center;
    left: -18px;
    position: absolute;
    width: 35px;

    .reverse & {
      left: auto;
      right: -18px;
    }

    img {
      width: 14px;

      .reverse & {
        transform: rotate(180deg);
      }
    }
  }
}
</style>