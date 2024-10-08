import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styles from "../Quien/quien.module.css";
import { Context } from "../../store/appContext";
import tragico from "../../../assets/1TragicoYfugaz.png"
import tiempos1 from "../../../assets/2tiemposdeimpacto.png";
import tiempos2 from "../../../assets/2tiemposdeimpacto2.png";
import melancolic1 from "../../../assets/3melancolic-ok.png";
import melancolic2 from "../../../assets/3melancolic2.png";
import trance1 from "../../../assets/3trance.png";
import trance2 from "../../../assets/3trance2.png";
export const Quien = () => {
    return (
        <div className=" bg-black ">
            <div className="container p-3">
                <p>
                    Ya desde pequeño Álex (29/04/92) ya mostraba sus inquietudes musicales.<br></br>
                    En 2008 y 2009, participa en el concurso infantil Veo Veo, donde queda segundo finalista en una de las ocasiones.
                    Vuelve a participar con 19 años en otro concurso de la televisión valenciana, así como en diferentes castings.
                </p>
                <br></br>
                <p>
                    En 2017 da el gran salto musica, lanzando su primer álbum <span style={{color: "red"}}>"Trágico y fugaz"</span>, con buen recibimiento por parte de la crítica y público.
                    Dentro de sus 10 temas podemos encontrar canciones que hablan de la ansiedad y la crítica social. Destacan algunos de sus sencillos como
                    "Épico y mortal", "Como dos cometas" o "El clímax final", esta última contando con la colaboración de Gabri, vocalista del grupo Shinova.</p>
                <div className="d-flex align-items-center justify-content-center">
                    <img src={tragico}></img>
                </div>

                <p>
                    En 2020 lanza su nuevo disco,<span style={{color: "red"}}>"Tiempos de impacto"</span>. Una continuación a sentimientos del anterior disco, mostrando sentimientos de resignacion y enfado.
                    Destacan grandes temas como "El simulacro", "Una presa que atacar" o "La cabeza y el juicio."
                    La presentación se ve truncada por la pandemia, y Sienna empieza a girar cuando se van abriendo espacios cosechando, a pesar de las circunstancias,
                    grandes éxitos.
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={tiempos1}></img>
                        <img src={tiempos2}></img>

                    </div>
                </p>

                <p>
                    En 2021 lanza <span style={{color: "red"}}>"Melancolic"</span>, un EP con 6 canciones donde se adentra en nuevos sonidos con los que recorre sentimientos "melancólicos",
                    con el transfondo importante de la salud mental. Destaca "Se me para el tiempo", "Quiero que aparezcas aquí" o "Cómo has podido".
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={melancolic1}></img>
                        <img src={melancolic2}></img>

                    </div>

                </p>
                <p>
                    En 2024 nos sorprende con <span style={{color: "red"}}>"Trance"</span>, un nuevo disco con 10 temas en los que nos habla de catarsis emocional y liberación. Recorre instintos primarios
                    dando importancia en sus sonidos a los synths. Destacan "Fuera(x3)", "Creí que era eterno" o "Como un animal."
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={trance1}></img>
                        <img src={trance2}></img>

                    </div>
                </p>
            </div>

        </div >
    )
}