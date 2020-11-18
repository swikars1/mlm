<template>
  <Layout>
    <Sider>
      <Menu 
        class="menu-item" 
        :active-name="activeName"
      >
        <div class="width-100 logo-wraper">
          <img class="width-100" src="https://picsum.photos/300/100">
        </div>
        <MenuItem 
          v-for="item in menus" 
          :name="item.route" 
          :key="item.route"
          :to="item.route"
        >
          <Icon :type="item.icon" size="27" />
          <span>
            {{ item.title }}
          </span>
        </MenuItem>
        <div class="last-menuitem" @click="handleLogout">
          <Icon type="ios-log-out" size="27" />
          <span>Logout</span>
        </div>
      </Menu>
    </Sider>
    <Content>
      <router-view
        :key="$route.fullPath"
        class="outer-container"
      />
    </Content>
  </Layout>
</template>

<script>
import { Layout, Sider, Content, Menu, MenuItem, Icon } from 'view-design'

export default {
  data() {
    return {
      menus: [
        {
          title: 'Dashboard',
          route: '/dashboard',
          icon: 'md-analytics'
        },
        {
          title: 'Customers',
          route: '/customers',
          icon: 'ios-people'
        },
        {
          title: 'Retailers',
          route: '/retailers',
          icon: 'ios-briefcase'
        },
        {
          title: 'Retailer Types',
          route: '/retailer-type',
          icon: 'ios-briefcase'
        },
        {
          title: 'Payments',
          route: '/payments',
          icon: 'ios-card'
        },
        {
          title: 'Product Categories',
          route: '/category',
          icon: 'ios-cart'
        },
        {
          title: 'Products',
          route: '/products',
          icon: 'ios-cart'
        },
        {
          title: 'Users',
          route: '/users',
          icon: 'md-people'
        },
      ],
      activeName: this.$route.path
    }
  },
  components: {
    Layout,
    Sider,
    Content,
    Menu,
    MenuItem,
    Icon
  },
  computed: {

  },
  methods: {
    handleLogout() {
      this.$store.dispatch('authStore/authLogout').then(() => {
        this.$router.push('/login')
      })
    }
  },
  mounted() {
  }
}
</script>
<style lang="sass" scoped>
  @import "@/assets/stylesheets/variables.sass"
  .ivu-layout-sider
    max-width: 21.3rem !important
    flex: 0 0 21.3rem !important
  .logo-wraper
    height: 67px
  .ivu-menu-item
    display: flex
    place-items: center
  /deep/.ivu-layout-sider-children
    position: fixed
  .menu-item
    height: 100%
    width: $menu-width !important
    background: linear-gradient(45deg, #dddddd, white)
    span
      display: inline-block
      overflow: hidden
      width: 100%
      text-overflow: ellipsis
      white-space: nowrap
      vertical-align: bottom
      margin-left: 1rem
      transition: width .2s ease .2s
  .last-menuitem
    display: flex
    position: absolute
    bottom: 0
    padding: 14px 24px
    cursor: pointer
    width: 100%
    place-items: center
    border-top: 2px solid #cccaca
</style>