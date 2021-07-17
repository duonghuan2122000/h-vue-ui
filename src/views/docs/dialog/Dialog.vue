<template>
  <div class="p-2">
    <h-button text="Mở dialog" @click="setStateDialog(true)" />
    <h-dialog v-if="showDialog" @onClose="setStateDialog(false)">
      <div class="p-2">
        Dialog
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </h-dialog>

    <pre class="my-1">
&lt;h-dialog v-if="showDialog" @onClose="setStateDialog(false)"&gt;
  &lt;div class="p-2"&gt;
    Dialog
  &lt;/div&gt;
&lt;/h-dialog&gt;</pre
    >

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
      <tbody></tbody>
    </table>

    <p>Các events:</p>
    <table border="1">
      <thead>
        <tr>
          <th>Event</th>
          <th>Tham số</th>
          <th>Mô tả</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>onClose</td>
          <td>null</td>
          <td>Hàm được gọi khi đóng dialog</td>
        </tr>
      </tbody>
    </table>

    <p>Slot</p>

    <p>Dialog có một slog: Dialog content</p>
  </div>
</template>

<script>
import HDialog from "@/components/hDialog/HDialog.vue";
import HButton from "@/components/hButton/HButton.vue";
export default {
  components: {
    HDialog,
    HButton,
  },
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    setStateDialog(state) {
      this.showDialog = state;
    },
  },
};
</script>