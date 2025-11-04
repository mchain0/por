import { NextResponse } from 'next/server'

type TokenData = {
  tokenName: string
  totalTokenByChain: number
}

type ResponseData = {
  accountName: string
  totalTrust: number
  totalToken: number
  updatedAt: string
  token: TokenData[]
  ripcord: boolean
  ripcordDetails: any[]
}

async function getRealTimeReserves(): Promise<NextResponse<ResponseData>> {
  // Add random latency between 0-5 seconds
  const randomLatency = Math.random() * 5000
  await new Promise(resolve => setTimeout(resolve, randomLatency))
  
  const data: ResponseData = {
    accountName: "TrueUSD",
    totalTrust: 501931400.88,
    totalToken: 494515082.75,
    updatedAt: "2025-10-31T10:24:06.192Z",
    token: [
      { tokenName: "TUSD (AVAX)", totalTokenByChain: 2327025.78 },
      { tokenName: "TUSD (ETH)", totalTokenByChain: 315125540.9523497 },
      { tokenName: "TUSD (TRON)", totalTokenByChain: 167032152.1376503 },
      { tokenName: "TUSD (BSC)", totalTokenByChain: 10030363.88 }
    ],
    ripcord: false,
    ripcordDetails: []
  }
  
  return NextResponse.json(data)
}

export const GET = getRealTimeReserves
