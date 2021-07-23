<template>
  <div class="p-2">
    <h-table :data="data" :columns="columns" />
  </div>
</template>

<script>
import HTable from "@/components/hTable/HTable.vue";
export default {
  components: {
    HTable,
  },
  data() {
    return {
      data: [
        {
          id: 1,
          name: "Dương Bằng Huân",
          age: 18,
        },
        {
          id: 2,
          name: "Dương Bằng Huân",
          age: 18,
        },
        {
          id: 3,
          name: "Dương Bằng Huân",
          age: 18,
        },
      ],
      columns: [
        {
          field: "id",
          label: "Mã",
        },
        {
          field: "name",
          label: "Họ và tên",
        },
        {
          field: "age",
          label: "Tuổi",
        },
      ],
    };
  },
};
</script>