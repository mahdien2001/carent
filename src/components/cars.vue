<template>
 <div>

  <div id="header">
    <strong>CARENT</strong>
    <img src="../assets/images/user.png" alt="">
  </div>

  <div id="main">

    <!-- side -->
  <div id="side">
      <!-- sorting -->
  <div id="sorting">
    <select v-model="sort" id="cars" @change="sorting">
      <option value="" selected>sort by : </option>
      <option value="low">Price : low to high</option>
      <option value="high">Price : high to low</option>
    </select>
  </div>

  <hr>

  <!-- filtering -->
  <h4>filter by type</h4>

  <div v-for="t in types" :key="t">
    <input type="checkbox" class="car-type" @change="typeFilter()" :value="t" >{{ t }}
  </div>


  <h4>filter by brand</h4>
  <div v-for="b in brands" :key="b">
    <input type="checkbox" class="car-brand" @change="brandFilter()" :value="b" >{{ b }}
  </div>

  </div>


  <!-- cards -->
  <div id="cards">
    <div v-for="c in finallCars" :key="c.name" class="car-card">
      <img :src="require('../assets/images/' + c.image + '.jpeg')" alt="">
   
    <h3>{{c.name}}</h3>
    <p>{{c.score}}
      <img class="star" src="../assets/images/star.png" alt="">
      ( {{c.trips}} trips )</p>
    <hr>
    <div>
      ${{ c.price }} / Day
    </div>
  </div>
  </div>
  </div>

 
  
 </div>
</template>

<script src="../assets/cars.js"></script>
<style src="../assets/style.css"></style>
