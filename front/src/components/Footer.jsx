
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';

const Container = styled.div`
    display: flex;
    color: white;
    background-color : black;
`
  
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
  
const Logo = styled.h1``;
  
const Desc = styled.p`
    margin: 20px 0px;
`
  
const SocialContainer = styled.div`
    display: flex;
`
  
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
  
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
  
const Title = styled.h3`
    margin-bottom: 30px;
`
  
  
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
  
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
  

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>RoBorregos</Logo>
        <Desc>
            Pagina de RoBorregos para administracion y reserva de materiales electronicos.
            Uso exclusivo de personas pertenecientes al grupo estudiantil.
        </Desc>
      </Left>
      <Center>        
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MailIcon/> roborregos@tec.mx
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer