<!--eslint-disable -->
<template>
  <div class="test-container">
    <div>
      <br />
      select哪个字段指的是与和或,与是0,或是1
      <br />
      这里会自动的根据你添加的节点生成json
      <br />
      {{ JSON.stringify(data) }}
    </div>
    <div class="block">
      <p>使用 scoped slot</p>
      <el-tree
        :data="data"
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span>
            {{ node.select }}
            <el-select v-if="2 === node.level" v-model="data.select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </span>
          <span>
            <el-button
              v-if="3 !== node.level"
              type="text"
              size="mini"
              @click="() => append(data, node.level)"
            >
              添加子级
            </el-button>
            <el-button
              v-if="1 !== node.level"
              type="text"
              size="mini"
              @click="() => remove(node, data)"
            >
              删除
            </el-button>
          </span>
        </span>
      </el-tree>
      <el-button @click="handleGetAll" type="primary">打印到控制台</el-button>
    </div>
  </div>
</template>
<script>
let id = 0;
let id2 = 0;
export default {
  data() {
    let data = [
      {
        id: "0",
        label: "我的方案",
        children: [
          {
            id: "0",
            label: "方案0",
            select: 0,
            children: [
              {
                id: "0",
                label: "三级 0",
              },
            ],
          },
        ],
      },
    ];
    return {
      data: JSON.parse(JSON.stringify(data)),
      options: [
        {
          value: 0,
          label: "与",
        },
        {
          value: 1,
          label: "或",
        },
      ],
    };
  },

  methods: {
    handleGetAll() {
      console.log(JSON.stringify(this.data));
    },
    append(data, level) {
      if (1 === level) {
        id++;
        const newChild = {
          id: id,
          label: "方案" + id,
          select: 0,
          children: [],
        };
        if (!data.children) {
          this.$set(data, "children", []);
        }
        data.children.push(newChild);
      }
      if (2 === level) {
        id2++;
        const newChild = { id: id2, label: "三级" + id2, children: [] };
        if (!data.children) {
          this.$set(data, "children", []);
        }
        data.children.push(newChild);
      }
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .el-tree-node__content {
    height: 46px;
  }
  .el-select {
    margin-left: 10px;
  }
}
</style>
