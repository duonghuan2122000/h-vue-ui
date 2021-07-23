<template>
  <th>
    {{ data.label }}
  </th>
</template>

<script>
export default {
  name: "HTh",
  props: {
    /**
     * Cấu hình của cột
     * @property {object} data - cấu hình của cột
     * @property {string} data.field - Tên trường map trong prop HTable.data
     * @property {string} data.label - Dùng làm tên hiển thị cho header cột trên bảng
     * @author CreatedBy: dbhuan (23/07/2021)
     */
    data: {
      type: Object,
    },
  },
};
</script>