import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { InputBox, Wthdr } from 'components/SignUp/style';
import { FormContainer } from 'components/Common/FormContainer'


const MyInfoPage = () => {

    const [username, setUsername] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        //백엔드에서 받아오는회원정보
        axios.get('http://54.180.9.59:8080/api/users')
            .then(response => {
                setUserInfo(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://54.180.9.59:8080/api/users/update', userInfo)
            .then(response => {
                //수정된 회원정보
                console.log(response.data);
                setUserInfo(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleWithdrawal = (e) => {
        e.preventDefault();
        axios.delete('/api/user')
            .then(response => {
                console.log(response.data);
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
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            />
                        </InputBox>
                    </Form.Group>
                    <Form.Group>
                        <InputBox>
                            <Form.Label>
                                이름
                            </Form.Label>
                            <Form.Control
                                type='name'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </InputBox>
                    </Form.Group>
                    <Form.Group>
                        <InputBox>
                            <Form.Label>
                                E-mail
                            </Form.Label>
                            <Form.Control
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InputBox>
                    </Form.Group>
                    <Form.Group>
                        <InputBox>
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InputBox>
                    </Form.Group>
                    <Form.Group>
                        <InputBox>
                            <Form.Label>
                                ConfirmPwd
                            </Form.Label>
                            <Form.Control
                                type='password'
                                value={confirmPwd}
                                onChange={(e) => setConfirmPwd(e.target.value)}
                            />
                        </InputBox>
                    </Form.Group>
                    <Button type="submit">회원정보 수정</Button>
                    <Wthdr onClick={handleWithdrawal}>회원 탈퇴</Wthdr>
                </FormContainer>
            </div>
        </form>
    )
}

export default MyInfoPage