import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="px-8 lg:px-4 min-h-screen w-full flex justify-center items-center">
        <div className="w-full lg:w-1/3 px-5 py-8 h-[18.5rem] shadow-md rounded-md border-slate-200 relative hover:translate-y-1 hover:shadow-xl transition ease-linear" data-aos="zoom-in">
          <h1 className="text-3xl font-bold text-center uppercase">Pre Test</h1>
          <ul className="list-disc ms-5 mt-6 capitalize">
            <li>Membuat form register dan login</li>
            <li>Responsif</li>
            <li>Deploy</li>
          </ul>
          <div className="flex items-center space-x-3 my-2">
            <span className="text-sm font-medium py-1 px-2 border rounded hover:bg-zinc-200">Next Js</span>
            <span className="text-sm font-medium py-1 px-2 border rounded hover:bg-zinc-200">Tailwind CSS</span>
          </div>
          <div className="p-3 lg:p-5 flex items-center space-x-3 absolute inset-x-0 bottom-0">
            <Link href={'/register'} className="w-full py-2 px-3 rounded-full text-center border bg-slate-700 text-white font-medium hover:bg-slate-800">Register</Link>
            <Link href={'/login'} className="w-full py-2 px-3 rounded-full text-center border font-medium hover:bg-zinc-200">Login</Link>
          </div>
        </div>
      </div>
    </>
  )
}
