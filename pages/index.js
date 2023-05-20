import styles from "../styles/Home.module.css";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useEffect } from "react";


export default function Home() {
  const address = useAddress();

  useEffect(() => {
    console.log(address);
  }, [address])
  
  return (
    <div>
      <ConnectWallet />
      {address}
    </div>
  );
}
