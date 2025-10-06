import Image from "next/image"

export const CreateGameNav = () => {
  return (
    <header className="w-full bg-[#1a2936]">
      <div className="flex items-center justify-between py-2 px-5">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </header>
  )
}