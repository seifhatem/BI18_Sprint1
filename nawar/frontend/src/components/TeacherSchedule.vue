<template>
<body>
<home></home>
<h2 style="font-family:verdana;">Teacher's personal schedule:</h2>
<div class="container">
<div class="tab tab-1">
<table id="customers" borders="4">
<tr>
<td> ID </td>
<th rowspan="2">Slot</th>
<th rowspan="2">Saturday</th>
<th rowspan="2">Sunday</th>
<th rowspan="2">Monday</th>
<th rowspan="2">Tuesday</th>
<th rowspan="2">Wednesday</th>
<th rowspan="2">Thursday</th>
</tr>
<tbody align="center">
<tr class="Active" v-for="row in mschedule.data">
<td>{{ }}</td>
<td>{{ row.slot }}</td>
<td>{{ row.sat }}</td>
<td>{{ row.sun }}</td>
<td>{{ row.mon }}</td>
<td>{{ row.tue }}</td>
<td>{{ row.wed }}</td>
<td>{{ row.thu }}</td>
<td><button type="button" class="btn btn-success" @click="removing(row._id)">Delete Slot</button></td>
</tr>
</tbody>
</table>
</div>
<div style="font-family:verdana;" class="tab tab-2">
<label for="usr">Add slot:</label>
  <input type="text" class="form-control" id="usr" v-model="slot">
<button type="button" @click="createSchedule" class="btn btn-primary">ADD</button>
<div>
<label for="pwd">Chosen slot:</label>
  <input type="text" class="form-control" id="pwd">
<button type="button" class="btn btn-primary">EDIT</button>
<button type="button" class="btn btn-primary">DELETE</button>
</div>
</div>

<div style="font-family:verdana;" class="tab tab-2">
<label for="usr">Saturday:</label>
  <input type="text" class="form-control" id="usr" v-model="sat">
<label for="usr">Sunday:</label>
    <input type="text" class="form-control" id="usr" v-model="sun">
<label for="usr">Monday:</label>
      <input type="text" class="form-control" id="usr" v-model="mon">
<label for="usr">Tuesday:</label>
        <input type="text" class="form-control" id="usr" v-model="tue">
<label for="usr">Wednesday:</label>
        <input type="text" class="form-control" id="usr" v-model="wed">
<label for="usr">Thursday:</label>
        <input type="text" class="form-control" id="usr" v-model="thu">
</div>
</div>
<foot></foot>
</body>
</template>

<style>
body {
    background: url('../assets/blur.jpg') no-repeat center center fixed;
    background-size: cover;
    height: 100%;
}
h1 {
    font-family: 'Crete Round', serif;
    font-weight: bold;
    color: #444;
    font-size: 45px;
    margin-bottom: 20px;
}
.container{overflow: hidden}
.tab{float: left;}
.tab-2{margin-left: 50px}
.tab-2 input{display: block;}
tr{
height: 50px;
}
#customers {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    width: 100%;
    border: 1px solid black;
    color: #fd79a8;
}

#customers td, #customers th {
    border: 1px solid black;
    padding: 20px;
    color: #fd79a8;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
    padding-top: 12px;
    padding-bottom: 15px;
    text-align: left;
    background-color: #0984e3;
    color: white;
}
</style>

<script>
import axios from 'axios'
import Home from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    'home': Home,
    'foot': Footer
  },
  name: 'user',
  data () {
    return {
      mschedule: [],
      slot: '',
      sat: '',
      sun: '',
      mon: '',
      tue: '',
      wed: '',
      thu: '',
      sched: false
    }
  },
  created () {
    this.myschedule()
  },
  methods: {
    myschedule () {
      axios.get('http://localhost:3000/api/schedule/getSchedules')
        .then((response) => {
          this.mschedule = response.data
          console.log(response)
        })
    },
    createSchedule () {
      let Schedule = {
        slot: this.slot,
        sat: this.sat,
        sun: this.sun,
        mon: this.mon,
        tue: this.tue,
        wed: this.wed,
        thu: this.thu
      }
      console.log(Schedule)
      axios.post('http://localhost:3000/api/Schedule/createSchedule', Schedule)

        .then((response) => {
          this.mschedule = response.data
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      window.location.reload()
    },
    removing (id) {
      axios.delete('http://localhost:3000/api/schedule/deleteSlot/' + id)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      window.location.reload()
    },
    show () {
      if (this.sched === false){
        this.sched = true
      } else {
        this.sched = false
      }
    }
  }
}
</script>
