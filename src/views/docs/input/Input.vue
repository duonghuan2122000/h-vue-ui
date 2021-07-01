<template>
  <div>
    <h-input placeholder="Text hint" />
    <h-input placeholder="Text hint" :hasError="true" />

    <table border="1">
      <thead>
        <tr>
          <th>Tên prop</th>
          <th>Kiểu dữ liệu</th>
          <th>Giá trị mặc định</th>
          <th>Mô tả</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>placeholder</td>
          <th>string</th>
          <th>null</th>
          <th>Text hint của input</th>
        </tr>
        <tr>
          <td>hasError</td>
          <td>boolean</td>
          <td>false</td>
          <td>Xác định trạng thái của input có lỗi hay không.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HInput from "@/components/hInput/HInput.vue";
export default {
  components: {
    HInput,
  },
};
</script>
