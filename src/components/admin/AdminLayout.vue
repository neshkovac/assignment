<template>
  <div class="admin-layout-wrapper row text-center">
    <div class="col-md-12">
      <app-admin-form></app-admin-form>
    </div>
  </div>
</template>

<script>
import AdminForm from "@/components/admin/AdminForm.vue";

export default {
  components: {
    appAdminForm: AdminForm
  }
}
</script>

<style scoped>

</style>