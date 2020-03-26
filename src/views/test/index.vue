<template>
  <div class="test-container">
    <el-divider content-position="left">一般情况</el-divider>
    <byui-query-form>
      <byui-query-form-left-panel>
        <el-button type="primary" icon="el-icon-plus">添加</el-button>
        <el-button type="primary" icon="el-icon-edit">修改</el-button>
        <el-button type="danger" icon="el-icon-delete-solid">删除</el-button>
        <el-button icon="el-icon-download">导出</el-button>
      </byui-query-form-left-panel>
      <byui-query-form-right-panel>
        <el-form :inline="true" :model="formInline">
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-search" type="primary">查询</el-button>
          </el-form-item>
        </el-form>
      </byui-query-form-right-panel>
    </byui-query-form>

    <el-divider content-position="left">特殊情况</el-divider>
    <byui-query-form>
      <byui-query-form-top-panel>
        <el-form :inline="true" :model="formInline">
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-search" type="primary">查询</el-button>
          </el-form-item>
        </el-form>
      </byui-query-form-top-panel>
      <byui-query-form-bottom-panel>
        <el-button type="primary" icon="el-icon-plus">添加</el-button>
        <el-button type="primary" icon="el-icon-edit">修改</el-button>
        <el-button type="danger" icon="el-icon-delete-solid">删除</el-button>
        <el-button icon="el-icon-download">导出</el-button>
      </byui-query-form-bottom-panel>
    </byui-query-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },
};
</script>
