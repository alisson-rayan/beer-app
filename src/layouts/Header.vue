<template>
  <header class="top-header">
    <SideMenu />

    <div class="user">
      <img src="../assets/images/user.png" alt="user" class="user-image">

      <div class="info">
        <span class="name">
          Alisson Rayan
        </span>
        <span class="permission">
          Admin
        </span>
      </div>
    </div>
  </header>
</template>

<script>
import SideMenu from './SideMenu';

export default {
  components: {
    SideMenu
  }
}
</script>

<style lang="scss">
  .top-header {
    background-color: $primary-color;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    padding: 0 20px;
    align-items: center;

    @include media(sm) {
      height: 120px;
    }

    & > .user {
      display: grid;
      grid-template-areas: 'image info';
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 10px;

      & > .user-image {
        grid-area: image;
        border-radius: 50%;
        width: 40px;
        height: 40px;
      }

      & > .info {
        grid-area: info;
        display: grid;
        grid-template-rows: auto auto;
        gap: 4px;

        & > .name {
          font-family: 'Poppins';
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
          color: $white-color-high;
        }

        .permission {
          font-family: 'Poppins';
          color: $secondary-color;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
        }
      }
    }
  }
</style>
