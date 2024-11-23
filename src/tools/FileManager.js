import axios from "axios";

const FileManager = {
  path: process.env.BASE_URL + "post/",

  getAllTopic: function () {
    return ["HTML", "JS"];
  },

  getPosts: function (topic) {
    switch (topic) {
      case 0:
        return ["文本標籤", "HTML基礎"];
      case 1:
        return ["屬性與方法", "語句類型"];
    }
  },

  getPostContent: function (topicName, postName) {
    let url = this.path + topicName + "/" + postName + ".md";
    return new Promise((res, rej) => {
      axios.get(url).then((response) => {
        console.log(response.data);
        res(response);
      }, rej);
    });
  },
};

export default FileManager;
