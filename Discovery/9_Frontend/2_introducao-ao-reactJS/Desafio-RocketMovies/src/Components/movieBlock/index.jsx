/* eslint-disable react/prop-types */
import {Container} from './styles'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


export function MyMoviesContainer({title, text, rating, totalStars=5, children, ...rest}) {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= totalStars; i++) {
            if (i <= rating) {
                stars.push(<AiFillStar key={i} color="pink" />);
            } else {
                stars.push(<AiOutlineStar key={i} color="grey" />);
            }
        }
        return stars;
    };

    return (
        <Container {...rest}>
            <h3>{title}</h3>
            <div>{renderStars()}</div>
            <p>{text}</p>
            {children}
        </Container>
    )
}

