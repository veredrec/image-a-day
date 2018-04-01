<template src="./Home.html"></template>

<style scoped lang="css">
  @import 'Home.css'
</style>

<script>
import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyDLQms4Q-ZUdADyWjCVOsWXzfTzsXxjiKo',
  authDomain: 'image-a-day.firebaseapp.com',
  databaseURL: 'https://image-a-day.firebaseio.com',
  projectId: 'image-a-day',
  storageBucket: 'image-a-day.appspot.com',
  messagingSenderId: '20401690956'
};

let app = Firebase.initializeApp(config);
let db = app.database();

let imagesRef = db.ref('images');

export default {
  name: 'App',
  firebase: {
    images: imagesRef
  },
  data() {
    return {
      newImage: {
        text: '',
        source: '',
        date: '',
        alt: ''
      }
    };
  },
  methods: {
    addImage: function() {
      imagesRef.push(this.newImage);
      this.newImage.text = '';
      this.newImage.source = '';
      this.newImage.date = '';
      this.newImage.alt = '';
    },
    removeImage: function(image) {
      imagesRef.child(image['.key']).remove();
    }
  }
};
</script>
