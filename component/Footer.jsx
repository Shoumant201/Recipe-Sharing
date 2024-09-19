
const Footer = () => {
  return (
    <footer className='w-full h-[150px] border border-gray flex justify-center'>
      <div className='w-[60%] h-full p-4'>
        <div className='flex justify-between items-center border-b border-gray-300 p-2'>
          <div>
            <p className='text-[#FF3535] font-semibold mb-1'>Get Help</p>
            <p className='font-light leading-5 mb-[4px] text-[#7D7D7D]'>How to order?</p>
            <p className='font-light leading-5 text-[#7D7D7D]'>FAQs</p>
          </div>
          <div>
            <p className='text-[#FF3535] font-semibold mb-1'>Contact Us</p>
            <p className='font-light leading-5 mb-[4px] text-[#7D7D7D]'>Kathmandu,Nepal</p>
            <p className='font-light leading-5 text-[#7D7D7D]'>9812763533</p>
          </div>
          <div>
            <p className='text-[#FF3535] font-semibold mb-1'>Connect With Us</p>
            <p className='font-light leading-5'>Logos</p>
          </div>
        </div>
        <div className='flex justify-between font-light'>
          <p>Terms of usage</p>
          <p>@all rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
