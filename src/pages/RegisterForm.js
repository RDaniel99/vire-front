import { Alert, Flex } from '@chakra-ui/react';
import './RegisterForm.css'
import { Link, Button, Text, Heading, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import './RegisterForm.css'

function RegisterForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errorPassword, setErrorPassword] = useState(false)
    const [registerIsLoading, setRegisterIsLoading] = useState(false);
    const [hasError, setErrors] = useState(false);

    const navigate = useNavigate()

    const registerURL = "https://user-microservice-wade.herokuapp.com/register"

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value)
    const handleUsernameChange = (e) => setUsername(e.target.value)


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateData() === false) {
            return;
        }
        else {
            handleRegister()
        }
    }

    async function handleRegister() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "email": email
            })
        }

        setRegisterIsLoading(true)
        const res = await fetch(registerURL, requestOptions);
        res.json()
            .then(res => {
                console.log(res)
                if (res.error) {
                    setErrors(true)
                } else {

                    navigate('/login')
                    setErrors(false);
                }
            })
            .catch(err => setErrors(true));
    }

    const validateData = () => {
        if (password !== confirmPassword) {

            setErrorPassword(true)
            return false
        }
        else {
            setErrorPassword(false)
            return true;
        }
    }

    const backToRegister = () =>{
        setErrors(false)
    }

    if (hasError) {

        return (<Text fontSize='2xl' color='tomato'>An error has occured, please <Link onClick={backToRegister} color='red' fontWeight={'extrabold'}> try again</Link></Text>)
    }

    return (
        <Flex className='authForm' gap='4' justify='space-between' margin={'40vh'}>

            <Flex flexDirection='column' alignItems='flex-start' alignSelf='flex-start'>
                <Heading as='h3' size='lg' className='darkBlueText'>
                    Create new account
                </Heading>
            </Flex>

            <form className='loginFormBox'>

                <FormControl>
                    <FormLabel marginTop={'10px'} fontSize='md' className='darkBlueText'>USERNAME</FormLabel>
                    <Input isRequired
                        type='username'
                        value={username}
                        backgroundColor='whitesmoke!important'
                        onChange={handleUsernameChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel marginTop={'10px'} fontSize='md' className='darkBlueText'>EMAIL</FormLabel>
                    <Input isRequired
                        type='email'
                        value={email}
                        backgroundColor='whitesmoke!important'
                        onChange={handleEmailChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel marginTop={'10px'} fontSize='md' className='darkBlueText'>PASSWORD</FormLabel>
                    <Input isRequired
                        backgroundColor='whitesmoke!important'
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </FormControl>
                <FormControl isInvalid={errorPassword}>
                    <FormLabel marginTop={'10px'} fontSize='md' className='darkBlueText'>CONFIRM PASSWORD</FormLabel>
                    <Input isRequired
                        backgroundColor='whitesmoke!important'
                        type='password'
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />

                    <FormErrorMessage>The confirmation is not equal with the password</FormErrorMessage>

                </FormControl>
                <Button
                    className='submitButton'
                    type='submit'
                    onClick={handleSubmit}
                >
                    Register
                </Button>
            </form>

            <Text fontSize='sm' color='#2C5282'>
                Already have an account?
            </Text>

            <Link href='/login' fontWeight='bold' fontSize='sm' color='#2C5282'>Login Account > ></Link>

        </Flex>
    )
}

export default RegisterForm;