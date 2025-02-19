'use client'

import { AppDispatch } from '@/app/store/store'
import { useDispatch } from 'react-redux'
import { uploadFile } from "../../../actions/upload-file"
import { addImage } from '../../store/slices/galeriaSlice';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface ImageFormData {
    alt: string
}

export default function AddImage() {
    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<ImageFormData>();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const dispatch: AppDispatch = useDispatch();

    async function onSubmit(data: ImageFormData) {
        if (!selectedFile) return alert("Selecione uma imagem antes de enviar.");

        const formData = new FormData();
        formData.append("image", selectedFile);
        formData.append("alt", data.alt);

        try {
            const newImageGallery = await uploadFile(formData);
            dispatch(addImage(newImageGallery));
        } catch (error) {
            alert("Erro ao enviar a imagem!");
        } finally {
            reset();
            setPreview(null);
        }
    }

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    }

    return (
        <div className="max-w-md mx-auto space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="image">Imagem: </label>
                    <input 
                        type="file" 
                        name="image" 
                        id="image" 
                        accept="image/*" 
                        required 
                        className="mt-2"
                        onChange={handleFileChange}
                    />

                    {preview && <img src={preview} alt="Preview" className="mt-2 w-32 h-32 object-cover" />}

                    <label htmlFor="alt">Descrição imagem: </label>
                    <input 
                        type="text" 
                        id="alt"
                        {...register("alt")} 
                        required 
                        className="mt-2 text-black rounded px-2 py-1"
                        placeholder='Descrição da imagem'
                    />
                </div>
                {
                    isSubmitting 
                    ? (
                        <button type="submit" className="w-full bg-blue-700 rounded" disabled>
                            Carregando...
                        </button>
                    ) 
                    : (
                        <button type="submit" className="w-full bg-blue-500 rounded">
                            Adicionar imagem
                        </button>
                    )
                }
                
            </form>
        </div>
    )
}
