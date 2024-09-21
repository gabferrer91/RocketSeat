/* eslint-disable no-unused-vars */
import {Container} from './styles'
import {BackBtn} from '../../Components/BackButton'
import {Input} from '../../Components/input'
import {Button} from '../../Components/button'
import {FiUser} from "react-icons/fi";
import {MdMailOutline, MdLockOutline, MdCameraAlt} from "react-icons/md";
import {Link} from 'react-router-dom'
import {api} from '../../services/api'
import {hash, compare} from 'bcryptjs'

import {useState} from 'react'

export function User() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    async function handleUser() {
        const user = JSON.parse(localStorage.getItem('@rocketMovies:user'))
        console.log(`nameLocal: ${user.name}, emailLocal: ${user.email}, passwordLocal: ${user.password}`)

        const comparated = await compare(password, user.password)

        if(password && !comparated) {
            return alert('Senha atual não confere.')
        } 
        if((password && !newPassword) || (!password && newPassword)) {
            return alert('Para atualizar a senha, digite a senha tanto\n a atual como a nova.')
        }

        const finalName = name || user.name
        const finalEmail = email || user.email
        const finalPassword = newPassword || user.password
        
        try {
            api.put('/users/update', {
                name: finalName,
                email: finalEmail,
                password: finalPassword
            })

            const hashedPass = await hash(finalPassword, 8)
            localStorage.setItem('@rocketMovies:user', JSON.stringify({
                name: finalName,
                email: finalEmail,
                password: hashedPass
            }))

            alert('Perfil atualizado com sucesso!')
        } catch (error) {
            console.log(error.response.data)
            return alert('Não foi possível atualizar o perfil.')
        }
    }

    return (
        <Container>
            <div className='header'>
                <div className="backbtn">
                    <Link className='hrefLink' to={'/'}>
                        <BackBtn text={'Voltar'}/>
                    </Link>
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
                        <Input icon={FiUser} placeTitle={'Usuário'} 
                        onChange={(e) => {setName(e.target.value)}}
                        />
                        <Input icon={MdMailOutline} placeTitle={'E-mail'} 
                        onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>

                    <div className="inputsTwo">
                        <Input icon={MdLockOutline} placeTitle={'Senha atual'}
                        onChange={(e) => {setPassword(e.target.value)}}
                        />
                        <Input icon={MdLockOutline} placeTitle={'Nova senha'} 
                        onChange={(e) => {setNewPassword(e.target.value)}}
                        />
                    </div>

                    <Button title={'Salvar'}
                    onClick={handleUser}
                    />
                </div>


            </div>
        </Container>
    )
}