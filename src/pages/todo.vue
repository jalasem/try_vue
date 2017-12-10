<template>
  <div id="TodosWrapper">
    <div class="todoItem" v-for="(item, index) in items" :key="item.id">
      <h1>
        <input @change="doo(item.id)" type="checkbox" :checked="item.completed">
        <span :class="{done: item.completed}">{{ item.title }}</span>
        <button @click="del(item.id)">delete</button>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Write some codes',
          id: 0,
          completed: true,
        },
        {
          title: 'Eat some food',
          id: 1,
          completed: false,
        },
        {
          title: 'Have some sleep',
          id: 2,
          completed: false,
        },
      ],
    };
  },
  methods: {
    doo(id) {
      this.items.forEach((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
      });
    },
    del(id) {
      if (confirm('Are you sure to delete?')) {
        this.items.splice(id, 1);
        alert('deleted');
      }
    },
  },
};
</script>


<style>
#TodosWrapper {
  width: 25em;
  margin: 2em auto;
  border-radius: 3px;
  border: 1px solid salmon;
}
.todoItem {
  border-bottom: 1px solid salmon;
}
.done {
  text-decoration: line-through;
  color: grey;
}
</style>
