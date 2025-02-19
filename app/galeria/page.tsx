import GalleryImages from "../componentes/galleryImages/GalleryImages"
import AddImage from "../componentes/addImage/AddImage"

export default function Galeria() {

    return (
        <>
            <div className="flex flex-col max-w-[1048px] items-center m-auto mt-5 mb-10 gap-5 flex-wrap">
                <h1 className="text-5xl border-b pb-2">Galeria</h1>
                <AddImage />
                <GalleryImages />
            </div>
        </>
    )
}