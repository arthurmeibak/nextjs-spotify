import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronRight,
  ChevronLeft,
  PlayIcon,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
  Settings,
  Clock3,
  Bell,
} from "lucide-react";
import { Play } from "next/font/google";
import Image from "next/image";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-black/40 p-1">
                <ChevronLeft />
              </button>
              <button className="rounded-full bg-black/40 p-1">
                <ChevronRight />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button className="rounded-full bg-black/40 p-1">
                <Bell />
              </button>
              <button className="rounded-full bg-black/40 p-1">
                <Clock3 />
              </button>
              <button className="rounded-full bg-black/40 p-1">
                <Settings />
              </button>
            </div>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4 mobile:grid-cols-2">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors xlMax:h-12"
            >
              <Image
                src="/JoyDivision.jpg"
                className="w-32 h-32 xlMax:w-12 xlMax:h-12"
                alt="Joy Division album cover"
              />
              <strong className="xlMax:text-xs">Closer</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible xlMax:w-8 xlMax:h-8 mobile:hidden">
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors xlMax:h-12"
            >
              <Image
                src="/Smiths.jpg"
                className="w-32 h-32 xlMax:w-12 xlMax:h-12"
                alt="The Smiths album cover"
              />
              <strong className="xlMax:text-xs">The Queen is Dead</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible xlMax:w-8 xlMax:h-8 mobile:hidden">
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors xlMax:h-12"
            >
              <Image
                src="/Cure.jpg"
                className="w-32 h-32 xlMax:w-12 xlMax:h-12"
                alt="The Cure album cover"
              />
              <strong className="xlMax:text-xs">Boys Don`&apos;`t Cry</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible xlMax:w-8 xlMax:h-8 mobile:hidden">
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors xlMax:h-12"
            >
              <Image
                src="/Bauhaus.jpg"
                className="w-32 h-32 xlMax:w-12 xlMax:h-12"
                alt="Bauhaus album cover"
              />
              <strong className="xlMax:text-xs">Bela Lugosi is Dead</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible xlMax:w-8 xlMax:h-8 mobile:hidden">
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors xlMax:h-12"
            >
              <Image
                src="/Placebo.jpg"
                className="w-32 h-32 xlMax:w-12 xlMax:h-12"
                alt="Bauhaus album cover"
              />
              <strong className="xlMax:text-xs">
                Whitout You I`&apos;`m Nothing
              </strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible xlMax:w-8 xlMax:h-8 mobile:hidden">
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors xlMax:h-12"
            >
              <Image
                src="/Gang.jpg"
                className="w-32 h-32 xlMax:w-12 xlMax:h-12"
                alt="Bauhaus album cover"
              />
              <strong className="xlMax:text-xs">Entertainment</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible xlMax:w-8 xlMax:h-8 mobile:hidden">
                <PlayIcon />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Arthur Meibak
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4 mobile:grid-cols-2 mobileMin:grid-cols-3 mediumMax:grid-cols-2 largeMin:grid-cols-4 xlMin:grid-cols-6 2xlMin:grid-cols-8">
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Mix-1.jpg"
                className="w-full rounded-md"
                width={120}
                height={120}
                alt="Daily Mix album cover"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Joy Division, Smiths, David Bowie and more
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Early-Alternative-cover.jpg"
                className="w-full rounded-md"
                width={120}
                height={120}
                alt="The Velvet Underground album cover"
              />
              <strong className="font-semibold">Early Alternative</strong>
              <span className="text-sm text-zinc-500">
                The Velvet Underground, Lou Reed, The Stooges and more
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/-cover (3).jpg"
                className="w-full rounded-md"
                width={120}
                height={120}
                alt="Radiohead album cover"
              />
              <strong className="font-semibold">This is Radiohead</strong>
              <span className="text-sm text-zinc-500">
                A list of Radiohead&apos;s best songs
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Alternative-70s-cover.jpg"
                className="w-full rounded-md"
                width={120}
                height={120}
                alt="Pink Floyd album cover"
              />
              <strong className="font-semibold">Alternative 70&apos;s</strong>
              <span className="text-sm text-zinc-500">
                Pink Floyd, Yes, Emerson, Lake and Palmer and more
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/-cover.jpg"
                className="w-full rounded-md"
                width={120}
                height={120}
                alt="The Beatles album cover"
              />
              <strong className="font-semibold">The Beatles</strong>
              <span className="text-sm text-zinc-500">
                A list of The Beatles&apos; best songs
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/-cover (1).jpg"
                className="w-full rounded-md"
                width={120}
                height={120}
                alt="Jimi Hendrix album cover"
              />
              <strong className="font-semibold">This is Jimi Hendrix</strong>
              <span className="text-sm text-zinc-500">
                A list of Hendrix&apos;s best songs
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/-cover (2).jpg"
                className="w-full rounded-md"
                width={120}
                height={120}
                alt="New Order album cover"
              />
              <strong className="font-semibold">This is New Order</strong>
              <span className="text-sm text-zinc-500">
                A list of New Order&apos;s best songs
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Pumpkins.jpg"
                className="w-full rounded-md"
                width={120}
                height={120}
                alt="Smashing Pumpkins album cover"
              />
              <strong className="font-semibold">
                This is The Smashing Pumpkins
              </strong>
              <span className="text-sm text-zinc-500">
                A list of The Smashing Pumpkins&apos;s best songs
              </span>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Brasilidades</h2>

          <div className="grid grid-cols-8 gap-4 mt-4 mobile:grid-cols-2 mobileMin:grid-cols-3 mediumMax:grid-cols-2 largeMin:grid-cols-4 xlMin:grid-cols-6 2xlMin:grid-cols-8">
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Vinicius.jpg"
                className="w-full rounded-md"
                width={120}
                height={120}
                alt="Vinicius de Moraes album cover"
              />
              <strong className="font-semibold">
                This is Vinicius de Moraes
              </strong>
              <span className="text-sm text-zinc-500">
                A list of Vinicius de Moraes&apos; best songs
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Cartola-cover.jpg"
                className="w-full rounded-md"
                width={120}
                height={120}
                alt="Cartola album cover"
              />
              <strong className="font-semibold">This is Cartola</strong>
              <span className="text-sm text-zinc-500">
                A list of Cartola&apos;s best songs
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Caetano.jpg"
                className="w-full rounded-md"
                width={120}
                height={120}
                alt="Caetano Veloso album cover"
              />
              <strong className="font-semibold">This is Caetano Veloso</strong>
              <span className="text-sm text-zinc-500">
                A list of Caetano Veloso&apos;s best songs
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Chico.jpg"
                className="w-full rounded-md"
                width={120}
                height={120}
                alt="Chico Buarque album cover"
              />
              <strong className="font-semibold">This is Chico Buarque</strong>
              <span className="text-sm text-zinc-500">
                A list of Chico Buarque&apos;s best songs
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Clube.jpg"
                className="w-full rounded-md"
                width={120}
                height={120}
                alt="Clube da Esquina album cover"
              />
              <strong className="font-semibold">Clube da Esquina</strong>
              <span className="text-sm text-zinc-500">
                A list of Clube da Esquina&apos;s best songs
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Mutantes.jpg"
                className="w-full rounded-md"
                width={120}
                height={120}
                alt="Os Mutantes album cover"
              />
              <strong className="font-semibold">This is Os Mutantes</strong>
              <span className="text-sm text-zinc-500">
                A list of Os Mutantes&apos; best songs
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Violeta.jpg"
                className="w-full rounded-md"
                width={120}
                height={120}
                alt="Violeta de Outono album cover"
              />
              <strong className="font-semibold">Violeta de Outono</strong>
              <span className="text-sm text-zinc-500">
                A list of Violeta de Outono&apos;s best songs
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Casuarina.jpg"
                className="w-full rounded-md"
                width={120}
                height={120}
                alt="Casuarina album cover"
              />
              <strong className="font-semibold">This is Casuarina</strong>
              <span className="text-sm text-zinc-500">
                A list of Casuarina&apos;s best songs
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
