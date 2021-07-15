<template>
  <button class="h-button" :class="'is-' + type" v-on="listener">
    {{ text }}
  </button>
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
  computed: {
    /**
     * Các event của button component
     * @author CreatedBy: dbhuan (15/07/2021)
     */
    listener: function () {
      let _this = this;
      return {
        click: function () {
          _this.$emit("click");
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/hButton/HButton.scss";
</style>