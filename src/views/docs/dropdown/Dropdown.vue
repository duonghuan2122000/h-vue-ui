<template>
  <div class="p-2">
    <h-dropdown :data="dropdownData">
      <template slot="dropdown-toggle"> Dropdown </template>
    </h-dropdown>

    <pre class="my-1">
&lt;h-dropdown :data="dropdownData"&gt;
  &lt;template slot="dropdown-toggle"&gt; Dropdown &lt;/template&gt;
&lt;/h-dropdown&gt;</pre>

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
          <td>data</td>
          <td>array</td>
          <td></td>
          <td>Data của dropdown content</td>
        </tr>
      </tbody>
    </table>

    <p>Slot</p>
    <p>Dropdown có 2 slot</p>
    <ul>
      <li>slot: dropdown-toggle - Dropdown toggle thường là button (bắt buộc)</li>
      <li>slot: dropdown-item - Dùng để custom lại item trong dropdown content (optional)</li>
    </ul>
  </div>
</template>

<script>
import HDropdown from "@/components/hDropdown/HDropdown.vue";
export default {
  components: {
    HDropdown,
  },
  data() {
    return {
      dropdownData: ["item 1", "item 2", "item 3", "item 4", "item 5"],
    };
  },
};
</script>
