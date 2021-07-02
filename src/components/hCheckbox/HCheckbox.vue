<template>
  <div v-if="data && data.length > 0">
    <checkbox
      v-for="(item, index) in data"
      :key="index"
      class="mx-1"
      :label="item[displayField]"
    />
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";
export default {
  name: "HCheckbox",
  components: {
    Checkbox,
  },
  props: {
    /**
     * Data list checkbox
     * CreatedBy: dbhuan (02/07/2021)
     */
    data: {
      type: Array,
    },

    /**
     * Trường trong data dùng làm label hiển thị cho checkbox
     * CreatedBy: dbhuan (02/07/2021)
     */
    displayField: {
      type: String,
      default: "label",
    },
  },
};
</script>
