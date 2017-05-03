<template>
  <div>
      <pagination :total="total" :current="current" :callback="changePage"></pagination>
  </div>
</template>

<script>
import Pagination from './pagination/pagination.vue'
export default {
  data () {
    return {
      current: 1,
      total: 10
    }
  },
  components: {
    'pagination': Pagination
  },
  methods: {
    changePage: function (page) {
      this.current = page
    }
  }
}
</script>
