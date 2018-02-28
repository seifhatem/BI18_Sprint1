<template>
<div>

    <div><span>T18 is a creative and energetic team</span></div><br>
      <div class="card card-user">
    <div class="col-sm-6 col-md-4 col-lg-3" v-for="member in members">
    <div class="image"></div>
    <div class="content">
      <div class="author">
        <img class="avatar border-white" :src="member.image">
        <h4 class="title">{{member.name}}
          <br>
          <a :href="member.social" target="_blank">
            <small>@{{member.tag}}</small>
          </a>
        </h4>
      </div>
      <p class="description text-center">
      {{member.info}}
      </p>
    </div>
    </div>
    </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        members: [
          {
            name: 'Seif Hatem',
            tag: 'seifhatem',
            info: 'SE is fun!  okaayyy...not so much',
            image: 'static/img/members/seif.jpg',
            social: 'https://twitter.com/seifhatem'
          },
          {
            name: 'Louay Diaa',
            tag: 'louaydiaa',
            info: '50 percent of the time i\'m sleeping',
            image: 'static/img/faces/face-2.jpg'
          },
          {
            name: 'PUT YOUR NAME HERE',
            tag: 'NAMEHEREWITHOUTSPACES',
            info: 'DO NOT DELETEE IT, COPY IT AND PUT IT ABOVE THIS',
            image: 'static/img/members/delete.jpg',
            social: 'https://twitter.com/seifhatem'
          }
        ]
      }
    }
  }

</script>
<style>

</style>
