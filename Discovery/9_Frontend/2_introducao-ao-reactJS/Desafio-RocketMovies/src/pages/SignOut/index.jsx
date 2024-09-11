import {MainContainer, DivContainer, ImgBgContainer} from './styles'
import BgImg from '../../assets/backgroundImg.png'
import {Input} from '../../Components/input'
import {Button} from '../../Components/button'
import {BackBtn} from '../../Components/BackButton'
import { FiUser } from "react-icons/fi";
import { MdMailOutline, MdLockOutline } from "react-icons/md";


export function SignOut() {
    return(
        <MainContainer>

            <DivContainer>

                <div className="central">
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                    <h2>Faça seu login</h2>

                    <Input icon={FiUser} placeTitle={'Nome'}/>
                    <Input icon={MdMailOutline} placeTitle={'E-mail'}/>
                    <Input icon={MdLockOutline} type={'password'} placeTitle={'Senha'}/>
                    <Button title={'Criar conta'}/>
                </div>
                    <BackBtn text={'Voltar para o login.'}/>
            
            </DivContainer>

            <ImgBgContainer>
                <img src={BgImg}/>
            </ImgBgContainer>

        </MainContainer>
    )
}
