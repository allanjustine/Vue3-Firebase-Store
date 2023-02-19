<template>
    <div class="card mt-4 w-50 offset-3">
      <div class="card-header">
        <h3 class="text-center">Create Customer</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="onSubmit">
          <div class="form-group mt-2">
            <label>Full Name</label>
            <input v-model="form.full_name" class="form-control" placeholder="Full Name" required />
          </div>

          <div class="form-group mt-2">
            <label>Address</label>
            <input v-model="form.address" class="form-control" placeholder="Address" required />
          </div>

          <div class="form-group mt-2">
            <label>Email</label>
            <input
              v-model="form.email"
              class="form-control"
              type="email"
              required
              placeholder="Email"
            />
          </div>

          <div class="form-group mt-2">
            <label>Mobile Number</label>
            <input type="number" v-model="form.mobileNumber" class="form-control" placeholder="Mobile Number" required />
          </div>

          <div class="form-group mt-2">
            <label>Status</label>
            <input v-model="form.status" class="form-control" placeholder="Status" required />
          </div>
          <div class="form-group mt-2">
            <label>Credit Limit</label>
            <input v-model="form.credit_limit" class="form-control" placeholder="Credit Limit" required />
          </div>
          <button type="submit" class="btn btn-primary form-control mt-3">
            <i class="fa-duotone fa-circle-plus mt-1 mr-1"></i> Add Customer
          </button>
          <a href="/customers" class="btn btn-secondary form-control mt-1"><i class="fa-duotone fa-left-long-to-line"></i> Back</a>
        </form>
      </div>
    </div>
</template>
  
  <script>
  import { createCustomer } from '@/firebase'
  import { useRouter } from 'vue-router'
  import { reactive } from 'vue'
  
  export default {
    setup() {
      
      const router = useRouter()
      const form = reactive({ full_name: '',address: '', email: '', mobileNumber: '', status: '', creadit_limit: '' })
  
      const onSubmit = async () => {
        await createCustomer({ ...form })
        router.push('/customers')
        form.full_name = ''
        form.address = ''
        form.email = ''
        form.mobileNumber = ''
        form.status = ''
        form.creadit_limit = ''
      }
  
      return {
        form, 
        onSubmit 
      }
    }
  }
  </script>
  