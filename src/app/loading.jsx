const Loading = () => {
    return (
        <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-black">
            <span className="loading loading-spinner loading-lg text-[#C2F800] w-12"></span>
            <p className="text-xl font-medium text-[#C2F800]">Loading...</p>
        </div>
    );
};

export default Loading;