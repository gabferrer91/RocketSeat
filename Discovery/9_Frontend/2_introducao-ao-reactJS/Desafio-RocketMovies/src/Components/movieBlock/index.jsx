/* eslint-disable react/prop-types */
import {Container} from './styles'
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {Link} from 'react-router-dom'

export function MyMoviesContainer({title, note_id, text, rating, totalStars=5, children, ...rest}) {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= totalStars; i++) {
            if (i <= rating) {
                stars.push(<AiFillStar key={i} color="pink"/>);
            } else {
                stars.push(<AiOutlineStar key={i} color="grey"/>);
            }
        }
        return stars;
    };

    return (
        <Container {...rest}>
            <h3>
                <Link className='hrefLink' to={`/MoviePreview?note_id=${note_id}`}>
                    {title}
                </Link>
            </h3>
            <div>{renderStars()}</div>
            <p>{text}</p>
            {children}
        </Container>
    )
}

