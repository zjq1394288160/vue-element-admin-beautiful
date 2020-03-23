<template>
  <div class="code-generator-container">
    <el-row :gutter="20">
      <el-col :span="5">
        <TableEditor @change="setTableData" />
      </el-col>
      <el-col :span="19">
        <TableExhibition :table-data="tableData" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TableEditor from "./components/TableEditor";
import TableExhibition from "./components/TableExhibition";

export default {
  name: "Index",
  components: {
    TableEditor,
    TableExhibition,
  },
  data() {
    return {
      tableData: {},
      getTableAPI: "",
    };
  },
  methods: {
    setTableData(val) {
      this.tableData = JSON.parse(val);
    },
  },
};
</script>

<style lang="scss" scoped></style>
