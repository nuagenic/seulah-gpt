const Header = () => {
  return (
    <div className="mb-10 text-4xl flex justify-between">
      <div className="flex gap-8 animate-blink items-baseline">
        <h1 className="text-white font-seula leading-none">SEULA</h1>
        <h1 className="text-white font-basic tracking-widest leading-none">
          v1.0.0
        </h1>
      </div>
      <img
        className="w-8 h-8 self-center"
        src={process.env.PUBLIC_URL + '/close.png'}
        alt=""
      />
    </div>
  )
}

export default Header
