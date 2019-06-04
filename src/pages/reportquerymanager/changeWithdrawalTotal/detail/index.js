import React, { Component } from 'react';
import { connect } from 'dva';
import DefaultBreadcrumb from '@/utils/Breakcrumbs';
import { Collapse, Icon, Select, Form, Table, Card } from 'antd';
import { DescriptionList } from 'ant-design-pro';

const { Description } = DescriptionList;
const FormItem = Form.Item;
const { Panel } = Collapse;
const { Option } = Select;

class CoopdetailPage extends Component {
  genExtra = keyValue => (
    <Icon
      type="plus-circle"
      theme="twoTone"
      onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
        //点击 添加信息
        console.log('对应table添加一条空数据', keyValue, this.props);
      }}
    />
  );
  render() {
    const { list } = this.props.alonedetail;
    const columns = [
      {
        title: '序号',
        visible: true,
        dataIndex: 'index',
        align: 'center',
        fixed: true,
        width: 70,
        render: (text, record, index) => index + 1,
      },
      { title: '流水号', visible: true, dataIndex: 'key', orter: true, align: 'center' },
      { title: '提现方式', visible: true, dataIndex: 'name', align: 'center' },
      { title: '总支出金额（元）', visible: true, dataIndex: 'age', align: 'center' },
      { title: '代扣税款（元）', visible: true, dataIndex: 'address', align: 'center' },
      { title: '提现金额（元）', visible: true, dataIndex: 'end_time_day2', align: 'center' },
      { title: '备注', visible: true, dataIndex: 'end_time_day4', align: 'center' },
    ];
    return (
      <div>
        <Card bordered={false}>
          <DefaultBreadcrumb />
          <Collapse defaultActiveKey={['1', '2']} expandIconPosition="right">
            <Panel header="基本信息" key="1">
              <DescriptionList size="large" col={3}>
                <Description term="流水月份">1000000000</Description>
                <Description term="用户昵称">深圳市创梦天地科技有限公司</Description>
                <Description term="用户ID">中国</Description>
                <Description term="真实姓名">CNY</Description>
                <Description term="身份证号">中国</Description>
                <Description term="手机号">CNY</Description>
              </DescriptionList>
            </Panel>
            <Panel header="当月提现明细" key="2" extra={this.genExtra(4)}>
              <Table
                columns={columns}
                dataSource={list}
                bordered
                rowKey={list.key}
                pagination={false}
              />
            </Panel>
          </Collapse>
        </Card>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    alonedetail: state.alonedetail,
    loading: state.loading.models.alonedetail,
  };
}
export default connect(mapStateToProps)(CoopdetailPage);
