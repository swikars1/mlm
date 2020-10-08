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
          :name="item.title" 
          :key="item.route"
          :to="item.route"
        >
          <Icon :type="item.icon" size="27" />
          <span>
            {{ item.title }}
          </span>
        </MenuItem>
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
          title: 'Payments',
          route: '/payments',
          icon: 'ios-card'
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
      activeName: 'Customers'
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
  },
  mounted() {
  }
}
</script>
<style lang="sass" scoped>
  @import "@/assets/stylesheets/variables.sass"
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
    background: linear-gradient(45deg, #94989c, white)
    span
      display: inline-block
      overflow: hidden
      width: 69px
      text-overflow: ellipsis
      white-space: nowrap
      vertical-align: bottom
      margin-left: 1rem
      transition: width .2s ease .2s
</style>