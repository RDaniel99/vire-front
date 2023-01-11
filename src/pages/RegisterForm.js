import { Flex } from '@chakra-ui/react';
import './RegisterForm.css'
import { Link, Button, Text, Heading, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import './RegisterForm.css'

function RegisterForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value)

    return (
        <Flex className='authForm' gap='4' justify='space-between' margin={'40vh'}>

            <Flex flexDirection='column' alignItems='flex-start' alignSelf='flex-start'>
                <Heading as='h3' size='lg' className='darkBlueText'>
                    Create new account
                </Heading>
            </Flex>

            <form className='loginFormBox'>

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
                <FormControl>
                    <FormLabel marginTop={'10px'} fontSize='md' className='darkBlueText'>CONFIRM PASSWORD</FormLabel>
                    <Input isRequired
                        backgroundColor='whitesmoke!important'
                        type='password'
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </FormControl>
                <Button
                    className='submitButton'
                    type='submit'
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