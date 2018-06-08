<template>
  <div>
    <div v-if="isLifePage">
       <XiaoxiD />
    </div>
    <div v-if="isWorkPage">
       <XiaoxiL />
    </div>
  </div>
</template>


<script>
import XiaoxiD from './XiaoxiD'
import XiaoxiL from './XiaoxiL'
export default {
  name: 'GaContent',
  components: {
    XiaoxiD,
    XiaoxiL
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    isLifePage() {
      return this.id == 'XiaoxiD'
    },
    isWorkPage() {
      return this.id === 'XiaoxiL'
    }
  }
}
</script>

<style scoped>
</style>
