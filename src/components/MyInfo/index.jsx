import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { InputBox, Wthdr } from 'components/SignUp/style';
import { FormContainer } from 'components/Common/FormContainer'
import useAuthStore from 'store/useAuthStore';
import useLoggedUserStore from 'store/useLoggedUserStore';
import { useNavigate } from 'react-router-dom';



const MyInfoPage = () => {

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const navi = useNavigate();
    const loginNavi = () => {
        navi('/')
    }
    const { token } = useAuthStore();
    const user = useLoggedUserStore();

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        //백엔드에서 받아오는회원정보O
        if (!token || !user) { //쓸데없는 api호출막는거
            return;
        }
        axios.get(`http://54.180.9.59:8080/api/users/${user.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
            .then(response => {
                setUserInfo(response.data);
                setName(response.data.user.name);
                setUsername(response.data.user.username);
                setEmail(response.data.user.email);
            })
            .catch(error => {
                console.log(error);
            })
    }, [token, user]);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://54.180.9.59:8080/api/users/${user.id}/update`, {
            name: name,
            email: email,
            password: password,
            confirmPwd: confirmPwd,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
            .then(response => {
                //수정된 회원정보
                // console.log(userInfo);
                // console.log("userinfo");
                // console.log(user);
                // console.log("user");
                // setUsername(user.username);
                // setUsername(response.data.updatedUser.username);
                // console.log(response.data.updatedUser.username);
                // setName(response.data.updatedUser.name);
                // setEmail(response.data.updatedUser.email);

                console.log(response);

            })
            .catch(error => {
                console.log(error);
            })
    }


    const handleWithdrawal = (e) => {
        e.preventDefault();
        const confirmed = window.confirm(`${user.name}의 탈퇴를 진행하시겠습니까?`);
        if (confirmed) {
            axios.post(`http://54.180.9.59:8080/api/users/${user.id}/delete`, { user }, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
                .then(response => {
                    setUserInfo(response.data);
                    loginNavi();
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <FormContainer style={{ width: 800, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Form.Group>
                        <InputBox>
                            <Form.Label>
                                ID
                            </Form.Label>
                            <Form.Control
                                type='username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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