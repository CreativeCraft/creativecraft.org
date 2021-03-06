const PlayerCount = () => {
  const data = fetch('https://creativecraft.org/api/').then((x) => x.json())

  return (
    <div className="flex flex-col items-center px-8 py-2 leading-none text-center text-white bg-green-500 shadow-lg cursor-default lg:px-3 text-shadow-lg">
      <div className="text-3xl">{data.Players || 0}</div>
      <div className="text-xs uppercase transform scale-90">Online</div>
    </div>
  )
}

export default PlayerCount
