<template>
  <nav :class="['side-bar', { 'is-mobile': isMobile, 'is-opened': menuOpen }]">
    <button @click="toggleMenu" class="hamburger" v-if="isMobile">
      <span>{{ menuOpen ? 'x' : '☰' }}</span>
    </button>

    <img src="../assets/images/logo.svg" alt="Logo" class="logo" v-show="!isMobile" @click="toDashboard">

    <PgButton class="dashboard-btn" :icon="dashboardIcon" @click="toDashboard">
      {{ dashboardText }}
    </PgButton>

    <div class="content">
      <ul class="links">
        <li class="links-list" v-for="item in menuItems" :key="item.text">
          <a :href="item.link">
            <PgIcon :icon="item.icon" />
            <span class="text">{{ item.text }}</span>
          </a>
        </li>
      </ul>

      <ul class="links">
        <li class="links-list" v-for="item in configItems" :key="item.text">
          <a :href="item.link">
            <PgIcon :icon="item.icon" />
            <span class="text">{{ item.text }}</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import PgIcon from '@/components/ds/PgIcon.vue';
import PgButton from '@/components/ds/PgButton.vue';

export default {
  components: {
    PgIcon,
    PgButton
  },
  data() {
    return {
      isMobile: false,
      menuOpen: false,
      menuItems: [
        { icon: 'bars', text: 'Stock Levels', link: '/coming-soon' },
        { icon: 'file-check', text: 'Tasks', link: '/coming-soon' },
        { icon: 'calendar', text: 'Delivery Calendar', link: '/coming-soon' },
        { icon: 'management', text: 'Beer Recipes', link: '/coming-soon' },
        { icon: 'chart', text: 'Temp Analysis', link: '/coming-soon' },
        { icon: 'people', text: 'Team Roster', link: '/coming-soon' },
        { icon: 'history', text: 'Order History', link: '/coming-soon' }
      ],
      configItems: [
        { icon: 'settings', text: 'Settings', link: '/coming-soon' },
        { icon: 'sign-out', text: 'Sign Out', link: '/coming-soon' },
      ]
    };
  },
  created() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },

  computed: {
    dashboardText() {
      return !this.isMobile || this.menuOpen ? 'Dashboard' : ''
    },
    dashboardIcon() {
      return this.isMobile && !this.menuOpen ? 'dashboard' : ''
    }
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 768;
      this.menuOpen = false;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    toDashboard() {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss">
.side-bar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 50px;
  background-color: $primary-color;
  padding: 8px;
  transition: all 0.3s ease-in-out;
  z-index: 1000;

  @include media(sm) {
    width: 345px;
    padding: 40px 32px;
  }

  & > .hamburger {
    background: none;
    border: none;

    & > span {
      color: $white-color-high;
      font-size: 32px;
    }

    &:active {
      border: none;
    }

    &:hover {
      cursor: pointer;
    }
  }

  & > .dashboard-btn {
    width: 100%;
    height: auto;
    margin: 16px 0;

    @include media(sm) {
      margin: 45px 0;
      height: 64px;
    }
  }

  & > .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > .links {
      list-style: none;

      @include media(sm) {
        padding: 0 32px;
      }
  
      & > .links-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 32px;

        @include media(sm) {
          align-items: flex-start;
        }
  
        &:last-child {
          margin-bottom: 64px;
        }
  
        & > a {
          text-decoration: none;
          display: flex;
          align-items: center;
  
          & > span {
            color: $white-color-high;
            font-family: Poppins;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin-left: 24px;
          }
        }
      }
    }
  }

  &.is-opened {
    width: 345px;

    & > .content {
      & > .links {
        padding: 0 32px;
        & > .links-list {
          align-items: flex-start;
        }
      }
    }
  }
}


nav {
  &.is-mobile {
    .logo {
      display: none;
    }
    .text {
      display: none;
      
      @media(sm) {
        display: block;
      }
    }

    &.is-opened {
      .text {
        display: block;
      }
    }
  }

  .hamburger {
    display: block;
    
    @media(sm) {
      display: none;
    }
  }
}
</style>
