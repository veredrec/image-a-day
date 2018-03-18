<template src="./Home.html"></template>
<style scoped lang="css">
  @import 'Home.css'
</style>

<script>
  export default {
    data() {
      return {
        images: [
        { source: "/march/bike.png",
          text: "Lime Bike in the Back Yard",
          date: "March 15, 2018"
        },
        { source: "/march/tweet.png",
          text: "100 Days Of Code",
          date: "March 16, 2018"
        },
        { source: "/march/squirrel.jpg",
          text: "Squirrel From the Window",
          date: "March 17, 2018"
        }
        ]
      }
    }
  }
</script>
