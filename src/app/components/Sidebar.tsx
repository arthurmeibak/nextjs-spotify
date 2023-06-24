import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar () {
    return (
        <aside className="w-72 bg-zinc-950 p-6 mobile:hidden">
          <div className="flex itens-center gap-2 pb-8">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className="space-y-5 mt-10clean">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold  text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold  text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hip Hop Workout
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              DJ Club
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Russian Post Punk
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Easy German
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Reggae Roots
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Binaural Beats
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Reggaeton
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Beach Songs
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Ela Partiu
            </a>
          </nav>
        </aside>
    )
}