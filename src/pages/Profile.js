import { Flex } from '@chakra-ui/react';
import './LoginForm.css'
import { Button, Heading } from '@chakra-ui/react';
import './Profile.css'

function Profile() {

    return (
        <Flex className='authForm' gap='4' justify='space-between' margin={'40vh'}>

            <Flex className='titleForm'>
                <Heading as='h3' size='lg' className='darkBlueText'>
                    Profile
                </Heading>
            </Flex>

            <Button
                className='submitButton full'
                type='submit'
        
            >
                Associate account with Discogs
            </Button>

            <Button
                className='submitButton full'
                type='submit'
        
            >
                Associate account with Discogs
            </Button>

            <Button
                className='submitButton'
                colorScheme={'red'}
                type='submit'
        
            >
                Logout
            </Button>

        </Flex>
    )
}

export default Profile;