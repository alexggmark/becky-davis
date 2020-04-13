<template>
  <header class="header">
    <div class="header__container">
      <div class="header__burger-menu">///</div>
      <div class="header__logo">
        becky<span class="header__logo--highlight">davis</span>
      </div>
      <div class="header__navigation">
        <ul>
          <li><a href="#">Branding</a></li>
          <li><a href="#">Operations</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Portfolio</a></li>
        </ul>
        <button class="header__contact">Contact me</button>
      </div>
      <div class="header__burger-contact">///</div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header {
  background-color: $color-white;
  width: 100%;

  &__container {
    // @include container
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: calc(100% - 3rem);
    padding: 1rem 0;
  }

  &__logo {
    font-family: $font-secondary;
    font-size: 21px;
    letter-spacing: 1.5px;

    &--highlight {
      color: $color-primary;
    }
  }

  &__navigation {
    align-items: center;
    display: none;
    font-family: $font-secondary;
    text-transform: lowercase;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      float: left;
      font-size: 14px;
      margin: 0 1.5rem;
    }

    a {
      color: $color-black;
      text-decoration: none;

      &:hover {
        color: $color-primary;
      }
    }
  }

  &__contact {
    background-color: $color-primary;
    border: 0;
    border-radius: 3px;
    color: $color-white;
    font-family: $font-secondary;
    font-size: 14px;
    margin-left: 2.5rem;
    padding: 0.75rem 1.5rem;
  }

  &__burger-menu {
    display: block;
  }

  &__burger-contact {
    display: block;
  }

  @media screen and (min-width: $breakpoint-md) {
    &__navigation {
      display: flex;
    }

    &__burger-menu {
      display: none;
    }

    &__burger-contact {
      display: none;
    }
  }
}
</style>