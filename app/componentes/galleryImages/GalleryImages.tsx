'use client';
import { useSelector } from "react-redux";
import type { AppState } from "../../store/store";
import Image from "next/image";

export default function Galeria() {
    const galeria = useSelector((state: AppState) => state.galeria.gallery);

    return (
        <>
            <div className="flex gap-5 justify-center flex-wrap">
                {
                    galeria.map((imagem, index) => 
                        <Image 
                            key={index}
                            src={imagem.src}
                            alt={imagem.alt}
                            width={300}
                            height={100}
                        />
                    )
                }
            </div>
        </>
    )
}