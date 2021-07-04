<template>
  <div class="p-2">
    <h-tooltip text="tooltip text">Tooltip</h-tooltip>

    <pre class="my-1">&lt;h-tooltip text="tooltip text"&gt;Tooltip&lt;/h-tooltip&gt;</pre>

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
          <td>text</td>
          <td>string</td>
          <td>null</td>
          <td>Text của tooltip</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HTooltip from "@/components/hTooltip/HTooltip.vue";
export default {
  components: {
    HTooltip,
  },
};
</script>
