
const Footer = () => {
  return (
      <div className="flex bg-[#241E24] py-10 px-20 justify-between text-white">
          <p>Copyright <span className="text-purple-300">©</span> 2024 DcodeBlock</p>
          <div className="flex gap-4">
              <p className="text-medium">Help Center</p>
              <div className=" border-l-2 border-white"></div>
              <p className="text-medium">Terms and Conditions</p>
              <div className=" border-l-2 border-white"></div>
              <p className="text-medium">Privacy policy</p>
          </div>
    </div>
  )
}

export default Footer