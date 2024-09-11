/* eslint-disable react/prop-types */
import {Container} from './styles'
// import { FiPlus } from "react-icons/fi";

export function Button({title, icon, ...rest}) {
    return (
        <Container {...rest}>
            {icon}
            {title}
        </Container>
    )
}

