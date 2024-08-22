import { useFavoritarContext } from '@/hooks/useFavoritarContext';
import { MainContent } from '@/components/MainContent';
import { Banner } from '@/components/Banner';
import { Titulo } from '@/components/Titulo';

export function Favoritos() {
    const { favoritos } = useFavoritarContext();

    return (
        <>
            <Banner srcPath={'favoritos'} />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <MainContent listaFilmes={favoritos} />
        </>
    )
}