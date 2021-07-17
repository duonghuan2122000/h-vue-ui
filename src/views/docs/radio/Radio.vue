<template>
  <div class="p-2">
    <h-radio :data="dataRadio" />
    <pre class="my-1">&lt;h-radio :data="dataRadio" /&gt;</pre>
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
import HRadio from "@/components/hRadio/HRadio.vue";
export default {
  components: {
    HRadio,
  },
  data() {
    return {
      dataRadio: [
        {
          label: "Radio 1",
        },
        {
          label: "Radio 2",
        },
        {
          label: "Radio 3",
        },
      ],
    };
  },
};
</script>