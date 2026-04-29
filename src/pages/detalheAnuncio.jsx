import { useParams } from "react-router"

export default function DetalheAnuncioPage () {
    const {slugid} = useParams();
    return (
        <div className="w-full h-screem flex items-center justify-center">
            <h1 className="text-2xl font-bold">Detalhes do Anuncio : {slugid}</h1>
        </div>
    )
}