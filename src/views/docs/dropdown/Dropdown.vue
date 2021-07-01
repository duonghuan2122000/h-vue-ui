<template>
  <div>
    <h-dropdown :data="dropdownData">
      <template slot="dropdown-toggle">
        Dropdown
      </template>
    </h-dropdown>
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
