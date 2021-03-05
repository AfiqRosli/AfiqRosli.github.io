<template>
  <div class="d-flex align-center mt-5 mb-5">
    <div class="flex-grow-1 separator separator_left"></div>
    <h2 class="px-3">{{ text }}</h2>
    <div class="flex-grow-1 separator separator_right"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.separator {
  height: 1px;
  background: #e5e5e5;
}

.separator_left {
  background: -webkit-gradient(linear, 0 0, 100% 0, from(#e5e5e5), to(black));
}

.separator_right {
  background: -webkit-gradient(linear, 0 0, 100% 0, from(black), to(#e5e5e5));
}
</style>
