<template>
<div class="row">
<img align= "right" src= "http://www.teleraqueta.com/Files/109578/Img/06/how-to-move-squash-teleraqueta.jpg">
<br>

<input type="text" v-model="name" placeholder="Name">

<br>
<input type="text" v-model="price" placeholder="Price">

<br>
<input type="text" v-model="seller" placeholder="Seller Name">
  <button v-on:click="onSubmit">Create</button>
</div>
</template>
