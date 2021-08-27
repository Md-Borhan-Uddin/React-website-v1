import styled from 'styled-components'


export const FormSection = styled.section`
    width: 100%;
    padding: 4rem 0;
`
export const FormContainer = styled.div`
    width: 100%;
    max-width: 1140px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;

    h1{
        padding: 3rem 0;
        font-size: 2.3rem;
    }

`
export const MainForm = styled.form`
    width: 50%;
    box-shadow:2px 2px 8px 8px #908c8c;
    padding: 3rem;
`

export const FormGroup = styled.div`
    width: 90%;
    padding: 1rem;
    margin: 0 auto;
`

export const FormLabel = styled.label`
    display: block;
    margin-bottom: 10px;
    font-size: 1.3rem;
`
export const FormInput = styled.input`
    display: block;
    width: 90%;
    padding: 12px 10px;
    outline: none;
    font-size: 1.3rem;
   
`