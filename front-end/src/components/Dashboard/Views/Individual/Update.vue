<template>
<div class="row">
<img align= "right" src= "https://s-media-cache-ak0.pinimg.com/originals/18/c7/28/18c7280d89a3233a648884d648c61ef5.jpg" height = 800 width = 800> 
<br>
<input type="text" v-model="id" placeholder="ID">

<br>
<input type="text" v-model="Price" placeholder="Price">

<br>
<input type="text" v-model="Name" placeholder="Name">
  <button v-on:click="onSubmit">Submit</button>
</div>
</template>
