<template>
  <div class="p-2">
    <h-button text="Hiển thị thông báo" @click="showNotification = true" />
    <h-notification
      v-if="showNotification"
      text="Đây là thông báo được hiển thị cho việc test"
      type="danger"
      @onClose="showNotification = false"
    />

    <pre class="my-1">&lt;h-notification
      v-if="showNotification"
      text="Đây là thông báo được hiển thị cho việc test"
      @onClose="showNotification = false"
    /&gt;</pre>

    <p>Các props:</p>
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
          <td>show (bind 2 chiều)</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Biến xác định trạng thái của notification</td>
        </tr>
        <tr>
          <td>text</td>
          <td>string</td>
          <td>null</td>
          <td>Text của notification</td>
        </tr>
        <tr>
          <td>type</td>
          <td>string</td>
          <td>primary</td>
          <td>Loại notification: primary, success, warning và danger</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HNotification from "@/components/hNotification/HNotification.vue";
import HButton from "@/components/hButton/HButton.vue";
export default {
  components: {
    HNotification,
    HButton,
  },
  data() {
    return {
      showNotification: true,
    };
  },
};
</script>