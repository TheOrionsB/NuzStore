import { AiOutlineArrowLeft, AiOutlineFile, AiOutlineUser } from "react-icons/ai";
import ItemEntry from "../../itementry";

const StoreContentSubLayout: React.FC<{}> = () => {
    return (
        <div className="h-full flex flex-col justify-between p-4">
            <div className="h-[5vh] flex flex-row justify-around items-center">
                <input className="w-10/12 bg-gray-700 rounded p-4" type="text" placeholder="Type here to search through your store... (CMD + K)" />
                <div className="py-2 px-4 flex flex-row justify-center items-center text-indigo-200 space-x-2 border-2 border-indigo-300 rounded-xl">
                    <AiOutlineUser/>
                    <h2 className="underline">DummyUser</h2>
                </div>
            </div>
            <div className="h-[5vh] p-4 flex flex-row items-baseline space-x-2 bg-gradient-to-r from-indigo-800 to-purple-700 rounded">
                <AiOutlineArrowLeft className="text-indigo-100 font-bold" />
                <h1 className="text-3xl text-indigo-100 font-bold">Folder1</h1>
                <h3 className="text-xl text-indigo-300">(MyStore {'>'} Documents {'>'} Folder1)</h3>
            </div>
            <div className="h-[80vh] flex flex-col overflow-y-scroll bg-slate-700 rounded">
                <div className="flex flex-row px-8 pt-6 pb-2 justify-between text-indigo-100">
                    <h2>Name</h2>
                    <h2>Type</h2>
                    <h2>Date</h2>
                    <h2>Actions</h2>
                </div>
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