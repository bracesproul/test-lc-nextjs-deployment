"use client"

export default function Home() {
  async function hitPathAPI() {
    const response = await fetch("/try_path", {
      method: "POST",
    }).then((res) => {
      return res.json();
    });
    console.log("Start response from /try_path");
    console.log(response);
    console.log("Finish response from /try_path");
  }

  async function hitNotPathAPI() {
    const response = await fetch("/not_path", {
      method: "POST",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return null;
    });
    console.log("Start response from /not_path");
    console.log(response);
    console.log("Finish response from /not_path");
  }


  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <div onClick={hitPathAPI} className="cursor-pointer h-[500px] w-[500px] bg-red-500 border-[1px] border-gray-400 rounded-md mx-auto flex flex-col">
        <h1 className="mx-auto text-white">Click to format a prompt template w/ a path to an image</h1>
        <p>API response is logged to console</p>
      </div>
      <div onClick={hitNotPathAPI} className="cursor-pointer h-[500px] w-[500px] bg-blue-500 border-[1px] border-gray-400 rounded-md mx-auto flex flex-col">
        <h1 className="mx-auto text-white">Click to format a prompt template without a path to an image</h1>
        <p>API response is logged to console</p>
      </div>
    </main>
  )
}
