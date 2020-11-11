<template lang="pug">
  #cart
    b-table(:fields="fields" :items='items' striped hover).text-center
      template(v-slot:cell(del)="data")
        b-button(@click='delItem(data.index)')
          font-awesome-icon(:icon="['fab','google-plus']")
      template(v-slot:cell(img)="data")
        img(:src="data.item.img")
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: '商品名稱'
        },
        {
          key: 'price',
          label: '價格價格'
        },
        {
          key: 'img',
          label: '商品圖片'
        },
        {
          key: 'del',
          label: '刪除'
        }
      ]
    }
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  },
  methods: {
    delItem (index) {
      this.$store.commit('delItem', index)
    }
  }
}
</script>
