/* eslint-disable no-unused-vars */
import {Container} from './styles'
import {BackBtn} from '../../Components/BackButton'
import {Input} from '../../Components/input'
import {Button} from '../../Components/button'
import { FiUser } from "react-icons/fi";
import { MdMailOutline, MdLockOutline, MdCameraAlt } from "react-icons/md";


export function User() {
    return (
        <Container>
            <div className='header'>
                <div className="backbtn">
                    <BackBtn text={'Voltar'}/>
                </div>
            </div>

            <div className="user">
                <div className="userLogo">
                    <img src="https://github.com/vihmalmsteen.png" alt="user img"/>
                    <label htmlFor="avatar"><MdCameraAlt/></label>
                        <input type="file" id="avatar"/>
                </div>

                <div className="inputsBlock">
                    <div className="inputsOne">
                        <Input icon={FiUser} placeTitle={'Usuário'}/>
                        <Input icon={MdMailOutline} placeTitle={'E-mail'}/>
                    </div>
                    <div className="inputsTwo">
                        <Input icon={MdLockOutline} placeTitle={'Senha atual'}/>
                        <Input icon={MdLockOutline} placeTitle={'Nova senha'}/>
                    </div>

                    <Button title={'Salvar'}/>
                </div>


            </div>
        </Container>
    )
}