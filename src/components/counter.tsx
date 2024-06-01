export const Counter = ({ handleClick }: any) => {
    const handleClickIncrement = () => handleClick((counter:number)=>counter+1);
    const handleClickDecrement = () => handleClick((counter:number)=>counter-1);
    return (
        <div>
        Counter is here now!
            <button onClick={handleClickIncrement}>Increment</button>
            <button onClick ={handleClickDecrement}>Decrement</button>
        </div>
    );
}