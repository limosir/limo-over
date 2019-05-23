import React,{Component} from 'react';
import {connect} from 'dva'
import DefaultBreadcrumb from '@/utils/Breakcrumbs'
import { Collapse, Icon, Select,Form,Table,Card } from 'antd';
import { DescriptionList } from 'ant-design-pro';

const { Description } = DescriptionList;
const FormItem = Form.Item
const { Panel } = Collapse;
const { Option } = Select;

function  CoopdetailPage({ dispatch,list: dataSource, total, page: current }) {
   const genExtra = (keyValue) => (
      <Icon type="plus-circle" theme="twoTone" onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
        //点击 添加信息 
        console.log("对应table添加一条空数据",keyValue,this.props.location.query)
        console.log("state.bankInfo",this.state.bankInfo)
      }}/>
      );
const columns=[
    {title:'序号',visible:true,dataIndex:'index',align:'center',fixed:true,width:70,render:(text,record,index)=>index+1},
    {title:'账户名称',visible:true,dataIndex: 'key',orter:true,align:'center'},
    {title:'银行账户',visible:true,dataIndex: 'name',align:'center'},
    {title:'开户银行',visible:true,dataIndex: 'age',align:'center'},
    {title:'开户支行',visible:true,dataIndex: 'address',align:'center'},
    // {title:'所在地',visible:true,dataIndex: 'end_time_day2',align:'center'},
    // {title:'业务类型',visible:true,dataIndex: 'end_time_day3',align:'center'},
    // {title:'备注',visible:true,dataIndex: 'end_time_day4',align:'center'},
]
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <div>
    <Card bordered={false}>
    <DefaultBreadcrumb/>
      <Collapse
          defaultActiveKey={['1','2']}
         
          expandIconPosition='right'
        >
          <Panel header="基本信息" key="1">
            <DescriptionList size="large"  col={2}>
              <Description term="合作方ID">1000000000</Description>
              <Description term="公司注册名称">深圳市创梦天地科技有限公司</Description>
              <Description term="营业执照注册号">911101080000000000X</Description>
              <Description term="公司地址">XXXXXXXXXXXXX</Description>
              <Description term="企业所在国家">中国</Description>
              <Description term="往来款币种">CNY</Description>
            </DescriptionList>
          </Panel>
          <Panel header="开票信息" key="2">
            <DescriptionList size="large"  col={2}>
              <Description term="公司名称">北京瓦力网络科技有限公司</Description>
              <Description term="纳税人识别号">XXXXXXXXX</Description>
              <Description term="纳税人类型">一般纳税人</Description>
              <Description term="发票类型及税率">增值税专用发票6%</Description>
              <Description term="开票信息">信息服务费</Description>
              <Description term="开户行及账号">XXXXXXXXX</Description>
              <Description term="税收编号">XXXXXXXXX</Description>
              <Description term="税收编码名称">XXXXXXXXX</Description>
              <Description term="地址、电话">XXXXXXXXXXXXX</Description>
            </DescriptionList>
          </Panel>
          <Panel header="有效协议" key="3" extra={genExtra(3)}>
            <div>{text}</div>
          </Panel>
          <Panel header="银行信息" key="4" extra={genExtra(4)}>
            <Table columns={columns} dataSource={dataSource} bordered 
                rowKey={dataSource.id} pagination={false}/>
          </Panel>
          <Panel header="邮寄地址" key="5" extra={genExtra(5)}>
            <div>{text}</div>
          </Panel>
          <Panel header="商务联系人" key="6" >
            <div>{text}</div>
          </Panel>
          <Panel header="财务联系人" key="7" >
            <div>{text}</div>
          </Panel>
      </Collapse>
      </Card>
  </div>
  )
 

}
// const details = Form.create()(CoopdetailPage)
// export default connect()(details)
function mapStateToProps(state) {
  const { list, total, page } = state.coopdetail;
  return {
    list,
    total,
    page,
    loading: state.loading.models.coopdetail,
  };
}
export default connect(mapStateToProps)(CoopdetailPage);