import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"

export const NavMenu = () => {
  return (
    <header className="w-full bg-[#1a2936]">
      <div className="flex items-center justify-between py-2 px-5">
        {/* Logo */}
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

        {/* Navigation */}
        <Link href="/new-game" passHref className="no-underline">
          <Button
            variant="default"
            size="lg"
            className="font-extrabold bg-[#facc14] text-white hover:cursor-pointer border-none outline-none"
          >
            Start new game
          </Button>
        </Link>
      </div>
    </header>
  )
}