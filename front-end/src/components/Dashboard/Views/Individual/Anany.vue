<template>
<div>
<br>
<h1 style = "color:black;">Welcome to Anany's Racket Store</h1>
<br>
<br>
<br>
<img align= "right" src= "http://rackets.hivefly.com/wp-content/uploads/1head.jpg">
  <button><router-link to="/Admin/Create">Create Product</router-link></button>
  <br>
  <br>
  <br>
  <br>
  <button><router-link to="/Admin/Update">Update Product</router-link></button>
  <br>
  <br>
  <br>
  <br>
  <button><router-link to="/Admin/Delete">Delete Product</router-link></button>


    <div class="row">
      <div class="col-md-12">

        <div class="card">
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">


          </paper-table>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  const tableColumns = ['Id', 'Name', 'Price', 'CreatedAt', 'UpdatedAt', 'SellerName']
  const tableData = [{
    id: 1,
    name: 'Tecnifiber',
    price: '$36',
    createdat: '15/2/2018',
    updatedat: '16/2/2018',
    sellername: 'Anany'
  },
  {
    id: 2,
    name: 'Prince',
    price: '$40',
    createdat: '15/2/2018',
    updatedat: '16/2/2018',
    sellername: 'Anany'
  },
  {
    id: 3,
    name: 'Dunlop',
    price: '$30',
    createdat: '15/2/2018',
    updatedat: '16/2/2018',
    sellername: 'Anany'
  }]

  export default {
    components: {
      PaperTable
    },
    data () {
      return {
        table1: {
          title: 'Find your Rackets here',
          subTitle: 'Choose yours',
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          title: 'Table on Plain Background',
          subTitle: 'Here is a subtitle for this table',
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }

</script>
<style>

</style>
