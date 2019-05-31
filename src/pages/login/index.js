import React, { Component } from 'react'
import {Form,Icon,Input,Button,Checkbox} from 'antd'
import router from 'umi/router';
import {connect} from "dva";
import styles from './index.less'

const FormItem = Form.Item;
class LoginForm extends Component {
    loginSubmit = (e) =>{
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                console.log("要提交了，看是否保存账号密码",values)
                //保存用户权限状态
            //   this.props.dispatch({type: 'Login/login',payload:values})
              router.push('/baseinfomanager/coopcompanyinfo')
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.loginMain}>
                    <Form onSubmit={this.loginSubmit}  className={styles.loginArea}>
                        <FormItem>
                            {
                                getFieldDecorator('user',{ rules:[{required:true,message:'请输入账号！'}] })(
                                    <Input prefix={<Icon type="user" className={styles.iconbg} /> } placeholder="输入账号"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('pass',{ rules:[{required:true,message:'请输入密码！'}] })(
                                    <Input prefix={<Icon type="lock" className={styles.iconbg} /> } type="password" placeholder="输入密码"/>)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember',{ valuePropName:'checked', initialValue:true })(
                                    <Checkbox>Remember me</Checkbox>)
                            }
                            <a href=" " className={styles.loginfr}>Forgot password</a>
                            <Button type="primary" htmlType="submit" className={styles.loginBtn}> 登录</Button> 
                        </FormItem>
                    </Form>
            </div>
        )
    }
}
const Login = Form.create()(LoginForm)
function mapStateToProps(state) {
    return {
        Login: state.Login,
        loading: state.loading.models.Login,
    };
  }
export default connect(mapStateToProps)(Login)