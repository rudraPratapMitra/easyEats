// import { useRouteError } from "react-router-dom";

// function Error(){
//     const err=useRouteError()
//     return(
//         <div className="error">
//             <h1>UH-OHH</h1>
//             <h2>Something Went Wrong on our end.</h2>
//             <p>{err.status} - {err.statusText}</p>
//             <img src="https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Downloader_37.png?v=1687504134"/>
//             <h3>Please Try Again</h3>
//         </div>
//     )
// }
// export default Error; 


import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center animate-fade-in">
        <img
          src="https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Downloader_37.png?v=1687504134"
          alt="Error Illustration"
          className="w-52 mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-red-500 mb-2">Uh-oh!</h1>
        <h2 className="text-xl font-medium mb-4">Something went wrong.</h2>
        {err?.status && (
          <p className="text-gray-500 mb-4">
            <span className="font-semibold">{err.status}</span> - {err.statusText}
          </p>
        )}
        <p className="text-gray-600 mb-6">Please try again later.</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export default Error;
