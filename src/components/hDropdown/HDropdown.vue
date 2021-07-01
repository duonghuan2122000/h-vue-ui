<template>
  <div class="h-dropdown">
    <div class="h-dropdown-toggle" @click="onClickDropdownToggle">
      <slot name="dropdown-toggle" />
    </div>
    <div class="h-dropdown-content" :class="{ hide: !isShow }">
      <div class="h-dropdown-item" v-for="(item, index) in data" :key="index">
        <slot name="dropdown-item">{{ item }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HDropdown",
  props: {
    /**
     * Data item cho dropdown
     * CreatedBy: dbhuan (01/07/2021)
     */
    data: {
      type: Array,
    },
  },
  data() {
    return {
      /**
       * Biến xác định trạng thái đóng mở của dropdown
       * CreatedBy: dbhuan (01/07/2021)
       */
      isShow: false,

      /**
       * Vị trí hiện tại đang được chọn dropdown item
       * CreatedBy: dbhuan (01/07/2021)
       */
      currentItemIndex: -1,
    };
  },
  methods: {
    /**
     * Hàm đóng dialog khi click outside
     * CreatedBy: dbhuan (01/07/2021)
     */
    _close(e) {
      if (!this.$el.contains(e.target)) {
        this.isShow = false;
      }
    },

    /**
     * Hàm click dropdown toggle
     * CreatedBy: dbhuan (01/07/2021)
     */
    onClickDropdownToggle() {
      this.isShow = !this.isShow;
    },
  },
  mounted() {
    document.addEventListener("click", this._close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this._close);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/hDropdown/HDropdown.scss";
</style>
