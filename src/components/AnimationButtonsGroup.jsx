const colorClasses = {
  red: 'bg-red-500 hover:bg-red-600',
  green: 'bg-green-500 hover:bg-green-600',
  blue: 'bg-blue-500 hover:bg-blue-600',
  purple: 'bg-purple-500 hover:bg-purple-600',
};

export default function AnimationButtonsGroup({ playFunction, resetFunction, color, hideReset }) {
  const btnColor = colorClasses[color] || colorClasses.blue; // fallback to blue if invalid color

  return (
    <div className="flex flex-row gap-2">
      <button
        className={`${btnColor} text-white cursor-pointer font-semibold w-[100px] py-2 px-4 rounded-lg shadow`}
        onClick={playFunction}
      >
        Play
      </button>
      {!hideReset && (
        <button
          className={`${btnColor} text-white cursor-pointer font-semibold w-[100px] py-2 px-4 rounded-lg shadow`}
          onClick={resetFunction}
        >
          Reset
        </button>
      )}
    </div>
  );
}
