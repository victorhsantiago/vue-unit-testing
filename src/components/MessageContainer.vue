<template>
  <MessageDisplay />
</template>

<script>
export default {
  components: {
    MessageDisplay: () => import('@/components/MessageDisplay.vue'),
  },
}
</script>
