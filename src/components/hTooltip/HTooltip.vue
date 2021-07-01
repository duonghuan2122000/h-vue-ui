<template>
  <div class="h-tooltip">
    <slot />
    <span class="h-tooltiptext">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "HTooltip",
  props: {
    /**
     * Text của tooltip
     * CreatedBy: dbhuan (01/07/2021)
     */
    text: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/hTooltip/HTooltip.scss";
</style>
