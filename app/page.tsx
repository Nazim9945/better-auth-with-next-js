
import Link from "next/link";


export default  function Home() {
 
  return (
    <div className="min-h-screen bg-teal-800/80 flex items-center justify-center ">
      <div className=" rounded-md h-20 w-200 bg-gray-300 flex items-center justify-center gap-4 ">
         
          
            <Link
              href={"/signin"}
              className="py-2 px-4 bg-blue-400 text-white cursor-pointer rounded-md"
            >
              signin
            </Link>
            <Link
              href={"/signup"}
              className="py-2 px-4 bg-blue-400 text-white cursor-pointer rounded-md"
            >
              signup
            </Link>
          
        
        
        
      </div>
    </div>
  );
}
