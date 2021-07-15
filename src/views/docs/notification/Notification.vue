<template>
  <div>
    <h-button text="Hiển thị thông báo" @click="showNotification = true" />
    <h-notification
      :show.sync="showNotification"
      text="Đây là thông báo được hiển thị cho việc test"
    />
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