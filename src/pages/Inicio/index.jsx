import { Banner } from '@/components/Banner';
import { MainContent } from '@/components/MainContent';
import { Titulo } from '@/components/Titulo';
import { useEffect, useState } from 'react';

export function Inicio() {
    const [listaFilmes, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/CelsoSiqueira1996/cineTag-api/videos')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        });
    }, []);

    return (
        <>
            <Banner srcPath={'home'} />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <MainContent listaFilmes={listaFilmes}/>
        </>
    )
}