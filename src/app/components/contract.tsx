"use client";


import { useAccount, useReadContract, useWriteContract } from "wagmi";
import ETHRegController from '../../contract/ETHRegistrarController.json'
import { useEffect, useState } from "react";





export default function Contract() {
    const [inputValue, setInputValue] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const { data: cheackavailable } = useReadContract({
        abi: ETHRegController.abi,
        address: ETHRegController.address as `0x${string}`,
        functionName: 'available',
        args: [inputValue],
    });


    useEffect(() => {
        //   console.log(cheackavailable)
        setResult(String(cheackavailable))
    }, [cheackavailable]);

    return (
        <div>
            用户名：<input type="text" value={inputValue} onChange={handleInputChange} />
            {result && <p>用户名 {inputValue} 是否可以注册：{result}</p>}
            {/* {contractResult.data?.toString()} */}
        </div>
    );
}