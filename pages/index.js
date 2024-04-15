import { Avatar, Button } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import { useWallet } from '@xircus-web3/ton-react'
export default function Home() {
  const {connect, status, account} = useWallet()
  console.log(useWallet())
  console.log(account)
  function truncateText(text, maxWidth) {
    if (text.length <= maxWidth) {
      return text;
    } else {
      return text.slice(0, maxWidth) + '...';
    }
  }
  return (
    <main className="bg-black w-[100vw] h-[100vh] fixed">
      <div className="relative mt-10 flex px-20 justify-between">
        <Button onClick={connect}>
      {account ? (<span>Connected</span>) : (<span>Connect Wallet</span>)}
        </Button>
        {account && (<div className=" flex items-center gap-10">
        <Avatar />
        <Button className="truncate ...">
          {account}
        </Button>
      </div>)}
      </div>

      <div className="relative mt-[150px] flex items-center px-24 gap-10">
   <Image src='/XOFF.png'
   width={500}
   height={250}
   alt ="XIRCUS"
   />
   <div className=" text-white tracking-tighter flex flex-col items-start justify-start gap-5">
     <h1 className="text-7xl">
     Hello
      </h1> 
      <h3 className="text-2xl text-gray-500">
      Welcome to Xircus, The Telegram Mini App Renaissance
      </h3>
   </div>
      </div>
    </main>
  );
}
