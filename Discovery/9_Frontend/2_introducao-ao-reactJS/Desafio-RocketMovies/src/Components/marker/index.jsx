/* eslint-disable react/prop-types */
import {Container} from './styles'
import {FiPlus, FiX} from "react-icons/fi";


export function Marker({isactive, title}) {
    return (
        <Container $isactive={isactive}>
            {isactive? <FiPlus /> : <FiX />}
            {title}
        </Container>
    )
}