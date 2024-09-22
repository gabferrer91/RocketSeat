/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Container} from './styles'
import {Header} from '../../Components/header'
import {BackBtn} from '../../Components/BackButton'
import {AiFillStar, AiOutlineStar, AiOutlineClockCircle} from "react-icons/ai";
import {SectionTags} from '../../Components/sectionTags'
import {MovieTag} from '../../Components/tag'
import {Link} from 'react-router-dom'
import {api} from '../../services/api'
import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'

export function MoviePreview({totalStars=5}) {
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(0)
    const [description, setDescription] = useState('')
    const [updated_at, setUpdated_at] = useState(null)

    // const {title, note_id} = req.query

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const note_id = queryParams.get('note_id');

    useEffect(() => {
        async function getNote() {
            const response = await api.get(`/notes/read?note_id=${note_id}`);
            const data = response.data[0]
            console.log(data.updated_at)
            setTitle(data.title)
            setRating(data.rating)
            setDescription(data.description)
            setUpdated_at(data.updated_at)
            return data;
        }
        getNote()
    }, [])


    const renderStars = (rating) => {
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
        <Container>
            <Header/>
            <main>
              <div className='aboutAll'>
                
                <Link className='hrefLink' to={'/'}>
                    <BackBtn text={'Voltar'}/>
                </Link>
                  <div className='aboutMovie'>
                      <h1>{title}</h1>
                      {renderStars(Number(rating))}
                  </div>
                  <div className='aboutUser'>
                      <img src="https://github.com/vihmalmsteen.png" alt="user img" />
                      <span>Por João sem Braço</span>
                      <AiOutlineClockCircle/>
                      <span>{updated_at}</span>
                  </div>
              <SectionTags>
                <MovieTag title="Ação"/>
                <MovieTag title="Ficção"/>
              </SectionTags>
              <p>
                {description}
              </p>
              </div>
              </main>
        </Container>
    )
}

