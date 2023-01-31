import { Flex } from '@chakra-ui/react';
import { Link, Button, Text, Heading, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import './LoginForm.css'

function LoginForm() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [hasError, setErrors] = useState(false)
    const [loginIsLoading, setLoginIsLoading] = useState(false);

    const navigate = useNavigate()

    const handleUsernameChange = (e) => setUsername(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)


    const loginURL = "https://user-microservice-wade.herokuapp.com/login"

    async function handleLogin(e) {

        e.preventDefault()

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": username,
                "password": password,
            })
        }
        setLoginIsLoading(true)
        const res = await fetch(loginURL, requestOptions);
        res.json()
            .then(res => {
                setLoginIsLoading(false)
                if (res.error) {
                    setErrors(true)
                } else {
                    sessionStorage.setItem('token', JSON.stringify(res.access_token))
                    navigate('/')
                    setErrors(false);
                }
            })
            .catch(err => setErrors(true));
    }

    const backToLogin = () => {
        setErrors(false)
    }

    if (hasError) {

        return (<Text fontSize='2xl' color='tomato'>An error has occured, please <Link onClick={backToLogin} color='red' fontWeight={'extrabold'}> try again</Link></Text>)
    }


    return (
        <Flex className='authForm' gap='4' justify='space-between' margin={'40vh'}>

            <Flex className='titleForm'>
                <Heading as='h3' size='lg' className='darkBlueText'>
                    Login
                </Heading>
            </Flex>

            <form className='loginFormBox'>
                <FormControl>
                    <FormLabel fontSize='xs' className='darkBlueText'>USERNAME</FormLabel>
                    <Input isRequired
                        type='text'
                        backgroundColor='whitesmoke'
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel fontSize='xs' className='darkBlueText'>PAROLĂ</FormLabel>
                    <Input isRequired
                        type='password'
                        backgroundColor='whitesmoke'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </FormControl>

                <Button
                    className='submitButton'
                    type='submit'
                    onClick={handleLogin}
                >
                    Submit
                </Button>
            </form>

            <Text fontSize='sm' color='#2C5282'>
                You don't have an account?
            </Text>

            <Link href='/register' fontWeight='bold' fontSize='sm' color='#2C5282'>Register > ></Link>

        </Flex>
    )
}

export default LoginForm;