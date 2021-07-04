<template>
  <div class="p-2">
    <div>Button component</div>
    <h-button text="Button" />

    <div>Các loại button component được hỗ trợ:</div>

    <h-button type="primary" text="Button" />
    <h-button type="danger" text="Button" />
    <h-button type="warning" text="Button" />
    <h-button type="success" text="Button" />
    <h-button type="secondary" text="Button" />

    <pre class="my-1">
        &lt;h-button type="primary" text="Button" /&gt;
        &lt;h-button type="danger" text="Button" /&gt;
        &lt;h-button type="warning" text="Button" /&gt;
        &lt;h-button type="success" text="Button" /&gt;
        &lt;h-button type="secondary" text="Button" /&gt;</pre
    >

    <div>Các props:</div>
    <table border="1">
      <thead>
        <th>Tên prop</th>
        <th>Kiểu dữ liệu</th>
        <th>Giá trị mặc định</th>
        <th>Mô tả</th>
      </thead>

      <tbody>
        <tr>
          <td>text</td>
          <td>string</td>
          <td>""</td>
          <td>Text của button</td>
        </tr>

        <tr>
          <td>type</td>
          <td>string</td>
          <td>primary</td>
          <td>
            Loại button. Gồm các giá trị: primary (default), secondary, success,
            warning và danger
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HButton from "@/components/hButton/HButton";
export default {
  components: {
    HButton,
  },
};
</script>