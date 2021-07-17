<template>
  <div
    class="h-dialog flex-row is-justify-content-center is-align-items-center"
  >
    <div class="h-dialog-background" @click="closeDialog"></div>
    <div class="h-dialog-content">
      <div
        class="
          h-dialog-close-button
          flex-row
          is-justify-content-center is-align-items-center
        "
        @click="closeDialog"
      >
        &times;
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {
    /**
     * Hàm đóng dialog
     * @author CreatedBy: dbhuan (17/07/2021)
     */
    closeDialog() {
      this.$emit("onClose");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/hDialog/HDialog.scss";
</style>