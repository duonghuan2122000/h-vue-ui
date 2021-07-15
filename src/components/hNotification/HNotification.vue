<template>
  <div class="h-notification flex-row" :class="{ hide: !show }">
    <div>
      {{ text }}
    </div>
    <div
      class="
        h-notification-close-button
        ml-1
        flex-row
        is-justify-content-center is-align-items-center
      "
      @click="hideNotification"
    >
      x
    </div>
  </div>
</template>

<script>
export default {
  name: "HNotification",
  props: {
    /**
     * Text notification
     * @author CreatedBy: dbhuan (15/07/2021)
     */
    text: {
      type: String,
    },

    /**
     * Thời gian thiết lập để tự động ẩn notification (tính theo mili giây)
     * Mặc đinh: 5s
     * @author CreatedBy: dbhuan (15/07/2021)
     */
    timeToHide: {
      type: Number,
      default: 5000,
    },

    /**
     * Xác định có tự động ẩn notification hay không
     * Mặc đinh: có
     * @author CreatedBy: dbhuan (15/07/2021)
     */
    autoHide: {
      type: Boolean,
      default: true,
    },

    /**
     * Biến xác định trạng thái của notification (ẩn hay hiện)
     * Mặc đinh: ẩn
     * @author CreatedBy: dbhuan (15/07/2021)
     */
    show: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    hideNotification() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/hNotification/HNotification.scss";
</style>