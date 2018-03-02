<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">
          </paper-table>

          <ul v-if="products && products.length">
            <li v-for="product of products">
            <p>{{product.id}}</p>
            <p>{{product.name}}</p>
            <p>{{product.price}}</p>
            <p>{{product.createdat}}</p>
            <p>{{product.updatedat}}</p>
            <p>{{product.sellername}}</p>
            </li>
          </ul>

          <ul v-if="errors && errors.length">
            <li v-for="error of errors">
            {{error.message}}
            </li>
          </ul>
        </div>
      </div>

    </div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import axios from 'axios'
  const tableColumns = ['ID', 'Name', 'Price', 'Created At', 'Updated At', 'Seller Name']
  const tableData = [
    {
      id: 2,
      name: 'Minerva Hooper',
      price: '$36.738',
      createdat: '15/2/2018',
      updatedat: '16/2/2018',
      sellername: 'Mo'
    }]

  export default {
    components: {
      PaperTable
    },
    data () {
      return {
        products: [],
        errors: [],
        table1: {
          title: 'Products',
          subTitle: 'This is a table of products',
          columns: [...tableColumns],
          products: [...tableData]
        },
        table2: {
          title: 'Table on Plain Background',
          subTitle: 'Here is a subtitle for this table',
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    },

    created () {
      axios.get('http://localhost:3000/api/product/getProducts')
    .then(response => {
      this.product = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    }
}

</script>
<style>

</style>
