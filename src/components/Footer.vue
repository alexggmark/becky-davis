<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__column">
        <div class="footer__title">
          Col 1
        </div>
        <ul class="footer__links">
          <li><a href="#">Branding</a></li>
          <li><a href="#">Operations</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Portfolio</a></li>
        </ul>
      </div>
      <div class="footer__column">
        <div class="footer__title">
          Col 1
        </div>
        <ul class="footer__links">
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
      <div class="footer__column">
        <div class="footer__title">
          Col 1
        </div>
        <ul class="footer__links">
          <li><a href="#">(319) 555-0115</a></li>
          <li><a href="#">john.gardner@example.com</a></li>
          <li><a href="#">Marjorie Richards</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
  background-color: $color-white;
  padding: 4rem 0;
  width: 100%;

  &__container {
    @include container;
    align-items: center;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }

  &__column {
    padding: 0 1rem;
    width: calc(100% - 2rem);
  }

  &__title {
    border-bottom: 2px solid $color-black;
    font-family: 'Font2';
    font-size: 20px;
    padding: 0.75rem 0;
  }

  &__links {
    list-style-type: none;
    padding-left: 0;

    li {
      padding: 0.35rem 0;
    }

    a {
      color: $color-black;
      text-decoration: none;

      &:hover {
        color: $color-primary;
      }
    }
  }

  @media screen and (min-width: $breakpoint-md) {
    &__container {
      align-items: flex-start;
      flex-flow: row;
    }

    &__column {
      width: 33%;
    }
  }
}
</style>