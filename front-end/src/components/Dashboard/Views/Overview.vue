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
            name: 'Meray Samy',
            tag: 'meraysamy',
            info: 'BI Student at GUC',
            image: 'static/img/members/meray.jpg',
            social: 'https://twitter.com/meraysamy'
          },
          {
            name: 'Louay Diaa',
            tag: 'louaydiaa',
            info: '50 percent of the time i\'m sleeping',
            image: 'static/img/faces/face-2.jpg'
          },
          {
            name: 'Mounir Basta',
            tag: 'mounirbasta',
            info: 'Glory Glory ManUtd',
            image: 'static/img/members/mounir.jpg'
          },
          {

            name: 'Martina Nashaat',
            tag: 'martinanashaat',
            info: 'BI student at the GUC',
            image: 'static/img/members/martina.jpg'
          },
          {
            name: 'Rana Samir',
            tag: 'Ranasamir',
            info: 'My zodiac sign is Aquarius',
            image: 'static/img/faces/rana.jpg'
          },
          {
            name: 'Robert Shenouda',
            tag: 'RobertShenouda',
            info: 'A lead guitarist who loves rock music like who doesnt???',
            image: 'static/img/members/robert.jpg'
          },
          {
            name: 'Doha Yasser',
            tag: 'DohaYasser',
            info: 'My Favorite colors are red and black.',
            image: 'static/img/members/doha.jpg'
          },
          {

            name: 'Ingy Ahmad',
            tag: 'IngyAhmad',
            info: 'Green is my favourite colour',
            image: 'static/img/faces/ingy.jpg',
          },
          {

            name: 'Farah Rezk',
            tag: 'farahRezk',
            info: 'BI Student',
            image: 'static/img/faces/farah.jpg.jpg',
          },

            name: 'Amr Samih',
            tag: 'Amrsamih',
            info: 'i love se',
            image: 'static/img/members/samih.JPG'
          },
           name: 'Mona Askary',
              tag: 'MonaAskary',
              info: 'I love running',
              image: 'static/img/members/MonaAskary.png'
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
