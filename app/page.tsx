export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 
                     glassmorphism p-8 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
        GeCiLa - Agentic Commerce on Arc
      </h1>
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 max-w-2xl w-full">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">S</span>
            </div>
            <div>
              <p className="font-semibold text-indigo-300">Scout Agent</p>
              <p>Found 3 services matching your needs on Arc Testnet</p>
            </div>
          </div>
          <div className="text-center text-indigo-200">
            <p>🔗 WalletConnect → <span className="font-mono text-green-400">0x316FfEe113C08A19bDedd7a9e4138BfDb1Dfbbfe</span></p>
            <p>🌐 Arc Testnet (Chain ID: 5042002)</p>
            <p>✅ Flow: BTC→USDC→Service→XAF Complete</p>
          </div>
          <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 
                           text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
            Test Agent Negotiation
          </button>
        </div>
      </div>
    </main>
  )
}
