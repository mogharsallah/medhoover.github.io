import { createRoot } from 'react-dom/client'
import { Anchor, grommet, Grommet, Header, Heading, Box, Main, Avatar, Paragraph, ResponsiveContext, Text } from 'grommet'

import profilePicture from './img/mo.jpeg'
import githubIcon from './img/github.png'
import linkedInIcon from './img/linkedin.png'
import resume from './CV_Mohamed_Gharsallah.pdf'

const App = () => {
  return (
    <Grommet theme={grommet}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <>
            <Header pad="medium" className="header" justify={size === 'small' ? 'center' : 'between'}>
              {size !== 'small' && <Heading level="4">Mohamed Gharsallah</Heading>}
              <Box direction="row" gap="medium">
                <Anchor href="#profile" color="dark-1">
                  Profile
                </Anchor>
                <Anchor href="#hire" color="dark-1">
                  Hire
                </Anchor>
                <Anchor target="_blanc" href={resume} color="dark-1">
                  Resume
                </Anchor>
                <Anchor target="_blanc" href="https://medium.com/@gharsallah" color="dark-1">
                  Blog
                </Anchor>
              </Box>
            </Header>
            <Main pad={{ horizontal: 'xlarge' }} overflow="none">
              <div id="profile"></div>
              <Box justify="center" pad={{ top: 'xlarge', bottom: 'large' }} className="page-height">
                <Box animation="slideDown" align="start" justify="center" direction={size === 'small' ? 'column' : 'row'} gap="large">
                  <Box width="218px" gap="medium" align="center" pad={{ bottom: 'medium' }}>
                    <Avatar key="profile" size="328px" src={profilePicture} round="medium" />
                    <Box direction="row" gap="medium">
                      <a target="_blank" href="https://www.linkedin.com/in/gharsallah-m/">
                        <Avatar key="linkedIn" size="24px" round={false} src={linkedInIcon} />
                      </a>
                      <a target="_blank" href="https://github.com/medhoover">
                        <Avatar key="github" size="24px" round={false} src={githubIcon} />
                      </a>
                    </Box>
                  </Box>
                  <Box width={{ max: '500px' }} gap="small">
                    <Heading color="dark-3" level="3">
                      Hey there 👋🏻{' '}
                    </Heading>
                    <Heading level="2">I'm Mohamed Gharsallah</Heading>
                    <Heading color="dark-3" level="3">
                      I am a Software engineer with full-stack experience
                    </Heading>
                    <Box animation={['fadeIn', 'slideDown']}>
                      <Paragraph color="dark-3">
                        I'm also an avid reader, cook and currently trying to get into woodcraft without loosing my fingers.
                      </Paragraph>
                      <Paragraph color="dark-3">
                        I grow up playing with the south Tunisian dunes and swam through the mediterranean.
                      </Paragraph>
                      <Paragraph color="dark-3">
                        With a passion for travel and IT, I am settled in Germany and traveling across Europe when no pandemic is
                        undergoing.
                      </Paragraph>
                      <Box pad={{ top: 'small' }} direction="row">
                        <Anchor target="_blanc" color="neutral-3" href={resume}>
                          👉🏻 Resume
                        </Anchor>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box id="hire" animation="slideDown" pad="large" justify="center" className="page-height">
                <Heading level="1">How can I be of help?</Heading>
                <Box pad={{ top: 'medium' }}>
                  <Text color="dark-3">
                    Send me an email on: <Anchor color="dark-2" label="mohamed@gharsallah.com" href="mailto:mohamed@gharsallah.com" />
                  </Text>
                  <Text color="dark-3">
                    Or drop a message on:&nbsp;
                    <Anchor color="dark-2" label="linkedIn.com/in/gharsallah-m" href="https://www.linkedin.com/in/gharsallah-m/" />
                  </Text>
                </Box>
              </Box>
            </Main>
          </>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}

const domNode = document.getElementById('root')

if (domNode) {
  const root = createRoot(domNode)
  root.render(<App />)
}
