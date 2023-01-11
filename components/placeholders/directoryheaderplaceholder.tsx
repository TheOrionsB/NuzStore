
const DirectoryHeaderPlaceholder: React.FC<{}> = () => {
    return (
        <div className="h-[5vh] p-2 flex flex-row items-center space-x-2 bg-gradient-to-r from-indigo-800 to-purple-700 rounded animate-pulse">
            <h1 className="text-3xl text-indigo-100 font-bold"></h1>
            <h3 className="text-xl text-indigo-300"></h3>
        </div>
    )
}

export default DirectoryHeaderPlaceholder;