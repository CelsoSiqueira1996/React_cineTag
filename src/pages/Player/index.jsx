import { useParams } from "react-router-dom";
import { NaoEncontrada } from "../NaoEncontrada";
import styles from './Player.module.css';
import { Banner } from '@/components/Banner';
import { Titulo } from '@/components/Titulo';
import { useEffect, useState } from "react";

export function Player() {
    const parametro = useParams();
    const [video, setVideo] = useState({});
 
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/CelsoSiqueira1996/cineTag-api/videos?id=${parametro.id}`)
            .then(resposta => resposta.json())
            .then(dado => setVideo(...dado))
    }, []);

    
    return (
        (video)
        ?<>          
            <Banner srcPath={'player'} />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe width="720" 
                    height="405" 
                    src={video.link} 
                    title={video.titulo} 
                    frameBorder="0" 
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
            </section>
        </>
        : <NaoEncontrada />
    )
}