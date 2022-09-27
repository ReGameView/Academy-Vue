<template>
  <div class="content">
    <RandomUser></RandomUser>
    <CreateNote></CreateNote>
    <ListNote></ListNote>
  </div>
</template>
<script>
import ListNote from "@/pages/ListNote";
import RandomUser from "@/users/RandomUser";
import CreateNote from "@/pages/CreateNote";

export default {
  name: 'App',
  components: {
    ListNote,
    RandomUser,
    CreateNote
  },
}
</script>

<style>
  .content {
    margin: 0;
    left: 0;
    top: 0;
    position: relative;
  }

</style>