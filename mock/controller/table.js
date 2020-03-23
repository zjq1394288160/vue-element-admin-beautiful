import { mock, Random } from "mockjs";

function color() {
  return Random.color().substr(1);
}

export default [
  {
    url: "/table/list",
    type: "post",
    response: (config) => {
      const { query } = config;
      return {
        code: 200,
        msg: "success",
        totalCount: 238,
        data: mock({
          "data|2": [
            {
              id: "@id",
              title: "@sentence(10, 20)",
              "status|1": ["published", "draft", "deleted"],
              author: "@cname",
              display_time: "@datetime",
              pageviews: "@integer(300, 5000)",
              img: `https://picsum.photos/200/200?random=1`,
              smalImg: Random.image("200x200", Random.color(), "byui"),
              switch: "@boolean",
              percent: "@integer(80,99)",
            },
            {
              id: "@id",
              title: "@sentence(10, 20)",
              "status|1": ["published", "draft", "deleted"],
              author: "@cname",
              display_time: "@datetime",
              pageviews: "@integer(300, 5000)",
              img: `https://picsum.photos/200/200?random=2`,
              smalImg: Random.image("200x200", Random.color(), "byui"),
              switch: "@boolean",
              percent: "@integer(80,99)",
            },
            {
              id: "@id",
              title: "@sentence(10, 20)",
              "status|1": ["published", "draft", "deleted"],
              author: "@cname",
              display_time: "@datetime",
              pageviews: "@integer(300, 5000)",
              img: `https://picsum.photos/200/200?random=3`,
              smalImg: Random.image("200x200", Random.color(), "byui"),
              switch: "@boolean",
              percent: "@integer(80,99)",
            },
            {
              id: "@id",
              title: "@sentence(10, 20)",
              "status|1": ["published", "draft", "deleted"],
              author: "@cname",
              display_time: "@datetime",
              pageviews: "@integer(300, 5000)",
              img: `https://via.placeholder.com/200.png/${color()}/ffffff?text=byui`,
              smalImg: Random.image("200x200", Random.color(), "byui"),
              switch: "@boolean",
              percent: "@integer(80,99)",
            },
            {
              id: "@id",
              title: "@sentence(10, 20)",
              "status|1": ["published", "draft", "deleted"],
              author: "@cname",
              display_time: "@datetime",
              pageviews: "@integer(300, 5000)",
              img: `https://via.placeholder.com/200.png/${color()}/ffffff?text=byui`,
              smalImg: Random.image("200x200", Random.color(), "byui"),
              switch: "@boolean",
              percent: "@integer(80,99)",
            },
          ],
        }).data,
      };
    },
  },
];
