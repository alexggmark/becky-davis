<template>
  <section class="welcome">
    <div class="welcome__container">
      <flickity carousel="flickity" :options="flickityOptions">
        <div class="welcome__tile" v-for="(item, index) in items" :key="item.title + index">
          <div class="welcome__tile--inner">
            <h3 class="welcome__callout">Branding</h3>
            <h2 class="welcome__title">{{item.title}}</h2>
            <img class="welcome__image" :src="item.img">
          </div>
          <div class="welcome__button shadow">
            <img src="@/assets/img/next.svg">
          </div>
        </div>
      </flickity>
    </div>
  </section>
</template>

<script>
import Flickity from 'vue-flickity'

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
        },
        {
          title: 'Operational Experience in Major Companies',
          img: require('@/assets/img/pad1.png'),
        }
      ],
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
      }
    }
  },
  components: {
    Flickity,
  }
}
</script>

<style lang="scss">
.welcome {
  &__container {
    @include container;
    padding: 2rem 0;
  }

  &__tile {
    background-color: $color-tertiary;
    border-radius: 3px;
    color: $color-white;
    display: flex;
    margin: 0 1.1rem 2rem;
    min-width: 240px;
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
}
</style>