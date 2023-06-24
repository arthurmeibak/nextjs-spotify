import { HomeIcon, Laptop2, LayoutList, Library, Maximize2, Mic2, PlayIcon, Repeat, Search, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";

export function Footer () {
    return (
        <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between ">
        
        
        <div className="flex items-center gap-3">
          <Image
            src="/JoyDivision.jpg"
            className="w-full  mobile:hidden"
            width={56}
            height={56}
            alt="Joy Division album cover"
          />
          <div className="flex flex-col  mobile:hidden">
            <strong className="font-normal">Twenty Four Hours</strong>
            <span className="text-xs text-zinc-400">Joy Division</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2  mobile:hidden">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <PlayIcon />
            </button>

            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:44</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-12 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">6:16</span>
          </div>
        </div>
        <div className="flex items-center gap-4  mobile:hidden">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-12 bg-zinc-600">
              <div className="bg-zinc-200 w-6 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>

        <div className="w-full mobileMin:hidden">
        <nav className="flex justify-around">
              <HomeIcon />
              <Search />
              <Library />
          </nav>
          </div>
      </footer>
    )
}