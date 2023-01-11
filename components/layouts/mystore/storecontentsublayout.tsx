import { AiOutlineArrowLeft, AiOutlineFile, AiOutlineUser } from "react-icons/ai";
import DirectoryHeader from "../../directoryheader";
import ItemEntry from "../../itementry";
import DirectoryHeaderPlaceholder from "../../placeholders/directoryheaderplaceholder";
import ItemEntryPlaceholder from "../../placeholders/itementryplaceholder";

const StoreContentSubLayout: React.FC<{}> = () => {
    return (
        <div className="h-full flex flex-col justify-between p-3">
            <div className="h-[5vh] flex flex-row justify-around items-center">
                <input className="w-10/12 bg-gray-700 rounded p-4" type="text" placeholder="Type here to search through your store... (CMD + K)" />
                <div className="py-2 px-4 flex flex-row justify-center items-center text-indigo-200 space-x-2 border-2 border-indigo-300 rounded-xl">
                    <AiOutlineUser/>
                    <h2 className="underline">DummyUser</h2>
                </div>
            </div>
            <DirectoryHeader/>
            {/* <DirectoryHeaderPlaceholder/> */}
            <div className="h-[80vh] flex flex-col overflow-y-scroll bg-slate-700 rounded">
                <div className="flex flex-row px-8 pt-6 pb-2 justify-between text-indigo-100">
                    <h2>Name</h2>
                    <h2>Type</h2>
                    <h2>Date</h2>
                    <h2>Actions</h2>
                </div>
                <ul className="p-4 space-y-2 ">
                    <li><ItemEntry name={"File3.txt"} type={"Text file"} uploadDate={new Date()} owner={"DummyUser"} key={1}/></li>
                    <li><ItemEntry name={"File3.txt"} type={"Text file"} uploadDate={new Date()} owner={"DummyUser"} key={2}/></li>
                    <li><ItemEntry name={"File3.txt"} type={"Text file"} uploadDate={new Date()} owner={"DummyUser"} key={3}/></li>
                    <li><ItemEntry name={"File3.txt"} type={"Text file"} uploadDate={new Date()} owner={"DummyUser"} key={4}/></li>
                    {/* <li><ItemEntryPlaceholder name={"File3.txt"} type={"Text file"} uploadDate={new Date()} owner={"DummyUser"} key={1}/></li> */}
                    {/* <li><ItemEntryPlaceholder name={"File3.txt"} type={"Text file"} uploadDate={new Date()} owner={"DummyUser"} key={2}/></li> */}
                    {/* <li><ItemEntryPlaceholder name={"File3.txt"} type={"Text file"} uploadDate={new Date()} owner={"DummyUser"} key={3}/></li> */}
                    {/* <li><ItemEntryPlaceholder name={"File3.txt"} type={"Text file"} uploadDate={new Date()} owner={"DummyUser"} key={4}/></li> */}
                </ul>
            </div>
        </div>
    )
}

export default StoreContentSubLayout;