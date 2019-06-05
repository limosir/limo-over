import React, { PureComponent } from 'react';
import DefaultBreadcrumb from '@/utils/Breakcrumbs';
import {
  Form,
  Input,
  DatePicker,
  Button,
  Divider,
  Select,
  Row,
  Col,
  Table,
  Checkbox,
  Card,
} from 'antd';
import { connect } from 'dva';
import cn from 'classnames';
import styles from './index.less';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const { Option } = Select;
class settlementStateQuery extends PureComponent {
  constructor(props) {
    super(props);
    const defaultColumns = [
      {
        title: '序号',
        visible: true,
        dataIndex: 'index',
        align: 'center',
        width: 70,
        render: (text, record, index) => index + 1,
      },
      // {title:'流水ID',visible:true,dataIndex: 'pay_flow_uuid',orter:true,fixed:true,align:'center',width:100},
      { title: '业务类型', visible: true, dataIndex: 'business_name', align: 'center', width: 100 },
      {
        title: '支付类型',
        visible: true,
        dataIndex: 'start_time_day',
        align: 'center',
        width: 100,
      },
      { title: '合作方ID', visible: true, dataIndex: 'end_time_day', align: 'center', width: 100 },
      { title: '合作方名称', visible: true, dataIndex: 'months', align: 'center', width: 100 },
      { title: 'APPID', visible: true, dataIndex: 'channel1', align: 'center', width: 100 },
      { title: '游戏ID', visible: true, dataIndex: 'channel2', align: 'center', width: 100 },
      { title: '游戏名称', visible: true, dataIndex: 'channel3', align: 'center', width: 100 },
      { title: '结算暂停起始月份', visible: true, dataIndex: 'channel4', align: 'center', width: 100 },
      { title: '结算暂停结束月份', visible: true, dataIndex: 'channel5', align: 'center', width: 100 },
      { title: '最近结算账单月份', visible: true, dataIndex: 'channel6', align: 'center', width: 100 },
      { title: '操作人', visible: true, dataIndex: 'channel7', align: 'center', width: 100 },
      {
        title: '操作日期',
        visible: true,
        dataIndex: 'channel8',
        align: 'center',
        width: 150,
      },
      {
        title: '暂停原因',
        visible: true,
        dataIndex: 'channel9',
        align: 'center',
        width: 160,
      },
     
    ];
    this.state = {
      monthValue: [],
      mode: ['month', 'month'],
      visible: true,
      checkAll: true,
      showCol: [
        'index',
        'months',
        'business_name',
        'start_time_day',
        'end_time_day',
        'channel1',
        'channel2',
        'channel3',
        'channel4',
        'channel5',
        'channel6',
        'channel7',
        'channel8',
        'channel9'
      ],
      defaultColumns,
      showColumns: defaultColumns,
      selectedRowKeys: [],
      businessType: [
        { name: '全部', value: 0 },
        { name: '联运-SDK-常规', value: 1 },
        { name: '联运-SDK-网易', value: 2 },
        { name: '联运-SDK-腾讯', value: 3 },
        { name: '联运-SDK-境外', value: 4 },
        { name: '联运-SDK-Unity', value: 5 },
        { name: '联运-SDK-测试', value: 6 },
        { name: '联运-SDK-应用', value: 7 },
        { name: '联运-SDK-H5游戏', value: 8 },
        { name: '联运-SDK-其他', value: 9 },
        { name: '联运-SDK-自研', value: 10 },
        { name: '联运-非SDK-CP', value: 11 },
        { name: '联运-非SDK-运营商', value: 12 },
        { name: '联运-非SDK-腾讯', value: 13 },
        { name: '联运-聚合包', value: 14 },
        { name: '联运-分销', value: 15 },
        { name: '发行-小米平台-RPG', value: 16 },
        { name: '发行-小米平台-电竞', value: 17 },
        { name: '发行-小米平台-其他', value: 18 },
        { name: '发行-其他安卓-RPG', value: 19 },
        { name: '发行-其他安卓-电竞', value: 20 },
        { name: '发行-其他安卓-其他', value: 21 },
        { name: '发行-iOS-RPG', value: 22 },
        { name: '发行-iOS-电竞', value: 23 },
        { name: '发行-iOS-其他', value: 24 },
        { name: '发行-分销', value: 25 },
      ],
      payType: [
        { name: '全部', value: 0 },
        { name: '米币', value: 1 },
        { name: '微信', value: 2 },
        { name: '支付宝', value: 3 },
        { name: 'QQ钱包', value: 4 },
      ],
      checkBusinessType: 0,
    };
  }
  //切换筛选条件框的隐藏与显示
  toggleSearch = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  // 对流水月份的控制
  handlePanelChange = (monthValue, mode) => {
    this.setState({
      monthValue,
      mode: [mode[0] === 'date' ? 'month' : mode[0], mode[1] === 'date' ? 'month' : mode[1]],
    });
  };
  // 更改展示字段
  checkBoxChange = e => {
    const checkBoxValue = e.target.value;
    console.log(this.state.showCol, checkBoxValue);
    console.log(this.state.showCol.indexOf(checkBoxValue));
    if (this.state.showCol.indexOf(checkBoxValue) !== -1) {
      this.setState(
        {
          showCol: this.state.showCol.filter(item => item !== checkBoxValue),
        },
        () => this.changeChecked()
      );
    } else {
      this.setState(
        {
          showCol: [...this.state.showCol, checkBoxValue],
        },
        () => this.changeChecked()
      );
    }
  };
  // 更改实际显示的字段
  changeChecked = () => {
    let tempColumns = this.state.defaultColumns;
    let showArr = [];
    tempColumns.forEach(item => {
      if (this.state.showCol.indexOf(item.dataIndex) !== -1) {
        item.visible = true;
        showArr.push(item);
      } else {
        item.visible = false;
      }
    });
    this.setState({
      defaultColumns: tempColumns,
      showColumns: showArr,
    });
  };
  // 查询
  searchSubmit = e => {
    //查询带参数 全部带  看如何赋值
    console.log('查询', this.props);
    const { dispatch } = this.props;

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (this.state.visible) {
        delete values.pay_channel2;
        delete values.device_type3;
        delete values.status;
        delete values.pay_channel5;
        delete values.device_type7;
        delete values.status1;
        delete values.status2;
      }
      console.log(values);
      dispatch({ type: 'settlementstatequery/updateList', payload: 1 });
      this.setState({
        visible: true,
      });
    });
  };
  // 重置
  resetForm = () => {
    this.props.form.resetFields();
  };
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  getListAllKey = () => {
    let listKey = [];
    //获取当前页数据
    const data = this.props.settlementstatequery.list;
    data.forEach(element => {
      //获取rowKey字段
      listKey.push(element.key);
    });
    return listKey;
  };
  choiceAll = () => {
    // const {data} = this.state;
    this.setState({
      selectedRowKeys: this.state.checkAll ? this.getListAllKey() : [],
      // selectedRowKeys: data.map((item, index) => index),
      checkAll: !this.state.checkAll,
    });
    console.log(this.state.selectedRowKeys, this.state.checkAll);
  };
  //
  changeTable = (page, filter, sorter) => {
    console.log(page, filter, sorter);
  };
  //业务类型更改
  businessTypeChange = value => {
    this.props.form.resetFields('device_type3', []);
    this.setState(() => {
      return {
        checkBusinessType: value,
      };
    });
  };
  render() {
    const { list } = this.props.settlementstatequery;
    const { loading } = this.props;
    const { businessType, payType, checkBusinessType, selectedRowKeys } = this.state;
    // 获得表格的实际宽度
    let sum = 0;
    this.state.showColumns.forEach(item => {
      sum += item.width;
    });
    const { getFieldDecorator } = this.props.form;
    const spanCol = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };
    const dateSpanCol = { labelCol: { span: 7 }, wrapperCol: { span: 17 } };
    const btnTxt = this.state.visible ? '搜索' : '确定';
    const searchTxt = this.state.visible ? '筛选' : '返回';
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      onSelection: this.onSelection,
      // onChange: (selectedRowKeys) => {
      //     this.setState({selectedRowKeys})
      // }
    };
    return (
      <div className={styles.unsettled}>
        <Card bordered={false}>
          <DefaultBreadcrumb />
          <div className="search" id="search">
            <Form layout="inline" onSubmit={this.searchSubmit}>
              <Row className="mgb10">
                <Col span={18}>
                  <FormItem label="业务类型" className={styles.searchItem} {...spanCol}>
                    {getFieldDecorator('pay_channel', {
                      initialValue: '全部',
                    })(
                      <Select placeholder="选择业务类型" onChange={this.businessTypeChange}>
                        {businessType.map((item, index) => (
                          <Option key={index} value={item.value}>
                            {item.name}
                          </Option>
                        ))}
                      </Select>
                    )}
                  </FormItem>
                  <FormItem label="供应商名称" className={styles.monthItem} {...dateSpanCol}>
                    {getFieldDecorator('status4')(<Input placeholder="请输入供应商名称" />)}
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem>
                    <Button type="primary" htmlType="submit" className="mgr10">
                      {btnTxt}
                    </Button>
                    <Button type="primary" className="mgr10" onClick={this.resetForm}>
                      重置
                    </Button>
                    <Button type="primary" className="mgr10" onClick={this.toggleSearch}>
                      {searchTxt}
                    </Button>
                  </FormItem>
                </Col>
              </Row>
              <Row className="mgb10" style={{ display: this.state.visible ? 'none' : 'block' }}>
                <Col span={22}>
                  <FormItem label="设备类型" className={styles.searchItem} {...spanCol}>
                    {getFieldDecorator('pay_channel2', {
                      initialValue: '全部',
                    })(
                      <Select placeholder="选择设备类型">
                        <Option value="0">全部</Option>
                      </Select>
                    )}
                  </FormItem>
                  <FormItem label="支付类型" className={styles.searchItem} {...spanCol}>
                    {getFieldDecorator('device_type3', {
                      initialValue: '全部',
                    })(
                      <Select placeholder="选择支付类型">
                        {payType.map((item, index) => (
                          <Option key={index} value={item.value}>
                            {item.name}
                          </Option>
                        ))}
                        {checkBusinessType === 8 ? <Option value={5}>金钻</Option> : null}
                      </Select>
                    )}
                  </FormItem>
                  <FormItem label="流水月份" className={styles.monthItem} {...dateSpanCol}>
                    {getFieldDecorator('status', {
                      initialValue: this.state.monthValue,
                    })(
                      <RangePicker
                        placeholder={['Start month', 'End month']}
                        format="YYYY-MM"
                        onPanelChange={this.handlePanelChange}
                        mode={this.state.mode}
                      />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row style={{ display: this.state.visible ? 'none' : 'block' }}>
                <Col span={24}>
                  <FormItem label="供应商ID" className={styles.searchItem} {...spanCol}>
                    {getFieldDecorator('pay_channel5')(<Input placeholder="请输入供应商ID" />)}
                  </FormItem>
                  <FormItem label="游戏ID" className={styles.searchItem} {...spanCol}>
                    {getFieldDecorator('device_type7')(<Input placeholder="请输入游戏ID" />)}
                  </FormItem>
                  <FormItem label="游戏名称" className={styles.monthItem} {...dateSpanCol}>
                    {getFieldDecorator('status1')(<Input placeholder="请输入游戏名称" />)}
                  </FormItem>
                  <FormItem label="APPID" className={styles.searchItem} {...spanCol}>
                    {getFieldDecorator('status2')(<Input placeholder="请输入APPID" />)}
                  </FormItem>
                </Col>
              </Row>
            </Form>

            <div style={{ display: this.state.visible ? 'none' : 'block' }}>
              <Divider className="mgb30" orientation="left" dashed>
                {' '}
                展示字段
              </Divider>
              {this.state.defaultColumns.map(item => {
                return (
                  <Checkbox
                    className={styles.cbw}
                    key={item.dataIndex}
                    value={item.dataIndex}
                    checked={item.visible}
                    onChange={this.checkBoxChange}
                  >
                    {item.title}
                  </Checkbox>
                );
              })}
              <Divider
                className="mgb30"
                style={{ display: this.state.visible ? 'none' : 'block' }}
              />
            </div>
          </div>
          <div className={styles.contentbox}>
            <Table
              columns={this.state.showColumns}
              dataSource={list}
              bordered
              rowSelection={rowSelection}
              rowKey={list.key}
              scroll={{ x: sum }}
              onChange={this.changeTable}
              loading={loading}
            />
            <div className="pos">
              <Button type="primary" className="mgr10" onClick={this.choiceAll}>
                全选
              </Button>
              <Button type="primary">导出</Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
const Estimate = Form.create()(settlementStateQuery);
// export default connect()(estimate)
function mapStateToProps(state) {
  return {
    settlementstatequery: state.settlementstatequery,
    loading: state.loading.models.settlementstatequery,
  };
}

export default connect(mapStateToProps)(Estimate);
