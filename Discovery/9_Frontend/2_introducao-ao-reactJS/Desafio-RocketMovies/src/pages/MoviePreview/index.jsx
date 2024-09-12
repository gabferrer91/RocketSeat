/* eslint-disable react/prop-types */
import {Container} from './styles'
import {Header} from '../../Components/header'
import {BackBtn} from '../../Components/BackButton'
import {AiFillStar, AiOutlineStar, AiOutlineClockCircle} from "react-icons/ai";
import {SectionTags} from '../../Components/sectionTags'
import {MovieTag} from '../../Components/tag'
import {Link} from 'react-router-dom'

export function MoviePreview({totalStars=5}) {

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
                      <h1>Interestellar</h1>
                      {renderStars(5)}
                  </div>
                  <div className='aboutUser'>
                      <img src="https://github.com/vihmalmsteen.png" alt="user img" />
                      <span>Por João sem Braço</span>
                      <AiOutlineClockCircle/>
                      <span>23/05/22 às 08:00</span>
                  </div>
              <SectionTags>
                <MovieTag title="Ação"/>
                <MovieTag title="Ficção"/>
              </SectionTags>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid culpa a, enim libero impedit voluptates rem blanditiis itaque, eos voluptas nesciunt nemo sunt eveniet, totam ab facere corporis vitae at!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis a sed quis sit voluptatum, debitis aspernatur alias? Consequuntur sint dicta dolores eligendi tempore ducimus exercitationem accusamus hic, quasi numquam molestiae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt quam? Ratione dolore, cum omnis voluptates atque neque laudantium veritatis cumque molestias numquam pariatur magni, explicabo quam quaerat quibusdam expedita.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid culpa a, enim libero impedit voluptates rem blanditiis itaque, eos voluptas nesciunt nemo sunt eveniet, totam ab facere corporis vitae at!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis a sed quis sit voluptatum, debitis aspernatur alias? Consequuntur sint dicta dolores eligendi tempore ducimus exercitationem accusamus hic, quasi numquam molestiae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt quam? Ratione dolore, cum omnis voluptates atque neque laudantium veritatis cumque molestias numquam pariatur magni, explicabo quam quaerat quibusdam expedita.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid culpa a, enim libero impedit voluptates rem blanditiis itaque, eos voluptas nesciunt nemo sunt eveniet, totam ab facere corporis vitae at!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis a sed quis sit voluptatum, debitis aspernatur alias? Consequuntur sint dicta dolores eligendi tempore ducimus exercitationem accusamus hic, quasi numquam molestiae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt quam? Ratione dolore, cum omnis voluptates atque neque laudantium veritatis cumque molestias numquam pariatur magni, explicabo quam quaerat quibusdam expedita.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid culpa a, enim libero impedit voluptates rem blanditiis itaque, eos voluptas nesciunt nemo sunt eveniet, totam ab facere corporis vitae at!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis a sed quis sit voluptatum, debitis aspernatur alias? Consequuntur sint dicta dolores eligendi tempore ducimus exercitationem accusamus hic, quasi numquam molestiae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt quam? Ratione dolore, cum omnis voluptates atque neque laudantium veritatis cumque molestias numquam pariatur magni, explicabo quam quaerat quibusdam expedita.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid culpa a, enim libero impedit voluptates rem blanditiis itaque, eos voluptas nesciunt nemo sunt eveniet, totam ab facere corporis vitae at!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis a sed quis sit voluptatum, debitis aspernatur alias? Consequuntur sint dicta dolores eligendi tempore ducimus exercitationem accusamus hic, quasi numquam molestiae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt quam? Ratione dolore, cum omnis voluptates atque neque laudantium veritatis cumque molestias numquam pariatur magni, explicabo quam quaerat quibusdam expedita.
              </p>
              </div>
              </main>
        </Container>
    )
}

