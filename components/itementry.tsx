import React from 'react';
import {
    AiOutlineDelete,
    AiOutlineDownload,
    AiOutlineFile,
    AiOutlineLock,
} from 'react-icons/ai';

interface ItemEntryProps {
    name: string;
    type: string;
    uploadDate: Date;
}
function ItemEntry(props: ItemEntryProps) {
    const { name, type, uploadDate } = props;
    return (
        <div className="flex flex-row justify-between items-center h-16 bg-gray-800 p-4 rounded text-indigo-200">
            <div className="flex flex-row space-x-2 items-center">
                <AiOutlineFile />
                <h3 className="text-2xl text-indigo-100">{name}</h3>
            </div>
            <p>{type}</p>
            <p>{uploadDate.toLocaleDateString()}</p>
            <div className="flex flex-row space-x-2 items-center">
                <AiOutlineDownload />
                <AiOutlineDelete />
                <AiOutlineLock />
            </div>
        </div>
    );
}
export default ItemEntry;
