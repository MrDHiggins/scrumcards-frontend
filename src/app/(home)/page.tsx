export default function Home() {
  return (
<div className="relative min-h-screen flex flex-col">
  {/* <!-- TOP --> */}
  <div className="bg-[#223142] flex-1 flex items-center justify-center text-white relative">
    
  </div>

  {/* <!-- CURVE + BOTTOM --> */}
  <div className="bg-[#0f172a] flex-1 relative flex items-center justify-center text-white">
    {/* <!-- Curve --> */}
    <svg
      className="absolute top-0 left-0 w-full h-24 -translate-y-1"
      viewBox="0 0 1440 150"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        fill="#223142"
        d="M0,64 C360,180 1080,-50 1440,80 L1440,0 L0,0 Z"
      />
    </svg>

    {/* <!-- Bottom content --> */}
    
  </div>
</div>
  );
}