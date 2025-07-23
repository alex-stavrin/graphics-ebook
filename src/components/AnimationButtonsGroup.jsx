export default function AnimationButtonsGroup({playFunction, resetFunction, color, hideReset})
{
    return  <div className="flex flex-row gap-2">
            <button className={`bg-${color}-500 hover:bg-${color}-600 text-white cursor-pointer font-semibold w-[100px] py-2 px-4 rounded-lg shadow`}
                onClick={playFunction}
            >
                Play
            </button>
            {!hideReset && <button className={`bg-${color}-500 hover:bg-${color}-600 cursor-pointer text-white font-semibold w-[100px] py-2 px-4 rounded-lg shadow`}
                onClick={resetFunction}
            >
                Reset
            </button>}
    </div>
}