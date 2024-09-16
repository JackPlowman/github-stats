import { cn } from "@/lib/utils";
import Image from "next/image";

// export default function HomePageCards() {
//   return (
//     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//       <div className="bg-white rounded-lg shadow">
//         <div className="flex flex-col items-center justify-center p-6 bg-gray-50 border-b border-gray-200 sm:p-10 lg:p-16 xl:p-20">
//           <h2 className="text-4xl font-bold tracking-tight text-gray-900">
//             Dashboard
//           </h2>
//           <p className="mt-3 text-base text-gray-500">
//             Get a quick overview of your GitHub statistics.
//           </p>
//         </div>
//       </div>
//       <div className="bg-white rounded-lg shadow">
//         <div className="flex flex-col items-center justify-center p-6 bg-gray-50 border-b border-gray-200 sm:p-10 lg:p-16 xl:p-20">
//           <h2 className="text-4xl font-bold tracking-tight text-gray-900">
//             Repository
//           </h2>
//           <p className="mt-3 text-base text-gray-500">
//             View detailed information about a specific repository.
//           </p>
//         </div>
//       </div>
//       <div className="bg-white rounded-lg shadow">
//         <div className="flex flex-col items-center justify-center p-6 bg-gray-50 border-b border-gray-200 sm:p-10 lg:p-16 xl:p-20">
//           <h2 className="text-4xl font-bold tracking-tight text-gray-900">
//             About
//           </h2>
//           <p className="mt-3 text-base text-gray-500">
//             Learn more about the project and its contributors.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function HomePageCards() {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">

        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            About
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Learn more about the project and its contributors.
          </p>
        </div>
      </div>
    </div>
  );
}
