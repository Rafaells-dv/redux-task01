import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface ImageGallery {
    src: string,
    alt: string,
}

interface GalleryState {
    gallery: ImageGallery[];
}

const initialState: GalleryState = {
    gallery: [
        {
            src: "/lambo.jpg",
            alt: "Imagem do carro da marca Lamborghini"
        },
        {
            src: "/porsche.jpg",
            alt: "Imagem do carro da marca Porsche"
        },
        {
            src: "/fusca.jpg",
            alt: "Imagem do carro Fusca"
        },
    ]
}

const galeriaSlice = createSlice({
    name: 'galeria',
    initialState,
    reducers: {
        addImage: (state, action: PayloadAction<ImageGallery>) => {
            state.gallery.push(action.payload);
        }
    }
})

export const { addImage } = galeriaSlice.actions;
export default galeriaSlice.reducer;