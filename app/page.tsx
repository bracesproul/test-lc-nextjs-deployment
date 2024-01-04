"use client"

export default function Home() {

  async function hitHelloAPI() {
    const response = await fetch("/test", {
      method: "POST",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return null;
    });
    console.log(response);
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div onClick={hitHelloAPI} className="cursor-pointer h-[500px] w-[500px] bg-red-500 border-[1px] border-gray-400 rounded-md mx-auto"></div>
    </main>
  )
}
