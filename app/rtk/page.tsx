'use client';
import { useForm } from 'react-hook-form';
import { useGetPokemonByNameQuery } from '../services/pokemon'
import { useState } from 'react';

interface SearchData {
    name: string,
}

export default function Rtk() {

    const [searchName, setSearchname] = useState<string>('bulbasaur')
    const { data, error, isLoading } = useGetPokemonByNameQuery(searchName);
    const {register, handleSubmit, reset} = useForm<SearchData>();

    function onSubmit(dataSearch: SearchData) {
        setSearchname(dataSearch.name);
        reset()
    }

    return (
        <>
        <div className='w-full h-[88vh] bg-white text-black flex flex-col items-center p-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="search" id="pokemon" {...register("name", {required: true})} className='rounded border py-1 px-2 min-w-[500px] border-black'/>
            <button type='submit' className='ml-4 bg-blue-500 px-2 py-1 rounded text-white'>Pesquisar</button>
        </form>
        {error ? (
            <>Erro ao buscar pokemon!</>
        ) : isLoading ? (
            <>Buscando...</>
        ) : data ? (
            <>
            <div className='mt-10 min-w-[500px]'>
                <div className='flex justify-center'>
                    <img src={data.sprites.front_default} alt={data.species.name} width={200} />
                </div>
                <h3 className='text-3xl text-center'>{data.species.name}</h3>
                <div className='border border-t-black mt-5 p-5'>
                    <p className='text-2xl'>Habilidades:</p>
                    {data.abilities.map((ability, index) => 
                        <p key={index}>{ability.ability.name}</p>
                    )}
                </div>
                <div className='border border-t-black mt-5 p-5'>
                    <p className='text-2xl'>Tipos:</p>
                    {data.types.map((type, index) =>
                        <p key={index}>{type.type.name}</p>
                    )}
                </div>
                <div className='border border-t-black mt-5 p-5'>
                    <p className='text-2xl'>Formas:</p>
                    {data.forms.map((form, index)=> 
                        <p key={index}>{form.name}</p>
                    )}
                </div>
            </div>
            </>
        ) : null}
        </div>
        </>
    )
}