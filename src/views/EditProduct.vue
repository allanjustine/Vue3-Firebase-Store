<template>
  <div class="card mt-4 w-50 offset-3">
    <div class="card-header">
      <h3 class="text-center">Edit Product</h3>
    </div>
    <div class="card-body">
      <form @submit.prevent="update">
        <div class="form-group mt-2">
          <label>Barcode</label>
          <input v-model="form.barcode" disabled style="cursor: not-allowed;" class="form-control text-muted" placeholder="Barcode" required />
        </div>

        <div class="form-group mt-2">
          <label>Product Name</label>
          <input v-model="form.productName" class="form-control" placeholder="Product Name" required />
        </div>

        <div class="form-group mt-2">
          <label>Supplier</label>
          <input v-model="form.supplier" class="form-control" placeholder="Supplier" required />
        </div>

        <div class="form-group mt-2">
          <label>Category</label>
          <select v-model="form.category" class="form-control">
            <option disabled selected value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Foods">Foods</option>
            <option value="Toys">Toys</option>
            <option value="Appliances">Appliances</option>
            <option value="Clothing">Clothing</option>
            <option value="Gadgets">Gadgets</option>
          </select>
        </div>

        <div class="form-group mt-2">
          <label>Price</label>
          <input type="number" v-model="form.price" class="form-control" placeholder="Price" required />
        </div>

        <div class="form-group mt-2">
          <label>Quantity</label>
          <input type="number" v-model="form.quantity" class="form-control" placeholder="Quantity" required />
        </div>

        <div class="form-group mt-2">
          <label>Units</label>
          <input v-model="form.units" class="form-control" placeholder="Quantity" required />
        </div>

        <button type="submit" class="btn btn-primary form-control mt-3">
          <i class="fa-duotone fa-pen-to-square"></i> Update Product
        </button>
        <a href="/products" class="btn btn-secondary form-control mt-1"><i class="fa-duotone fa-left-long-to-line"></i> Back</a>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProduct, updateProduct } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const productId = computed(() => route.params.id)

    const form = reactive({ barcode: '', productName: '', supplier: '', category: '', price: '', quantity: '', units: '' })
    onMounted(async () => {
      const product = await getProduct(productId.value)
      console.log(product, productId.value)
      form.barcode = product.barcode
      form.productName = product.productName
      form.supplier = product.supplier
      form.category = product.category
      form.price = product.price
      form.quantity = product.quantity
      form.units = product.units
    })

    const update = async () => {
      await updateProduct(productId.value, { ...form })
      router.push('/products')
      form.barcode = ''
      form.productName = ''
      form.supplier = ''
      form.category = ''
      form.price = ''
      form.quantity = ''
      form.units = ''
    }

    return { 
      form, 
      update
    }
  }
}
</script>
