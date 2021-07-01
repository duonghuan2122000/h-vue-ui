<template>
  <input
    type="text"
    class="h-input"
    :class="{ 'has-error': hasError }"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "HInput",
  props: {
    /**
     * Text hint của input
     * CreatedBy: dbhuan (01/07/2021)
     */
    placeholder: {
      type: String,
      default: null,
    },

    /**
     * Xác định có hiển thị trạng thái input lỗi hay không
     * CreatedBy: dbhuan (01/07/2021)
     */
    hasError: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/hInput/HInput.scss";
</style>
