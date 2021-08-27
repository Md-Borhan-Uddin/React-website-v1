import React, { useState } from 'react'
import {FormSection,FormContainer, MainForm,FormGroup, FormLabel, FormInput} from './Form.element'

function Form(props) {
    const [data, setData] = useState({
        username:"",
        password:""
    })
    const onChangeHandle = (e)=>{
        if(e.target.name==="username"){
            setData({username:e.target.value})
        }else if(e.terget.name==="password"){
            setData({password:e.target.value})
        }else{
            console.log("else");
        }
        
    }
    
    return (
        <FormSection>
            <FormContainer>
                <h1>Login Form</h1>
                <MainForm>
                    <FormGroup>
                    <FormLabel onClick>Username</FormLabel> 
                       <FormInput name="username" type="text" value="" placeholder="Type UserName" value={data.username} onChange={onChangeHandle}></FormInput>
                       
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormInput name="password" type="password" value={data.password} placeholder="Type Password"></FormInput>
                    </FormGroup>
                        
                    
                </MainForm>
            </FormContainer>
           
        </FormSection>
    )
}

export default Form;
