const LoadingBar: React.FC<{}> = () => {
    return (
        <div className="absolute top-0 left-0 w-full">
            <div className="absolute z-10 h-2 top-0 left-0 w-1/4 animate-translateright rounded bg-indigo-400">
            </div>
            <div className="absolute z-0 top-0 left-0 w-full h-2 bg-indigo-800 animate-pulse">
            </div>
        </div>
    )
}

export default LoadingBar;