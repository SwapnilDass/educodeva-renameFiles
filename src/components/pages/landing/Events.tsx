export default function Events() {
  return (
    <div className="min-h-screen bg-[#050222] p-5 grid grid-cols-1 gap-5 md:grid-cols-3 text-white">
      <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        Card 1
      </div>

      <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        Card 2
      </div>

      <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        Card 3
      </div>

      <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] md:row-span-2">
        Tall Card
      </div>

      <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] md:col-span-2">
        Wide Card
      </div>

      <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        Card 6
      </div>

      <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        Card 7
      </div>
      
    </div>
  );
}
