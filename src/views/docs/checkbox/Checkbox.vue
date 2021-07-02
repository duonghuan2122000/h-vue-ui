<template>
  <div>
    <h-checkbox :data="dataCheckbox" />
  </div>
</template>

<script>
import HCheckbox from "@/components/hCheckbox/HCheckbox.vue";
export default {
  components: {
    HCheckbox,
  },
  data(){
      return {
          dataCheckbox: [
              {
                  label: "Checkbox 1"
              },
              {
                  label: "Checkbox 2"
              },
              {
                  label: "Checkbox 3"
              },
              {
                  label: "Checkbox 4"
              },
          ]
      }
  }
};
</script>
