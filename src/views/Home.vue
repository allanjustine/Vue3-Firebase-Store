<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
  </ol>
  <div class="carousel-inner">
    
    <div class="carousel-item active">
        <img class="d-block w-100" style="height: 380px;" src="images/bg-1.jpg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" style="height: 380px;" src="images/bg-2.jpg" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" style="height: 380px;" src="images/bg-3.jpg" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" style="height: 380px;" src="images/bg-4.jpg" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" style="height: 380px;" src="images/bg-5.jpg" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" style="height: 380px;" src="images/bg-6.jpg" alt="Third slide">
      </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div class="container mt-5">
  <h5 class="text-center">Products</h5>
  <hr>
  <div class="row">
    <div class="col-sm-3" v-for="{ id, productName, category, price, quantity } in products" :key="id">
      <div class="card mt-4 shadow" style="width: 16rem; height: 27rem;">
        <div class="card-header">
          <h5 class="card-title mt-2 text-center">{{ productName }}</h5>
        </div>
        <div class="card-body">
          <img src="images/nodata.png" alt="image" class="w-100 rounded mb-2">
          <hr>
          <span class="card-text">Category: <span style="color: red;">{{ category }}</span></span><br>
          <span class="card-text">Price: &#x20b1;<span style="color: red;">&nbsp;{{ price }}</span></span><br>
          <span class="card-text">Quantiy: <span style="color: red;">{{ quantity }}</span></span><br>
        </div>
        <div class="card-footer">
          <a href="/products" class="btn btn-primary form-control">Visit Product Table</a>
        </div>
      </div>
    </div>
  </div>
  <h5 class="mt-5 text-center">Satisfied Customers</h5>
  <hr>
  <div class="container">
    <div class="row">
    <div class="col-sm-4" v-for="{ id, full_name, address, mobileNumber} in customers" :key="id">
      <div class="card mt-4 card-bdoy shadow p-3">
        <p>Name: {{ full_name }}</p>
        <p>Address: {{ address }}</p>
        <p>Mobile Number: {{ mobileNumber }}</p>
        
        <a href="/customers">Visit Customers Table</a>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import { useLoadProducts, useLoadCustomers } from '@/firebase'

export default {
  setup() {
    const products = useLoadProducts()
    const customers = useLoadCustomers()
    
    return { 
      products,
      customers,
    }
  },
}
</script>