import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { InputBox } from 'components/SignUp/style';
import { FormContainer } from 'components/Common/FormContainer'

const MyInfoPage = () => {

    const [username, setUsername] = useState('');
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        //백엔드에서 받아오는회원정보
        axios.get('/api/users')
            .then(response => {
                setUserInfo(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('api/users', userInfo)
            .then(response => {
                //수정된 회원정보
                console.log(response.data);
                setUserInfo(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // if (!userInfo) {
    //     return <div>로딩중</div>
    // }

    return (
        <form onSubmit={handleSubmit}>
            <div>MyInfoPage
                <FormContainer style={{ width: 800, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Form.Group>
                        <InputBox>
                            <Form.Label>
                                ID
                            </Form.Label>
                            <Form.Control
                                type='id'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required='required'
                            />
                        </InputBox>
                    </Form.Group>
                    <Button type="submit">회원정보 수정</Button>
                </FormContainer>
            </div>
        </form>
    )
}

export default MyInfoPage