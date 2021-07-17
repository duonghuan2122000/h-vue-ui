<template>
  <label class="h-radio flex-row is-align-items-center">
    <span class="h-label">{{ label }}</span>
    <input type="radio" :name="name" />
    <span class="h-checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "Radio",
  props: {
    /**
     * Label cho radio
     * @author CreatedBy: dbhuan (17/07/2021)
     */
    label: {
      type: String,
    },

    /**
     * Tên radio
     * @author CreatedBy: dbhuan (17/07/2021)
     */
    name: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/hRadio/HRadio.scss";
</style>