<template>
<div>
<button><router-link to="/Admin/Anany">Anany's Store</router-link></button>
<div>
<paper-table :title="table.title" :sub-title="table.subTitle" :data="table.data" :columns="table.columns">



</paper-table></div></div>
</template>

<script>
import PaperTable from 'components/UIComponents/PaperTable.vue'
export default {
  components: {
    PaperTable
  },
  data () {
    return {
      table: {
        title: 'Products',
        subTitle: '',
        columns: ['ID', 'Name', 'Salary', 'Country', 'City', 'Edit'],
        data: [{
          id: 1,
          name: 'Dakota Rice',
          salary: '$36.738',
          country: 'Niger',
          city: 'Oud-Turnhout'
        },
        {
          id: 2,
          name: 'Minerva Hooper',
          salary: '$23,789',
          country: 'Curaçao',
          city: 'Sinaai-Waas'
        },
        {
          id: 3,
          name: 'Sage Rodriguez',
          salary: '$56,142',
          country: 'Netherlands',
          city: 'Baileux'
        },
        {
          id: 4,
          name: 'Philip Chaney',
          salary: '$38,735',
          country: 'Korea, South',
          city: 'Overland Park'
        },
        {
          id: 5,
          name: 'Doris Greene',
          salary: '$63,542',
          country: 'Malawi',
          city: 'Feldkirchen in Kärnten'
        }]
      }
    }
  }
}
</script>
