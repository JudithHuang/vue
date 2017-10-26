<template>
  <span>I am header</span>
  <div id="one-1" class="list-one">
    <div class="hacker-news-list" id="one-2">
      <div class="hacker-news-item" v-for="item in list">
          <span class="num" v-text="$index + 1"></span>
          <p>
          <a target="_blank" :href="item.url" v-text="item.title"></a>
          </p>
          <p>
          <small>
              <span v-text="item.points"></span>
              points by
              <a target="_blank" :href="'https://news.ycombinator.com/user?id=' + item.author"
              v-text="item.author"></a>
              |
              <a target="_blank" :href="'https://news.ycombinator.com/item?id=' + item.objectID"
              v-text="item.num_comments + ' comments'"></a>
          </small>
          </p>
      </div>
      <infinite-loading :distance="80" :on-infinite="onInfiniteMock">
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
const api = 'http://hn.algolia.com/api/v1/search_by_date?tags=story';

export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    InfiniteLoading,
  },
  methods: {
    onInfinite() {
      const dom = document.getElementById('one-1')
      dom.scrollTop = dom.scrollTop + 100
    // this.$broadcast('$InfiniteLoading:complete');
      this.$http.get(api, {
        params: {
          page: this.list.length / 20 + 1,
        },
      }).then((res) => {
        if (res.data.hits.length) {
          this.list = this.list.concat(res.data.hits);
          console.log('list', this.list)
          this.$broadcast('$InfiniteLoading:loaded');
          if (this.list.length / 20 === 3) {
            this.$broadcast('$InfiniteLoading:complete');
          }
        } else {
          this.$broadcast('$InfiniteLoading:complete');
        }
      });
    },
    onInfiniteMock() {
      setTimeout(() => {
        const temp = [];
        for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
          temp.push(i);
        }
        this.list = this.list.concat(temp);
        this.$broadcast('$InfiniteLoading:loaded');
      }, 1000);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-one {
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.hacker-news-list {
  font-size: 32px;
  min-height: 100%;
}
</style>
