<template>
  <div class="p-2">
    <h-checkbox :data="dataCheckbox" />
    <pre class="my-1">&lt;h-checkbox :data="dataCheckbox" /&gt;</pre>
    <p>Các props:</p>
    <table border="1">
      <thead>
        <tr>
          <td>Tên prop</td>
          <td>Kiểu dữ liệu</td>
          <td>Giá trị mặc định</td>
          <td>Mô tả</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>data</td>
          <td>array</td>
          <td>null</td>
          <td>Data list cho radio</td>
        </tr>
        <tr>
          <td>displayField</td>
          <td>string</td>
          <td>label</td>
          <td>Trường dùng làm label để hiển thị cho radio</td>
        </tr>
        <tr>
          <td>name</td>
          <td>string</td>
          <td>string random</td>
          <td>Trường dùng name cho radio</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HCheckbox from "@/components/hCheckbox/HCheckbox.vue";
export default {
  components: {
    HCheckbox,
  },
  data() {
    return {
      dataCheckbox: [
        {
          label: "Checkbox 1",
        },
        {
          label: "Checkbox 2",
        },
        {
          label: "Checkbox 3",
        },
        {
          label: "Checkbox 4",
        },
      ],
    };
  },
};
</script>
