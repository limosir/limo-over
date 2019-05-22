import React,{PureComponent} from 'react'
import DefaultBreadcrumb from '@/utils/Breakcrumbs'
import {Form,Input,Button,Select,Row,Col,Table,Breadcrumb,Modal,Card } from 'antd'
import router from 'umi/router';
import {connect} from 'dva'
import styles from'./index.less'
const FormItem = Form.Item
const {Option} = Select
function Coopcompanyinfo ({ dispatch,list: dataSource, total, page: current }) {
   
    // 查询
    function searchSubmit(e) {
        e.preventDefault()
        this.props.form.validateFields((err,values)=>{
            console.log("查询",values)
        })
    }
    // 重置
    function resetForm(){
        this.props.form.resetFields()
    }
    //判断状态是新增还是编辑
    function goAdd(state,text, record) {
        if(state==='edit'){
            // this.props.dispatch(router.push({ 
            //     pathname:'/baseinfomanager/coopcompanyinfo/detail',
            //     query:{
            //         "type": state,
            //         "data": record
            //     } }))
            router.push({ 
                pathname:'/baseinfomanager/coopcompanyinfo/detail',
                query:{
                    style:state,
                    data:record
                } })
        }else{
            router.push({ pathname:'/baseinfomanager/coopcompanyinfo/detail' })
        }
    }
    //分页点击事件
    function onChangePage(page, pageSize) {
        console.log("分页点击",page, pageSize)
        // this.props.dispatch({
        //     type: 'coopcompanyinfo/updateList',
        //     payload: {
        //       page
        //     }
            
        dispatch({type: 'coopcompanyinfo/updateList',
        payload: {page}})
    }
    //分页总数显示
    function showTableTotal(total, range) {
    //   return  `已选${this.state.selectedRowKeys.length}条 共${total}条`
    }
    //改变每页显示条数
    function onShowSizeChange(current, pageSize) {
        console.log('改变每页显示条数',current, pageSize)
    }
    // 删除数据
    function deleteItem(text, record) {
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
    const columns=[
        {title:'序号',visible:true,dataIndex:'index',align:'center',fixed:true,width:70,render:(text,record,index)=>index+1},
        {title:'企业ID',visible:true,dataIndex: 'key',orter:true,align:'center'},
        {title:'企业名称',visible:true,dataIndex: 'name',align:'center'},
        // {title:'国家',visible:true,dataIndex: 'age',align:'center'},
        {title:'币种',visible:true,dataIndex: 'age',align:'center'},
        {title:'操作',visible:true,dataIndex: 'address',align:'center',width: 130,fixed:'right',render:(text, record)=>{
                return <div>
                        <a className="mgr" onClick={()=>goAdd('edit',text, record)}>编辑</a>
                        <a className="red" onClick={()=>deleteItem(text, record)}>删除</a>
                    </div>
            }
        }
    ]
    const paginationSet = {
        total: 100,
        onChange: onChangePage,
        showTotal:showTableTotal,
        pageSizeOptions: ['10','15','20','25'],
        showSizeChanger:true,
        onShowSizeChange:onShowSizeChange

    }
    const spanCol = {labelCol:{span:8},wrapperCol:{span:16}}
    
        // const {getFieldDecorator} = this.props.form
        
        
        
       
        return (
            <div className={styles.business}> 
                <Card bordered={false}>
                <DefaultBreadcrumb/>
                    <div className={styles.search} id="search">
                        {/* <Form layout="inline" onSubmit={searchSubmit}>
                            <Row className="mgb10">
                                <Col span={18}>
                                         initialValue:'全部'
                                        <FormItem label="业务类型" className={styles.searchItem} {...spanCol}>
                                        {getFieldDecorator('pay_channel',{
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
                        </Form> */}
                    </div>
                </Card> 
                <div className={styles.content}>
                    <Table columns={columns} dataSource={dataSource} bordered 
                    rowKey={dataSource.id}  pagination={paginationSet} />
                </div>
            </div>
        )
    
}
function mapStateToProps(state) {
    const { list, total, page } = state.coopcompanyinfo;
    return {
      list,
      total,
      page,
      loading: state.loading.models.coopcompanyinfo,
    };
  }
  export default connect(mapStateToProps)(Coopcompanyinfo);
// const business = Form.create()(Coopcompanyinfo)
// export default connect()(business)