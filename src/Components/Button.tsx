const Button = ({ title }: { title: string, }) => {
  return (
    <button className="btn w-full max-w-[150px] cursor-pointer hover:#D9D9D9">
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 150 53" fill="none" className="w-full h-full">
        <path  d="M55.2183 5.79534L55.3456 5.88201H55.4997H149.5V45.0939L139.271 51.7824H8.93774V0.5H47.4392L55.2183 5.79534Z" fill="#D9D9D9" fill-opacity="0.05" stroke="#B026FF"></path>
        <path d="M2.35937 47.8035H0.35V52.65H5.54843V0.349998H0.35V35.6037L2.61222 37.9673L2.70937 38.0688V38.2093V47.4535V47.8035H2.35937Z" stroke="#B026FF" stroke-width="0.7">
        </path>
        <text x="52%" y="55%" text-anchor="middle" fill="white" font-family="Proxon" className="text-white text-xs md:text-sm">
          {title}
        </text>
        </svg>
    </button>
  )
}

export default Button