<template>
  <div class="h-notification flex-row" :class="'is-' + type">
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
      @click="closeNotification"
    >
      &times;
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
     * Loại notification (Background color của notification).
     * Hỗ trợ: primary (default), danger, success, warning, secondary
     * @author
     * CreatedBy: dbhuan (29/06/2021)
     */
    type: {
      type: String,
      default: "primary",
      validator: (val) =>
        ["primary", "danger", "success", "warning"].includes(val),
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
  },

  data() {
    return {
      /**
       * Time out xác định khoảng thời gian hiển thị còn lại của notification
       * @author CreatedBy: dbhuan (17/07/2021)
       */
      timeOut: null,
    };
  },

  methods: {
    /**
     * Hàm thực hiện đóng notification
     * @author CreatedBy: dbhuan (16/07/2021)
     */
    closeNotification() {
      this.$emit("onClose");
    },
  },

  mounted() {
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(this.closeNotification, this.timeToHide);
  },

  beforeDestroy() {
    clearTimeout(this.timeOut);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/hNotification/HNotification.scss";
</style>