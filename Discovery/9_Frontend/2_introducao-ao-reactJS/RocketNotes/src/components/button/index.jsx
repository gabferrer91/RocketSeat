/* eslint-disable react/prop-types */
import {Container} from './styles'

export function Button( {innerText, loading = false, ...rest} ) {
    return (
    <Container 
        type="button"
        disabled={loading}
        {...rest}
    >
        {loading ? 'Carregando...' : innerText}
    </Container>
    )
}