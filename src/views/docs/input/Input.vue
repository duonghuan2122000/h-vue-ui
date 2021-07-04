<template>
  <div class="p-2">
    <h-input class="mt-1" placeholder="Text hint" />
    <h-input class="mt-1" placeholder="Text hint" :hasError="true" />

    <pre class="my-1">
&lt;h-input placeholder="Text hint" /&gt;
&lt;h-input placeholder="Text hint" :hasError="true" /&gt;</pre>

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
          <td>string</td>
          <td>null</td>
          <td>Text hint của input</td>
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
