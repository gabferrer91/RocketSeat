/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import {Container, Form, Avatar} from './styles'
import {Input} from '../../components/input'
import {Button} from '../../components/button'
import {Link} from 'react-router-dom'
import {useAuth} from '../../hooks/auth'
import avatarPlaceholder from '../../../assets/avatar_placeholder.svg'
import {api} from '../../services/api'

export function Profile() {
    const {user, updatedProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setpasswordOld] = useState()
    const [passwordNew, setpasswordNew] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate() {
        const update = {
            name, email, password: passwordNew, old_password: passwordOld
        }

        const userUpdated = Object.assign(user, update)
        console.log('user\n', user)
        await updatedProfile({user: userUpdated, avatarFile})
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)
        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <Link to={'/'}>
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="User img" />
                    <label htmlFor="avatar"><FiCamera/></label>
                    
                    <input id="avatar" type="file" onChange={handleChangeAvatar}/>
                </Avatar>

                <Input type="text" placeholder="Nome" icon={FiUser} 
                value={name} onChange={e => setName(e.target.value)}/>
                <Input type="text" placeholder="E-mail" icon={FiMail} 
                value={email} onChange={e => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Senha atual" icon={FiLock}
                 onChange={e => setpasswordOld(e.target.value)}/>
                <Input type="password" placeholder="Nova senha" icon={FiLock}
                 onChange={e => setpasswordNew(e.target.value)}/>

                <Button innerText="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}

