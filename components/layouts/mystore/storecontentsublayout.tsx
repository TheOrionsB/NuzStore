import { AiOutlineArrowLeft, AiOutlineFile } from "react-icons/ai";
import ItemEntry from "../../itementry";

const StoreContentSubLayout: React.FC<{}> = () => {
    return (
        <div className="flex flex-col justify-evenly space-y-4 p-4">
            <div className="h-[5vh] flex flex-row justify-around items-center">
                <input className="w-10/12 bg-gray-700 rounded p-4" type="text" placeholder="Type here to search through your store... (CMD + K)" />
                <div className="w-2/12 text-center">
                    <h2 className="underline text-white">DummyUser</h2>
                </div>
            </div>
            <div className="h-[5vh] p-4 flex flex-row items-baseline space-x-2 bg-indigo-800 rounded">
                <AiOutlineArrowLeft className="text-indigo-100 font-bold" />
                <h1 className="text-3xl text-indigo-100 font-bold">Folder1</h1>
                <h3 className="text-xl text-indigo-300">Directory</h3>
            </div>
            <div className="h-[80vh] overflow-y-scroll bg-indigo-900">
                <ul className="p-4 space-y-2 ">
                    <li><ItemEntry name={"File1.txt"} type={"Text file"} uploadDate={new Date()} owner={"DummyUser"} key={1}/></li>
                    <li><ItemEntry name={"File2.txt"} type={"Text file"} uploadDate={new Date()} owner={"DummyUser"} key={2}/></li>
                    <li><ItemEntry name={"File3.txt"} type={"Text file"} uploadDate={new Date()} owner={"DummyUser"} key={3}/></li>
                </ul>
            </div>
        </div>
    )
}

export default StoreContentSubLayout;