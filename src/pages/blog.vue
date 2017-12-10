<template>
  <div>
    <h1>Welcome to Vue Blog!</h1>
    <blog-post v-for="(post, index) in posts" :key="index">
      <h1 v-html="post.headline"></h1>
    </blog-post>
  </div>
</template>


<script>
import BlogPost from '@/components/blogPost';

export default {
  components: {
    BlogPost,
  },
  data() {
    return {
      posts: [
        {
          headline: 'Obasanjo slap Atiku <br>over laundered money',
        },
        {
          headline: 'Ibrahim Babangida can <br>be a good man again',
        },
        {
          headline: 'Jalasem, Ibrahim &amp; Taiwo <br>got honoured at Silicon Valley',
        },
      ],
    };
  },
};
</script>
