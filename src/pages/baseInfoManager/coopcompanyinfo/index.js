import React,{PureComponent} from 'react'
import DefaultBreadcrumb from '@/utils/Breakcrumbs'
import {Form,Input,Button,Select,Row,Col,Table,Breadcrumb,Modal,Card } from 'antd'
import {routerRedux} from 'dva/router'
import {connect} from 'dva'
import styles from'./index.less'
const FormItem = Form.Item
const {Option} = Select
class businessFrom extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            selectedRowKeys:[],
            selectedRows: [],
        }
    }
    // 查询
    searchSubmit = (e)=>{
        e.preventDefault()
        this.props.form.validateFields((err,values)=>{
            console.log(values)
        })
    }
    // 重置
    resetForm = ()=>{
        this.props.form.resetFields()
    }
    //判断状态是添加还是编辑
    goAdd = (state,text, record)=>{
        if(state==='edit'){
            this.props.dispatch(routerRedux.push({ pathname:'/baseinfomanager/coopcompanyinfo/detail',state: record }))
            console.log(state, record)
        }else{
            this.props.dispatch(routerRedux.push({ pathname:'/baseinfomanager/coopcompanyinfo/detail' }))
        }
    }
    //分页点击事件
    onChangePage = (page, pageSize)=> {
        console.log("分页点击",page, pageSize)
    }
    //分页总数显示
    showTableTotal = (total, range) => {
      return  `已选${this.state.selectedRowKeys.length}条 共${total}条`
    }
    //改变每页显示条数
    onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize)
    }
    // 删除数据
    deleteItem = (text, record)=>{
        Modal.confirm({
            title: '确定要删除这条数据吗?',
            okText: '确定',
            // okType: 'danger',
            cancelText: '取消',
            iconType:'warning',
            onOk() {
              console.log('OK',text, record);
            },
            onCancel() {
              console.log('Cancel');
            },
          });
    }
    render(){
        const {getFieldDecorator} = this.props.form
        const spanCol = {labelCol:{span:8},wrapperCol:{span:16}}
        const dataSource=[
            { id:'1',months:'jkjkjkjjkk',business_name:"某某企业",start_time_day:"中国",end_time_day: "RMB"},
            { id:'2',months:'jkjkjkjjkk'},
            { id:'3',months:'jkjkjkjjkk'},
            { id:'4',months:'jkjkjkjjkk'},
            { id:'5',months:'jkjkjkjjkk'},
            { id:'6',months:'jkjkjkjjkk'},
            { id:'7',months:'jkjkjkjjkk'},
           ]
        const columns=[
            {title:'序号',visible:true,dataIndex:'index',align:'center',fixed:true,width:70,render:(text,record,index)=>index+1},
            {title:'企业ID',visible:true,dataIndex: 'months',orter:true,align:'center'},
            {title:'企业名称',visible:true,dataIndex: 'business_name',align:'center'},
            {title:'国家',visible:true,dataIndex: 'start_time_day',align:'center'},
            {title:'币种',visible:true,dataIndex: 'end_time_day',align:'center'},
            {title:'操作',visible:true,dataIndex: 'action',align:'center',width: 130,fixed:'right',render:(text, record)=>{
                    return <div>
                        <a className="mgr" onClick={()=>this.goAdd('edit',text, record)}>编辑</a>
                        <a className="red" onClick={()=>this.deleteItem(text, record)}>删除</a>
                    </div>
                }
            }
        ]
        
        const paginationSet = {
            total: 100,
            onChange: this.onChangePage,
            showTotal:this.showTableTotal,
            pageSizeOptions: ['10','15','20','25'],
            showSizeChanger:true,
            onShowSizeChange:this.onShowSizeChange

        }
        return (
            <div className={styles.business}> 
                
                <Card bordered={false}>
                <DefaultBreadcrumb/>
                    <div className={styles.search} id="search">
                        <Form layout="inline" onSubmit={this.searchSubmit}>
                            <Row className="mgb10">
                                <Col span={18}>
                                    <FormItem label="业务类型" className={styles.searchItem} {...spanCol}>
                                        {getFieldDecorator('pay_channel',{
                                            initialValue:'全部'
                                        })(
                                            <Select  placeholder="选择支付类型">
                                                <Option value="0">CN</Option>
                                                <Option value="1">USA</Option>
                                                <Option value="2">CNT</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                    <FormItem label="流水状态" className={styles.searchItem}  {...spanCol}>
                                        {getFieldDecorator('device_type',{
                                            initialValue:'全部'
                                        })(
                                            <Select  placeholder="选择设备类型">
                                                <Option value="0">全部</Option>
                                        </Select>
                                        )}
                                    </FormItem>
                                    <FormItem label="供应商名称" className={styles.searchItem} {...spanCol}>
                                        {getFieldDecorator('status4')(
                                            <Input placeholder="请输入供应商名称"/>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={6}>
                                    <FormItem>
                                        <Button type="primary" className="mgr10"  htmlType="submit" >查询</Button>
                                        <Button type="primary" className="mgr20"   onClick={this.resetForm}>重置</Button>
                                        <Button type="primary" className="mgr10"   onClick={this.goAdd}>新增企业</Button>
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Card> 
                <div className={styles.content}>
                    <Table columns={columns} dataSource={dataSource} bordered 
                    rowKey={record=>record.id}  pagination={paginationSet} />
                </div>
            </div>
        )
    }
}
const business = Form.create()(businessFrom)
export default connect()(business)