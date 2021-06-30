<template>
  <button class="h-button" :class="'is-' + type">{{ text }}</button>
</template>

<script>
export default {
  name: "HButton",
  props: {
    /**
     * Loại button (Background color của button).
     * Hỗ trợ: primary (default), danger, success, warning, secondary
     * @author
     * CreatedBy: dbhuan (29/06/2021)
     */
    type: {
      type: String,
      default: "primary",
      validator: (val) =>
        ["primary", "danger", "success", "warning", "secondary"].includes(val),
    },

    /**
     * Text của button
     * Mặc định là null
     * @author
     * CreatedBy: dbhuan (29/06/2021)
     */
    text: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/hButton/HButton.scss";
</style>