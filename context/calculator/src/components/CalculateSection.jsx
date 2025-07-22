const CalculateSection = () => {
    return(
        <div className="gap-3 grid p-5 border rounded-md w-[300px] h-[250px]">
            <button type="button" className="bg-blue-500 px-3 py-1 rounded-md text-white">Add</button>
            <button type="button" className="bg-blue-500 px-3 py-1 rounded-md text-white">Subtraction</button>
            <button type="button" className="bg-blue-500 px-3 py-1 rounded-md text-white">Multiplication</button>
            <button type="button" className="bg-blue-500 px-3 py-1 rounded-md text-white">Divide</button>
        </div>
    );
}

export default CalculateSection;