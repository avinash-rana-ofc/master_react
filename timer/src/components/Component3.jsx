import useTimer from "../hooks/useTimer";

const Component3 = () => {
  const counter = useTimer(5, 5);
  return (
    <div className="flex justify-center items-center m-4 p-12 border rounded-md w-full h-[300px] text-center">
      <div className="flex flex-col gap-y-6">
        <h1 className="font-bold text-xl">Component3</h1>
        <h2 className="font-semibold text-lg">{counter}</h2>
      </div>
    </div>
  );
};

export default Component3;
