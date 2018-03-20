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
          date: "March 15, 2018",
          alt: "Bike leaning on a tree in the yard"
        },
        { source: "/march/tweet.png",
          text: "100 Days Of Code",
          date: "March 16, 2018",
          alt: "Tweet for joining the 100 days of code coding challenge"
        },
        { source: "/march/squirrel.jpg",
          text: "Squirrel From the Window",
          date: "March 17, 2018",
          alt: "A squirrel eats a nut in the front yard"
        },
        { source: "/march/lake.png",
          text: "Potato Creek State Park, IN",
          date: "March 18, 2018",
          alt: "A lake at a state park"
        },
        { source: "/march/plates.png",
          text: "Now We Officially Moved To IN",
          date: "March 19, 2018",
          alt: "Indiana license plate"
        }
        ]
      }
    }
  }
</script>
