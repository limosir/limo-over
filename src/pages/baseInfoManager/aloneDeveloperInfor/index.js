import React,{PureComponent} from 'react'
import DefaultBreadcrumb from '@/utils/Breakcrumbs'
import {Form,Input,Button,Select,Row,Col,Table,Breadcrumb,Modal,Card } from 'antd'
import router from 'umi/router';
import {connect} from 'dva'
import styles from'./index.less'
const FormItem = Form.Item
const {Option} = Select

class AloneDeveloperInfo extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            selectedRowKeys:[],
            selectedRows: [],
        }
    }
    // 查询
    searchSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err,values)=>{
            console.log("查询",values)
        })
    }
    // 重置
    resetForm = () => {
        this.props.form.resetFields()
    }
    //判断状态是新增还是编辑
    goAdd = (state,text, record) => {
        console.log("跳转",state,record)
        if(state==='edit'){
            router.push({ 
                pathname:'/baseinfomanager/aloneDeveloperInfor/detail',
                query:{
                    style:state,
                    data:record
                } })
        }else{
            router.push({ pathname:'/baseinfomanager/aloneDeveloperInfor/detail' })
        }
    }
    //分页点击事件
    onChangePage = (page, pageSize) => {
        console.log("分页点击",page, pageSize,list)
        // this.props.dispatch({
        //     type: 'coopcompanyinfo/updateList',
        //     payload: {
        //       page
        //     }
            
        dispatch({type: 'coopcompanyinfo/updateList',
        payload: {page}})
    }
    //分页总数显示
    showTableTotal = (total, range) => {
      return  `已选${this.state.selectedRowKeys.length}条 共${total}条`
    }
    //改变每页显示条数
    onShowSizeChange = (current, pageSize) => {
        console.log('改变每页显示条数',current, pageSize)
    }
    // 删除数据
    deleteItem = (text, record) => {
        Modal.confirm({
            title: '确定要删除这条数据吗?',
            okText: '确定',
            // okType: 'danger',
            cancelText: '取消',
            icon:'warning',
            onOk() {
              console.log('OK',text, record);
            },
            onCancel() {
              console.log('Cancel');
            },
          });
    }
   
        
        
        render() {
            const spanCol = {labelCol:{span:8},wrapperCol:{span:16}}
            const {getFieldDecorator} = this.props.form
            const {list } = this.props.coopcompanyinfo
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
            const rowSelection = {
                onChange: (selectedRowKeys,selectedRows) => {
                    console.log(selectedRowKeys,selectedRows)
                    this.setState({selectedRowKeys,selectedRows}) 
                }
            }
            const paginationSet = {
                total: 100,
                onChange: this.onChangePage,
                showTotal:this.showTableTotal,
                pageSizeOptions: ['10','15','20','25'],
                showSizeChanger:true,
                onShowSizeChange:this.onShowSizeChange
    
            }
            return (
                <div className='business'> 
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
                    <div className={styles.contentbox}>
                        <Table columns={columns} dataSource={list} bordered 
                        rowKey={list.key}  pagination={this.paginationSet} />
                    </div>
                </div>
            )
        }
       
        
    
}
function mapStateToProps(state) {
    return {
    //   list,
    //   total,
    //   page,
    //   loading: state.loading.models.coopcompanyinfo,
    coopcompanyinfo: state.alonedeveloperinfor,
    loading: state.loading.models.alonedeveloperinfor,
    };
  }
  export default connect(mapStateToProps)(Form.create()(AloneDeveloperInfo));