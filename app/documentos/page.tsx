import Image from "next/image"

export default function Documentos() {
    return (
        <>
            <section className="min-h-[88vh] m-auto bg-white p-5 px-20">
                <h1 className="text-black text-5xl">Redux RTK Query</h1>
                <p className="text-black text-xl">Ferramenta que simplifica a busca, o cache e as atualizações de dados em aplicativos da web, <strong>eliminando a necessidade de escrever manualmente a lógica de busca e armazenamento em cache de dados</strong>.</p>
            
                <article className="text-black mt-5 flex flex-col gap-5">
                    <div>
                        <h2 className="text-black text-4xl mb-5">Consulta:</h2>
                        <ul>
                            <li>
                                <h3 className="text-lg">createApi():</h3>
                                <p className="ml-4">O núcleo da funcionalidade do RTK Query. Ele permite que você defina um conjunto de endpoints e descreva como recuperar dados de uma série de endpoints, incluindo a configuração de como buscar e transformar esses dados.</p>
                            </li>
                            <li>
                                <h3 className="text-lg">fetchBaseQuery():</h3>
                                <p className="ml-4">Um pequeno wrapper fetchque visa simplificar as solicitações.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-black text-2xl mb-5">Exemplo de uso:</h2>
                        <Image 
                            src={'/exemplo-rtk.png'}
                            alt='Código com um exemplo de uso do RTK Query'
                            width={500}
                            height={500}
                        />
                    </div>
                    <div>
                        <h2 className="text-black text-4xl mb-5">Aplicações:</h2>
                        <ul className="list-disc ml-10">
                            <li>
                                <h3 className="text-lg">
                                    Buscar dados
                                </h3>
                            </li>
                            <li>
                                <h3 className="text-lg">
                                    Criar, atualizar, e excluir dados
                                </h3>
                            </li>
                            <li>
                                <h3 className="text-lg">
                                    Gerenciar várias solicitações
                                </h3>
                            </li>
                            <li>
                                <h3 className="text-lg">
                                    Atualizar dados de forma eficiente
                                </h3>
                            </li>
                            <li>
                                <h3 className="text-lg">
                                    Simplificar a lógica de busca e armazenamento em cache
                                </h3>
                            </li>
                            <li>
                                <h3 className="text-lg">
                                    Gerenciar os estados de carregamento, erro, e resposta
                                </h3>
                            </li>
                            <li>
                                <h3 className="text-lg">
                                    Rastrear o estado de uma solicitação
                                </h3>
                            </li>
                            <li>
                                <h3 className="text-lg">
                                    Determinar se uma mutação invalida dados fornecidos por outra consulta
                                </h3>
                            </li>
                            <li>
                                <h3 className="text-lg">
                                    Armazenar dados no Redux store como um cache
                                </h3>
                            </li>
                        </ul>
                    </div>
                </article>
            </section>
        </>
    )
}