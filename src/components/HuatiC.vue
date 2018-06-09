<template>
  <div>
    <div v-if="isLifePage">
       <HuatiT />
    </div>
    <div v-if="isWorkPage">
       <HuatiY />
    </div>
  </div>
</template>


<script>
import HuatiT from './HuatiT'
import HuatiY from './HuatiY'
export default {
  name: 'HuatiC',
  components: {
    HuatiT,
    HuatiY
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    isLifePage() {
      return this.id == 'HuatiT'
    },
    isWorkPage() {
      return this.id === 'HuatiY'
    }
  }
}
</script>

<style scoped>
</style>
