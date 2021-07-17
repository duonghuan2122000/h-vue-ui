<template>
  <input
    type="text"
    class="h-input"
    :class="{ 'has-error': hasError }"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
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

    /**
     * Giá trị của input
     * @author CreatedBy: dbhuan (17/07/2021)
     */
    value: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/hInput/HInput.scss";
</style>
