import { Flex } from '@chakra-ui/react';
import './LoginForm.css'
import { Link, Button, Text, Heading, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import './LoginForm.css'

function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)


    return (
        <Flex className='authForm' gap='4' justify='space-between' margin={'40vh'}>

            <Flex className='titleForm'>
                <Heading as='h3' size='lg' className='darkBlueText'>
                    Login
                </Heading>
            </Flex>

            <form className='loginFormBox'>
                <FormControl>
                    <FormLabel fontSize='xs' className='darkBlueText'>EMAIL</FormLabel>
                    <Input isRequired
                        type='email'
                        backgroundColor='whitesmoke'
                        value={email}
                        onChange={handleEmailChange}
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