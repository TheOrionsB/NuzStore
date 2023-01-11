import { AiOutlineDelete, AiOutlineDownload, AiOutlineFile, AiOutlineLock } from "react-icons/ai";

const ItemEntryPlaceholder: React.FC<{ name: String, type: String, uploadDate: Date, owner: String }> = ({ name, type, uploadDate }) => {
    return (
        <div className="flex flex-row justify-between items-center animate-pulse bg-gray-800 p-4 rounded text-indigo-200">
            <div className="w-full p-4 h-12"/>
        </div>
    )
}
export default ItemEntryPlaceholder;