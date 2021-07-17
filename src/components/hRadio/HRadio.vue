<template>
  <div v-if="data && data.length > 0">
    <radio
      v-for="(item, index) in data"
      :key="index"
      class="mx-1"
      :label="item[displayField]"
      :name="name"
    />
  </div>
</template>

<script>
import Radio from "./Radio.vue";
export default {
  name: "HRadio",
  components: {
    Radio,
  },
  props: {
    /**
     * Data list radio
     * @author CreatedBy: dbhuan (17/07/2021)
     */
    data: {
      type: Array,
    },

    /**
     * Trường trong data dùng làm label hiển thị cho radio
     * @author CreatedBy: dbhuan (17/07/2021)
     */
    displayField: {
      type: String,
      default: "label",
    },

    /**
     * Trường dùng tên cho radio
     * @author CreatedBy: dbhuan (17/07/2021)
     */
    name: {
      type: String,
      default: Math.random().toString(36).replace(/\W/g, "-"),
    },
  },
};
</script>