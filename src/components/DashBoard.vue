<template>
  <div style="margin-left: 10%">
    <div class="upper-Section">
      <span class="AMS">AMS</span
      ><span class="asm">Asset Management System</span>
      <div>
        <div class="sd">System's Instock - {{ inStock }}</div>
        <div class="sm">
          System's Distributed - {{ distributed }}
          <span class="add-entry" @click="openAddDialogue"
            >Click here to add new entry</span
          >
        </div>
      </div>
    </div>
    <div class="list-of-assets">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="employee ID" prop="empID"></el-table-column>
        <el-table-column label="employee Name" prop="empName"></el-table-column>
        <el-table-column
          label="Device Name"
          prop="systemAssigned"
        ></el-table-column>

        <el-table-column align="right">
          <template slot-scope="scope">
            <i
              class="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
            ></i>
            <i
              class="el-icon-delete"
              @click="handleDelete(scope.$index, scope.row)"
            ></i>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="Please fill the following details"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <div style="margin-bottom: 10px">
        <el-input
          placeholder="please enter employee ID"
          v-model="empIDforDialoge"
        ></el-input>
      </div>
      <div style="margin-bottom: 10px">
        <el-input
          placeholder="please enter employee name"
          v-model="empNameforDialoge"
        ></el-input>
      </div>
      <div>
        <el-input
          placeholder="please enter device details"
          v-model="systemforDialoge"
        ></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addEntry()">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'DashBoard',
  data() {
    return {
      tableData: [
        {
          empID: 3928,
          empName: 'John',
          systemAssigned: 'Mac M1 16/256 GB'
        },
        {
          empID: 3927,
          empName: 'Alexa',
          systemAssigned: 'Dell Inspiron 3593 16/512 GB'
        },
        {
          empID: 9887,
          empName: 'Siri',
          systemAssigned: 'Mac M1 16/256 GB'
        }
      ],
      search: '',
      centerDialogVisible: false,
      empIDforDialoge: '',
      empNameforDialoge: '',
      systemforDialoge: '',
      inStock: 89,
      distributed: 3,
      edit: false
    }
  },
  methods: {
    handleEdit(index, row) {
      let data = (index, row)
      ;(this.empIDforDialoge = data.empID),
        (this.empNameforDialoge = data.empName),
        (this.systemforDialoge = data.systemAssigned)

      this.edit = true
      this.centerDialogVisible = true
    },
    handleDelete(index, row) {
      let data = (index, row)
      this.tableData = this.tableData.filter((rec) => {
        return rec.empID !== data.empID
      })
      this.inStock = this.inStock + 1
      this.distributed -= 1
    },
    openAddDialogue() {
      this.centerDialogVisible = true
    },
    addEntry() {
      if (this.edit) {
        for (let rec of this.tableData) {
          if (rec.empID === this.empIDforDialoge) {
            ;(rec.empName = this.empNameforDialoge),
              (rec.systemAssigned = this.systemforDialoge)
            this.$notify({
              title: 'Success',
              message: 'Record successfully updated',
              type: 'success'
            })
            this.empIDforDialoge = ''
            this.empNameforDialoge = ''
            this.systemforDialoge = ''
            this.centerDialogVisible = false
            break
          }
        }
      } else {
        let tempEntry = {
          empID: this.empIDforDialoge,
          empName: this.empNameforDialoge,
          systemAssigned: this.systemforDialoge
        }

        if (
          this.empIDforDialoge === '' ||
          this.empNameforDialoge === '' ||
          this.systemforDialoge === ''
        ) {
          //Error
          this.$notify.error({
            title: 'Error',
            message: 'Please fill all entries'
          })
          this.centerDialogVisible = true
        } else if (parseInt(this.inStock) <= 0) {
          this.$notify.error({
            title: 'Error',
            message:
              'There is no item remain in stock, Please add some to perform distribution'
          })
          this.empIDforDialoge = ''
          this.empNameforDialoge = ''
          this.systemforDialoge = ''
        } else {
          this.tableData.push(tempEntry)
          this.inStock -= 1
          this.distributed += 1
          this.empIDforDialoge = ''
          this.empNameforDialoge = ''
          this.systemforDialoge = ''
          this.$notify({
            title: 'Success',
            message: 'Entry has been added successfully',
            type: 'success'
          })
          this.centerDialogVisible = false
        }
      }
    }
  },
  created() {}
}
</script>

<style scoped>
.upper-Section {
  width: 80%;
  height: 160px;
  margin-bottom: 30px;
  border-radius: 4px;
  border-radius: 4px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(248, 243, 243, 0.09),
    0 100px 80px rgba(255, 255, 255, 0.12);
}
.list-of-assets {
  overflow: hidden;
  height: 700px;
  width: 80%;
  border-radius: 4px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

>>> .el-icon-edit {
  cursor: pointer;
  margin-right: 3rem;
}

>>> .el-icon-delete {
  cursor: pointer;
}

>>> .el-table th.el-table__cell {
  color: #212f3d;
}

>>> .el-table td.el-table__cell {
  color: #212f3d;
}

.sd {
  font-size: 20px;
  color: #346edb;
  font-weight: 700;
  padding-left: 20px;
  padding-right: 70px;
  padding-bottom: 25px;
  padding-top: 24px;
}

.sm {
  font-size: 20px;
  color: #3f3844;
  font-weight: bold;
  padding-left: 20px;
  /* padding-top: 30px; */
  /* padding-left: 20px; */
  /* padding-right: 70px;; */
}

.AMS {
  margin-left: 20px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
  background-color: #3f3844;
}

.asm {
  font-size: 10px;
  margin-left: 5px;
}

.add-entry {
  margin-left: 37em;
  font-size: 15px;
  font-weight: normal;
  color: #346edb;
  cursor: pointer;
}
</style>
