<template>
  <tr>
    <td v-for="(column, index) in columns" :key="index" :data-title="column.label">
      {{ data[column.field] }}
    </td>
  </tr>
</template>

<script>
export default {
  name: "HRow",
  props: {
    /**
     * Data của một object trong prop HTable.data
     * @author CreatedBy: dbhuan (23/07/2021)
     */
    data: {
      type: Object,
    },

    /**
     * Prop HTable.columns truyền sang
     * @author CreatedBy: dbhuan (23/07/2021)
     */
    columns: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/hTable/HTable.scss";
</style>