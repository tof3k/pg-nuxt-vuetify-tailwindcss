<template>
  <v-container>
    <h1 class="text-h4 mb-4">Products</h1>

    <v-row v-if="products.length">
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-img
            :src="product.images[0]?.src"
            height="200"
          />
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>£{{ product.price }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <div v-else>
      <p>No products found.</p>
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const products = ref([])

onMounted(async () => {
  const res = await fetch('/api/products')
  products.value = await res.json()
})
</script>
