const InputSection = () => {
    return(
        <div className="space-y-3 p-5 border rounded-md w-[300px] h-[250px]">
            <div className="gap-1 grid">
                <label className="font-medium text-gray-700">First Number:</label>
                <input type="number" placeholder="Enter first number" className="p-1 border border-gray-200 rounded-md"/>
            </div>
            <div className="gap-1 grid">
                <label className="font-medium text-gray-700">Second Number:</label>
                <input type="number" placeholder="Enter first number" className="p-1 border border-gray-200 rounded-md"/>
            </div>
        </div>
    );
}
export default InputSection;