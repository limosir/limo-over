import React,{PureComponent} from 'react'
import DefaultBreadcrumb from '@/utils/Breakcrumbs'
import {Form,Input,DatePicker,Button,Divider,Select,Row,Col,Table,Checkbox,Breadcrumb } from 'antd'
import {connect} from 'dva'
// import cn from 'classnames'
// import './estimate.scss'

const FormItem = Form.Item
const {RangePicker} = DatePicker
const {Option} = Select
function Estimatewaterform ({ dispatch,list, total, page }) {
        const defaultColumns=[
            {title:'序号',visible:true,dataIndex:'index',align:'center',fixed:true,width:70,render:(text,record,index)=>index+1},
            // {title:'流水ID',visible:true,dataIndex: 'pay_flow_uuid',orter:true,fixed:true,align:'center',width:100},
            {title:'业务类型',visible:true,dataIndex: 'business_name',align:'center',width:100},
            // {title:'支付类型',visible:true,dataIndex: 'start_time_day',align:'center',width: 100},
            // {title:'合作类型',visible:true,dataIndex: 'end_time_day',align:'center',width: 100},
            // {title:'流水月份',visible:true,dataIndex: 'month',align:'center',width: 100},
            // {title:'开始时间',visible:true,dataIndex: 'start_time_month',align:'center',width: 100},
            // {title:'结束时间',visible:true,dataIndex: 'end_time_month',align:'center',width: 100},
            {title:'APPID',visible:true,dataIndex: 'app_id',align:'center',width: 100},
            // {title:'游戏ID',visible:true,dataIndex: 'ext_id',align:'center',width: 100},
            // {title:'游戏名称',visible:true,dataIndex: 'game_name',align:'center',width: 100},
            // {title:'商户ID',visible:true,dataIndex: 'merchant_id',align:'center',width: 100},
            // {title:'商户名称',visible:true,dataIndex: 'merchant_name',align:'center',width: 100},
            // {title:'合作方ID(供应商)',visible:true,dataIndex: 'customer_local_id',align:'center',width: 150},
            // {title:'合作方名称(供应商)',visible:true,dataIndex: 'customer_name',align:'center',width: 160},
            // {title:'开发者本地ID',visible:true,dataIndex: 'channel11',align:'center',width: 120},
            // {title:'汇率',visible:true,dataIndex: 'channel12',align:'center',width: 100},
            // {title:'合作类型',visible:true,dataIndex: 'cooperation_type_id',align:'center',width: 100},
            // {title:'设备类型',visible:true,dataIndex: 'device_type_id',align:'center',width: 100},
            // {title:'支付类型',visible:true,dataIndex: 'pay_channel_id',align:'center',width: 100},
            // {title:'发票类型',visible:true,dataIndex: 'channel16',align:'center',width: 100},
            // {title:'税率',visible:true,dataIndex: 'tax_rate',align:'center',width: 100},
            // {title:'实际扣减税率',visible:true,dataIndex: 'channel18',align:'center',width: 120},
            // {title:'实际扣减税费',visible:true,dataIndex: 'channel19',align:'center',width: 120},
            // {title:'米币礼券',visible:true,dataIndex: 'channel20',align:'center',width: 100},
            // {title:'流水金额*5%',visible:true,dataIndex: 'channel21',align:'center',width: 120},
            // {title:'用户运营成本',visible:true,dataIndex: 'channel22',align:'center',width: 120},
            // {title:'游戏礼券',visible:true,dataIndex: 'channel23',align:'center',width: 100},
            // {title:'分成礼券',visible:true,dataIndex: 'channel25',align:'center',width: 100},
            // {title:'不分成礼券',visible:true,dataIndex: 'channel24',align:'center',width: 120},
            // {title:'米币礼券',visible:true,dataIndex: 'channel26',align:'center',width: 100},
            // {title:'流水金额*5%',visible:true,dataIndex: 'channel27',align:'center',width: 120},
            // {title:'用户运营成本',visible:true,dataIndex: 'channel28',align:'center',width: 120},
            // {title:'可分成金额 ',visible:true,dataIndex: 'channel29',align:'center',width: 120},
            // {title:'渠道费率 ',visible:true,dataIndex: 'channel30',align:'center',width: 100},
            // {title:'渠道费 ',visible:true,dataIndex: 'channel31',align:'center',width: 100},
            // {title:'扣减税率',visible:true,dataIndex: 'channel32',align:'center',width: 100},
            // {title:'扣减税费 ',visible:true,dataIndex: 'channel33',align:'center',width: 100},
            // {title:'CP分成比 ',visible:true,dataIndex: 'developer_divide_rate',align:'center',width: 100},
            // {title:'预估CP分成额(含税) ',visible:true,dataIndex: 'developer_divide_amount_tax_included',align:'center',width: 160},
            // {title:'预估CP分成额(不含税) ',visible:true,dataIndex: 'developer_divide_amount_tax_excluded',align:'center',width: 180},
            // {title:'预估CP分成额(税额) ',visible:true,dataIndex: 'developer_divide_amount_tax',align:'center',width: 160},
        ]
        const state={
            monthValue:[],
            mode:['month','month'],
            visible:true,
            checkAll:true,
            showCol:['index','months','business_name','start_time_day','end_time_day','channel1','channel2',
            'channel3','channel4','channel5','channel6','channel7','channel8','channel9','channel10','channel11'
            ,'channel12','channel13','channel14','channel15','channel16','channel17','channel18','channel19'
            ,'channel20','channel21','channel22','channel23','channel24','channel25','channel26','channel27'
            ,'channel28','channel29','channel30','channel31','channel32','channel33','channel34'],
            defaultColumns,
            showColumns:defaultColumns,
            selectedRowKeys:[],
            businessType: [
                {name:"全部",value: 0},
                {name:"联运-SDK-常规",value: 1},
                {name:"联运-SDK-网易",value: 2},
                {name:"联运-SDK-腾讯",value: 3},
                {name:"联运-SDK-境外",value: 4},
                {name:"联运-SDK-Unity",value: 5},
                {name:"联运-SDK-测试",value: 6},
                {name:"联运-SDK-应用",value: 7},
                {name:"联运-SDK-H5游戏",value: 8},
                {name:"联运-SDK-其他",value: 9},
                {name:"联运-SDK-自研",value: 10},
                {name:"联运-非SDK-CP",value: 11},
                {name:"联运-非SDK-运营商",value: 12},
                {name:"联运-非SDK-腾讯",value: 13},
                {name:"联运-聚合包",value: 14},
                {name:"联运-分销",value: 15},
                {name:"发行-小米平台-RPG",value: 16},
                {name:"发行-小米平台-电竞",value: 17},
                {name:"发行-小米平台-其他",value: 18},
                {name:"发行-其他安卓-RPG",value: 19},
                {name:"发行-其他安卓-电竞",value: 20},
                {name:"发行-其他安卓-其他",value: 21},
                {name:"发行-iOS-RPG",value: 22},
                {name:"发行-iOS-电竞",value: 23},
                {name:"发行-iOS-其他",value: 24},
                {name:"发行-分销",value: 25},
            ],
            payType: [
                {name:"全部",value: 0},
                {name:"米币",value: 1},
                {name:"微信",value: 2},
                {name:"支付宝",value:3},
                {name:"QQ钱包",value: 4},
               
            ],
            checkBusinessType: 0
        }
    
    //切换筛选条件框的隐藏与显示
    function toggleSearch() {
           state.visible = !state.visible
    }
    // 对流水月份的控制
    function handlePanelChange(monthValue, mode) {
        this.setState({
            monthValue,
            mode: [
              mode[0] === 'date' ? 'month' : mode[0],
              mode[1] === 'date' ? 'month' : mode[1],
            ]
        })
    }
    // 更改展示字段
    function checkBoxChange(e) {
        const checkBoxValue = e.target.value
        if(state.showCol.indexOf(checkBoxValue) !== -1){
          
                state.showCol=state.showCol.filter(item=>item!==checkBoxValue)
           
            changeChecked()
        }else{
           
                state.showCol = [
                    ...state.showCol,
                    checkBoxValue
                ]
                changeChecked()
            }
        
    }
    // 更改实际显示的字段
    function changeChecked() {
        let tempColumns = state.defaultColumns
        let showArr=[]
        tempColumns.forEach(item=>{
            if(state.showCol.indexOf(item.dataIndex)!==-1){
                item.visible=true
                showArr.push(item)
            }else{
                item.visible=false
            }
        })
        this.setState({
            defaultColumns:tempColumns,
            showColumns:showArr
        })
    }
    // 查询
    function searchSubmit(e) {
        //查询带参数 全部带  看如何赋值
        console.log("查询",this.props)
        const { dispatch } = this.props;
       
        e.preventDefault()
        this.props.form.validateFields((err,values)=>{
            if(state.visible){
                delete values.pay_channel2
                delete values.device_type3
                delete values.status
                delete values.pay_channel5
                delete values.device_type7
                delete values.status1
                delete values.status2
            }
            console.log(values)
            dispatch({type: 'ReportEstimate/add',payload:1})
            this.setState({
                visible: true
            })
        })
    }
    // 重置
    function resetForm() {
        this.props.form.resetFields()
    }
    function onSelectChange(selectedRowKeys) {
		console.log('selectedRowKeys changed: ', selectedRowKeys);
		this.setState({selectedRowKeys});
    };
    function getListAllKey() {
        let listKey = []
        //获取当前页数据
        const data =this.props.ReportEstimate.list
           data.forEach(element => {
               listKey.push(element.pay_flow_uuid)
           });
           return listKey;
    }
   function choiceAll() {
        // const {data} = this.state;
        this.setState({
            selectedRowKeys:this.state.checkAll ? this.getListAllKey(): [],
            // selectedRowKeys: data.map((item, index) => index),
            checkAll: !this.state.checkAll
        });
        console.log(this.state.selectedRowKeys,this.state.checkAll)
    }
    // 
    function changeTable(page,filter,sorter) {
        console.log(page,filter,sorter)
    }
    //业务类型更改
    function businessTypeChange(value) {
        this.props.form.resetFields('device_type3',[])
        this.setState(() => {
            return {
                checkBusinessType: value
            }
        })
    }
        // const { list } = this.props.ReportEstimate;
        // console.log("props",this.props)
        const {businessType,payType,checkBusinessType,selectedRowKeys} = this.state
        // 获得表格的实际宽度
        let sum =0
        this.state.showColumns.forEach((item)=>{
            sum+=item.width
        })
        const {getFieldDecorator} = this.props.form
        const spanCol = {labelCol:{span:8},wrapperCol:{span:16}}
        const dateSpanCol = {labelCol:{span:7},wrapperCol:{span:17}}
        const btnTxt = this.state.visible ? '搜索' :'确定'
        const searchTxt = this.state.visible ? '筛选' :'返回'
        const rowSelection = {
            selectedRowKeys,
			onChange: this.onSelectChange,
			hideDefaultSelections: true,
			onSelection: this.onSelection,
            // onChange: (selectedRowKeys) => {
            //     this.setState({selectedRowKeys}) 
            // }
        }
        return (
            <div className="unsettled"> 
                <DefaultBreadcrumb/>
                <div className="search" id="search">
                    <Form layout="inline" onSubmit={this.searchSubmit}>
                        <Row className="mgb10">
                            <Col span={18}>
                                <FormItem label="业务类型" className="searchItem" {...spanCol}>
                                    {getFieldDecorator('pay_channel',{
                                        initialValue:'全部'
                                    })(
                                        <Select  placeholder="选择业务类型" onChange={this.businessTypeChange}>
                                            {
                                                businessType.map((item, index) => (
                                                    <Option key={index} value={item.value}>{item.name}</Option>
                                                ))
                                            }
                                            
                                    </Select>
                                    )}
                                </FormItem>
                                <FormItem label="供应商名称" className="monthItem" {...dateSpanCol}>
                                    {getFieldDecorator('status4')(
                                        <Input placeholder="请输入供应商名称"/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem>
                                    <Button type="primary"  htmlType="submit" className="mgr10">{btnTxt}</Button>
                                    <Button type="primary"  className="mgr" onClick={this.resetForm}>重置</Button>
                                    <Button type="primary"  className="mgr10" onClick={this.toggleSearch}>{searchTxt}</Button>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row className={cn('mgb10',{dn:this.state.visible})} >
                            <Col span={22}>
                                <FormItem label="设备类型" className="searchItem" {...spanCol}>
                                    {getFieldDecorator('pay_channel2',{
                                        initialValue:'全部'
                                    })(
                                        <Select  placeholder="选择设备类型">
                                            <Option value="0">全部</Option>
                                    </Select>
                                    )}
                                </FormItem>
                                <FormItem label="支付类型" className="searchItem" {...spanCol}>
                                    {getFieldDecorator('device_type3',{
                                        initialValue:'全部'
                                    })(
                                        <Select  placeholder="选择支付类型">
                                            {
                                                payType.map((item, index) => (
                                                    <Option key={index} value={item.value}>{item.name}</Option>
                                                ))
                                            }
                                            {
                                                checkBusinessType === 8 ? <Option value={5}>金钻</Option> : null
                                            }
                                    </Select>
                                    )}
                                </FormItem>
                                <FormItem label="流水月份" className="monthItem"  {...dateSpanCol}>
                                    {getFieldDecorator('status',{ 
                                        initialValue:this.state.monthValue
                                    })(
                                        <RangePicker placeholder={['Start month', 'End month']} format="YYYY-MM"
                                             onPanelChange={this.handlePanelChange} mode={this.state.mode} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row className={cn({dn:this.state.visible})}>
                            <Col span={24}>
                                <FormItem label="供应商ID"  className="searchItem"  {...spanCol}>
                                    {getFieldDecorator('pay_channel5')(
                                        <Input placeholder="请输入供应商ID"/>
                                        )}
                                </FormItem>
                                <FormItem label="游戏ID"  className="searchItem"  {...spanCol}>
                                    {getFieldDecorator('device_type7')(
                                        <Input placeholder="请输入游戏ID"/>
                                        )}
                                </FormItem>
                                <FormItem label="游戏名称"  className="monthItem" {...dateSpanCol}>
                                    {getFieldDecorator('status1')(
                                        <Input placeholder="请输入游戏名称"/>
                                        )}
                                </FormItem>
                                <FormItem label="APPID" className="searchItem"  {...spanCol} >
                                    {getFieldDecorator('status2')(
                                        <Input placeholder="请输入APPID"/>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                    <Divider className={cn('mgb30',{dn:this.state.visible})} orientation="left" dashed > 展示字段</Divider>
                    <div  className={cn({dn:this.state.visible})}>
                        {
                            this.state.defaultColumns.map(item=>{
                                return <Checkbox className="cbw" key={item.dataIndex} value={item.dataIndex} checked={item.visible} 
                                 onChange={this.checkBoxChange}>{item.title}</Checkbox>
                            })
                        }
                    </div>
                    <Divider className={cn('mgb30',{dn:this.state.visible})} />
                </div>
                <div className="content por">
                    <Table columns={this.state.showColumns} dataSource={list} bordered rowSelection={rowSelection}
                    rowKey={record=>record.pay_flow_uuid} scroll={{x: sum}} onChange={this.changeTable}/>
                    <div className="pos">
                        <Button type="primary" className="mgr" onClick={this.choiceAll}>全选</Button>
                        <Button type="primary" >导出</Button>
                    </div>
                </div>
            </div>
        )
                    }
const Estimate = Form.create()(Estimatewaterform); 
// export default connect()(estimate)
function mapStateToProps(state) {
    const { list, total, page } = state.coopcompanyinfo;
    return {
      list,
      total,
      page,
      loading: state.loading.models.coopcompanyinfo,
    };
  }
  
export default connect(mapStateToProps)(Estimate); 