const LoadingBar: React.FC<{}> = () => {
    return (
        <div className="fixed top-0 left-0 w-full">
            {/* <div className="fixed z-10 h-2 top-0 overflow-y-hidden left-0 w-1/4 animate-translateright rounded  shadow-lg shadow-indigo-400 bg-gradient-to-r from-indigo-800 to-purple-700"/> */}
            <div className="fixed z-0 top-0 left-0 w-full h-2 bg-indigo-800 animate-pulse">
            </div>
        </div>
    )
}

export default LoadingBar;