<template>
  <div>
    <table class="h-table">
      <thead>
        <tr>
          <h-th
            v-for="(column, index) in columns"
            :key="index"
            :data="column"
          />
        </tr>
      </thead>

      <tbody>
        <h-row
          v-for="(item, index) in data"
          :key="index"
          :columns="columns"
          :data="item"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import HTh from "./HTh.vue";
import HRow from "./HRow.vue";
export default {
  name: "HTable",
  components: {
    HTh,
    HRow,
  },
  props: {
    /**
     * Data dữ liệu của bảng
     * @example
     * data = [
     *  {
     *      id: 1,
     *      name: "Dương Bằng Huân",
     *      age: 21
     *  },
     *  {
     *      id: 1,
     *      name: "Dương Bằng Huân",
     *      age: 21
     *  },
     *  {
     *      id: 1,
     *      name: "Dương Bằng Huân",
     *      age: 21
     *  },
     * ]
     * @author CreatedBy: dbhuan (23/07/2021)
     */
    data: {
      type: Array,
    },

    /**
     * Cấu hình các cột của bảng
     * @property {Array} columns - Cấu hình các cột của bảng
     * @property {string} columns[].field - Tên trường map trong prop data
     * @property {string} columns[].label - Dùng làm tên hiển thị cho header cột trên bảng
     * @example
     * columns = [
     *  {
     *      field: "id",
     *      label: "Mã"
     *  },
     *  {
     *      field: "name",
     *      label: "Họ và tên"
     *  },
     *  {
     *      field: "age",
     *      label: "Tuổi"
     *  }
     * ]
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