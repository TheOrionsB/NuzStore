import Link from "next/link";
import { AiFillPushpin, AiOutlineUser, AiOutlineLock, AiOutlineInfoCircle, AiOutlineLogout } from 'react-icons/ai'
const Navigation: React.FC<{}> = () => {
    return (
        <div className="p-4 font-light space-y-4 text-black h-full min-h-full">
            <div className="bg-gradient-to-r from-indigo-300 to-indigo-600 bg-clip-text">
                <h1 className="text-center text-4xl font-bold text-transparent">NuzStore</h1>
            </div>
            <div className="space-y-4">
                <h2 className="font-bold text-indigo-500">My pins:</h2>
                <ul className="space-y-2 italic text-gray-200">
                    {/* <li><Link className="p-2 rounded animate-pulse w-full bg-gray-600 text-indigo-400 flex flex-row items-center" href="#"><AiFillPushpin /></Link></li>
                    <li><Link className="p-2 rounded animate-pulse w-full flex flex-row items-center" href="#"><AiFillPushpin /></Link></li>
                    <li><Link className="p-2 rounded animate-pulse w-full flex flex-row items-center" href="#"><AiFillPushpin /></Link></li>
                    <li><Link className="p-2 rounded animate-pulse w-full flex flex-row items-center" href="#"><AiFillPushpin /></Link></li> */}
                    <li><Link className="p-2 rounded bg-gray-600 text-indigo-400 flex flex-row items-center" href="#"><AiFillPushpin />Folder1</Link></li>
                    <li><Link className="p-2 rounded flex flex-row items-center" href="#"><AiFillPushpin />randomfile.pdf</Link></li>
                    <li><Link className="p-2 rounded flex flex-row items-center" href="#"><AiFillPushpin />brianmurder.docx</Link></li>
                    <li><Link className="p-2 rounded flex flex-row items-center" href="#"><AiFillPushpin />allo.gif</Link></li>
                </ul>
            </div>
            <div className="space-y-4">
                <h2 className="font-bold text-indigo-500">Settings:</h2>
                <ul className="space-y-2 text-gray-200">
                    <li className="p-2 space-x-2 flex flex-row items-center"><AiOutlineUser /><h3>Account</h3></li>
                    <li className="p-2 space-x-2 flex flex-row items-center"><AiOutlineLock /><h3>Privacy</h3></li>
                    <li className="p-2 space-x-2 flex flex-row items-center"><AiOutlineInfoCircle /><h3>About</h3></li>
                    <li className="p-2 space-x-2 text-red-400 flex flex-row items-center"><AiOutlineLogout /><h3>Log out</h3></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;