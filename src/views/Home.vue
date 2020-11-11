<template lang="pug">
  #Home
    b-container
      b-row.justify-content-lg-center
        b-col( lg="4" v-for="(item, index) in products" :key="index")
          b-card(:title='item.name' :sub-title="item.price"  :img-src="item.img")
            b-button(@click="buyItem(item)") 購買 &emsp;
              font-awesome-icon(:icon="['far', 'gem']" )
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      products: [
        {
          name: '男一',
          price: '200',
          img: 'https://e.rimg.com.tw/s1/f/a3/3f/22043753878335_250_m.jpg'
        },
        {
          name: '男一',
          price: '8800',
          img: 'https://e.rimg.com.tw/s1/f/a3/3f/22043753878335_250_m.jpg'
        },
        {
          name: '男一',
          price: '1100',
          img: 'https://e.rimg.com.tw/s1/f/a3/3f/22043753878335_250_m.jpg'
        },
        {
          name: '男一',
          price: '700',
          img: 'https://e.rimg.com.tw/s1/f/a3/3f/22043753878335_250_m.jpg'
        },
        {
          name: '男一',
          price: '800',
          img: 'https://e.rimg.com.tw/s1/f/a3/3f/22043753878335_250_m.jpg'
        },
        {
          name: '男一',
          price: '500',
          img: 'https://e.rimg.com.tw/s1/f/a3/3f/22043753878335_250_m.jpg'
        }

      ]
    }
  },
  methods: {
    buyItem (item) {
      this.$store.commit('addItem', item)
    }
  }
}
</script>
