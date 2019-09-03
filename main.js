var app = new Vue({
  el: "#app",
  data: {
    showMessage: false,
    showChorus: false,
    message: "Greetings",
    newTitle: "",
    newUrl: "",
    videos: [
      {
        show: true,
        title: "Treat you better",
        url: "https://www.youtube.com/embed/lY2yjAdbvdQ"
      },
      {
        show: false,
        title: "There's nothing hold me back",
        url: "https://www.youtube.com/embed/dT2owtxkU8k"
      }
    ]
  },
  methods: {
    addVideo: function() {
      console.log("Adding video");
      var obj = {
        show: true,
        title: this.newTitle,
        url: this.newUrl
      };
      this.videos.push(obj);
    },
    deleteVideo: function(index) {
      console.log("Deleting video");
      this.videos.splice(index, 1);
    }
  }
});
