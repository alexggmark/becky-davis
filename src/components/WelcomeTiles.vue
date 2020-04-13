<template>
  <section class="welcome">
    <div class="welcome__container">
      <div class="welcome__selfie"></div>
      <div class="welcome__tile" v-for="item in items" :key="item.title">
        <div class="welcome__tile--inner">
          <h3 class="welcome__callout">Branding</h3>
          <h2 class="welcome__title">{{item.title}}</h2>
          <img class="welcome__image" :src="item.img">
        </div>
        <div class="welcome__button shadow">
          <img src="@/assets/img/next.svg">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Brand Stores without compromise',
          img: require('@/assets/img/comp1.png'),
        },
        {
          title: 'Operational Experience in Major Companies',
          img: require('@/assets/img/cup1.png'),
        },
        {
          title: 'Operational Experience in Major Companies',
          img: require('@/assets/img/pad1.png'),
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.welcome {
  &__container {
    @include container;
    display: flex;
    padding: 2rem 0;
  }

  &__tile {
    background-color: $color-tertiary;
    border-radius: 3px;
    color: $color-white;
    display: flex;
    margin: 0 1.1rem;
    position: relative;
    text-align: center;
    width: 25%;

    &--inner {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      padding: 1.1rem;
    }
  }

  &__callout {
    color: $color-primary;
    font-size: 12px;
    font-family: $font-secondary;
    letter-spacing: 1px;
    margin: 0;
  }

  &__title {
    color: $color-white;
    font-family: $font-tertiary;
    font-size: 19px;
    letter-spacing: 1.5px;
    line-height: 21px;
    margin: 1.8rem 0;
  }

  &__image {
    height: 190px;
    object-fit: cover;
    width: 100%;
  }

  &__button {
    align-items: center;
    background-color: $color-primary;
    bottom: -20px;
    border-radius: 100%;
    display: flex;
    width: 35px;
    justify-content: center;
    height: 35px;
    position: absolute;
    right: 50%;
    transform: translateX(50%);

    img {
      width: 14px;
    }
  }

  &__selfie {
    background: url('~@/assets/img/selfie.png');
    background-color: $color-tertiary;
    background-size: cover;
    border-radius: 3px;
    color: $color-white;
    margin: 0 1.1rem;
    width: 25%;
  }
}
</style>