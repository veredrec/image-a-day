<template>
<div>

  <section class="form">
    <form v-on:submit.prevent="addImage">
      <h2 class="add-title">Add an Image</h2>
      <div class="image-form">
        <input class="form-input" id="imageSrc" type="text" name="source" placeholder="Image Source" v-model="newImage.source" required>
        <input class="form-input" id="imageDesc" type="text" name="text" placeholder="Image Description" v-model="newImage.text" required>
        <input class="form-input" id="imageDate" type="text" name="date" placeholder="Image Date" v-model="newImage.date" required>
        <input class="form-input" id="imageAlt" type="text" name="alt" placeholder="Image Text(alt)" v-model="newImage.alt" required>
      </div>
      <input type="submit" class="btn-submit" value="Add Image">
    </form>
  </section>

  <section class="gallery">
  <div class="image-box" v-for="image in images">
    <img class="image" :src="image.source" :alt="image.alt" />
    <p class="text">{{ image.text }}</p>
    <p class="date">{{ image.date }}</p>
    <span class="delete" v-on:click="removeImage(image)">DELETE</span>
  </div>
  </section>

</div>
</template>

<style lang='css'>
  @import './App.css'
</style>

<script>
import Firebase from 'firebase';
  let config = {
    apiKey: "AIzaSyDLQms4Q-ZUdADyWjCVOsWXzfTzsXxjiKo",
    authDomain: "image-a-day.firebaseapp.com",
    databaseURL: "https://image-a-day.firebaseio.com",
    projectId: "image-a-day",
    storageBucket: "image-a-day.appspot.com",
    messagingSenderId: "20401690956"
  }

  let app = Firebase.initializeApp(config);
  let db = app.database();

  let imagesRef = db.ref('images');

  export default {
    name: 'App',
    firebase: {
      images: imagesRef
    },
    data () {
      return {
        newImage: {
          text: '',
          source: '',
          date: '',
          alt: ''
        }
      }
    },
    methods: {
      addImage: function(){
        imagesRef.push(this.newImage);
        this.newImage.text = '';
        this.newImage.source = '';
        this.newImage.date = '';
        this.newImage.alt = '';
      },
      removeImage: function(image){
        imagesRef.child(image['.key']).remove();
      }
    }
  }
</script>
