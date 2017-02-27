<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>
<script>
    import header from 'components/header/header'
    import axios from 'axios'

    const ERR_OK = 0

    export default {
        data() {
            return {
                seller: {}
            }
        },
        created() {
            axios.get('static/data.json').then((res) => {
                this.seller = res.data.seller
            })
        },
        components: {
            'v-header': header
        }
    }

</script>


