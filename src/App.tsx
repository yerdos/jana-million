import { useState, useEffect } from 'react';
import { Trophy, Sparkles } from 'lucide-react';

interface TikTokUser {
  id: string;
  username: string;
  avatar: string;
  videoUrl: string;
  videoId?: string;
}

const mockUsers: TikTokUser[] = [
  { id: '1', username: 'mivya.n', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@mivya.n/video/7545903796275170582', videoId: '7545903796275170582' },
{ id: '2', username: 'errzzzattt', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@errzzzattt/video/7556045515402513676', videoId: '7556045515402513676' },
{ id: '3', username: 'qwerta017', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@qwerta017/video/7550567451637992710', videoId: '7550567451637992710' },
{ id: '4', username: 'fromanotherplanet07', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@fromanotherplanet07/video/7555179319044132152', videoId: '7555179319044132152' },
{ id: '5', username: 'zhanelek_', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@zhanelek_/video/7556583125480951062', videoId: '7556583125480951062' },
{ id: '6', username: 'yarikzhan', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@yarikzhan/video/7552965803021290763', videoId: '7552965803021290763' },
{ id: '7', username: 'nurzh0n', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@nurzh0n/video/7548130811090980102', videoId: '7548130811090980102' },
{ id: '8', username: 'shalkarovna_8', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@shalkarovna_8/video/7551787223599926539', videoId: '7551787223599926539' },
{ id: '9', username: '_._alsu', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@_._alsu/video/7550660639115447558', videoId: '7550660639115447558' },
{ id: '10', username: 'alexey.tin', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@alexey.tin/video/7551737886849207559', videoId: '7551737886849207559' },
{ id: '11', username: 'naz.saparova', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@naz.saparova/video/7551104704810421509', videoId: '7551104704810421509' },
{ id: '12', username: 'alexey.tin', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@alexey.tin/video/7551339157990231303', videoId: '7551339157990231303' },
{ id: '13', username: 'aruzhan_qambarbek', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@aruzhan_qambarbek/video/7557722546678795576', videoId: '7557722546678795576' },
{ id: '14', username: 'k.lunnn', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@k.lunnn/video/7557737610093874444', videoId: '7557737610093874444' },
{ id: '15', username: 'zhannsayaa01', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@zhannsayaa01/video/7557773021222669580', videoId: '7557773021222669580' },
{ id: '16', username: 'selini.i', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@selini.i/video/7557410601094384952', videoId: '7557410601094384952' },
{ id: '17', username: 'aruzhan_qambarbek', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@aruzhan_qambarbek/video/7557733588481903884', videoId: '7557733588481903884' },
{ id: '18', username: 'u.sauletkyzy', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@u.sauletkyzy/video/7556715242563063052', videoId: '7556715242563063052' },
{ id: '19', username: 'errzzzattt', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@errzzzattt/video/7556045515402513676', videoId: '7556045515402513676' },
{ id: '20', username: 'yerbolovna21', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@yerbolovna21/video/7557734106814074123', videoId: '7557734106814074123' },
{ id: '21', username: 'carpe_diem2313', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@carpe_diem2313/video/7556670810530778424', videoId: '7556670810530778424' },
{ id: '22', username: 'dill_yia', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@dill_yia/video/7555565934098828556', videoId: '7555565934098828556' },
{ id: '23', username: 'yerbolovna21', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@yerbolovna21/video/7558188117547584780', videoId: '7558188117547584780' },
{ id: '24', username: 'simba_ait1', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@simba_ait1/video/7558112217846091030', videoId: '7558112217846091030' },
{ id: '25', username: 'gulnaz4666', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@gulnaz4666/video/7547337651632819478', videoId: '7547337651632819478' },
{ id: '26', username: '8oxhwan', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@8oxhwan/video/7557442608373566731', videoId: '7557442608373566731' },
{ id: '27', username: 'u.sauletkyzy', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@u.sauletkyzy/video/7556715152951790859', videoId: '7556715152951790859' },
{ id: '28', username: 'a_aiymka', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@a_aiymka/video/7556551583106878731', videoId: '7556551583106878731' },
{ id: '29', username: 'l1tos_sss', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@l1tos_sss/video/7557866179944140040', videoId: '7557866179944140040' },
{ id: '30', username: 'k.rusgul.s95', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@k.rusgul.s95/video/7558395955523996939', videoId: '7558395955523996939' },
{ id: '31', username: 'errzzzattt', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@errzzzattt/video/7557174670626278667', videoId: '7557174670626278667' },
{ id: '32', username: 'yerbolovna21', avatar: '🎲', videoUrl: 'https://www.tiktok.com/@yerbolovna21/video/7553388651296738571', videoId: '7553388651296738571' },
];

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<TikTokUser | null>(null);
  const [currentUsers, setCurrentUsers] = useState<TikTokUser[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([]);
  const [embedLoaded, setEmbedLoaded] = useState(false);

  useEffect(() => {
    if (winner) {
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setConfetti(newConfetti);
    }
  }, [winner]);

  useEffect(() => {
    if (showModal && winner?.videoId && !embedLoaded) {
      const loadEmbedScript = () => {
        if ((window as any).tiktokEmbed) {
          (window as any).tiktokEmbed.lib.render(document.getElementById('tiktok-embed-container'));
        }
      };

      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      script.onload = loadEmbedScript;
      document.head.appendChild(script);
      setEmbedLoaded(true);

      return () => {
        const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [showModal, winner, embedLoaded]);

  const startLottery = () => {
    setIsSpinning(true);
    setWinner(null);
    setShowModal(false);
    setConfetti([]);

    let interval: NodeJS.Timeout;
    let duration = 0;
    const maxDuration = 5000;

    interval = setInterval(() => {
      const randomUsers = [...mockUsers].sort(() => Math.random() - 0.5).slice(0, 3);
      setCurrentUsers(randomUsers);
      duration += 100;

      if (duration >= maxDuration) {
        clearInterval(interval);
        const finalWinner = mockUsers[Math.floor(Math.random() * mockUsers.length)];
        setWinner(finalWinner);
        setIsSpinning(false);
        setTimeout(() => setShowModal(true), 1000);
      }
    }, 100);
  };

  const closeModal = () => {
    setShowModal(false);
    setEmbedLoaded(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-700 to-emerald-600 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      {/* Confetti effect */}
      {winner && confetti.map((item) => (
        <div
          key={item.id}
          className="absolute top-0 animate-fall"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            fontSize: '24px',
          }}
        >
          {Math.random() > 0.5 ? '₸' : '✨'}
        </div>
      ))}

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 px-8 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform">
            <h1 className="text-5xl md:text-7xl font-bold text-green-900 mb-2 animate-pulse">
              1 000 000 ₸ ұтып ал!
            </h1>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-stretch">
          {/* Left Side - TikTok */}
          <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-8 border-4 border-green-500 flex flex-col">
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <h2 className="text-4xl font-bold text-gray-900">TikTok</h2>
            </div>

            {/* Lottery Display */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 flex-1 flex flex-col items-center justify-center">
              {!winner && !isSpinning && (
                <div className="text-center">
                  <img src="/WhatsApp Image 2025-10-06 at 16.58.08.jpeg" alt="Trophy" className="w-40 h-40 mx-auto mb-4 object-contain" />
                  <p className="text-4xl text-gray-900 font-black">Жеңімпазды анықтауға дайынсыз ба?</p>
                </div>
              )}

              {isSpinning && (
                <div className="space-y-4 w-full">
                  <p className="text-xl text-center text-gray-700 font-semibold mb-4">Жеңімпазды таңдап жатырмыз...</p>
                  {currentUsers.map((user, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-lg animate-bounce"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-4xl">{user.avatar}</div>
                      <div className="text-xl font-bold text-gray-800">{user.username}</div>
                    </div>
                  ))}
                </div>
              )}

              {winner && !showModal && (
                <div className="text-center w-full animate-scale-in">
                  <div className="bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 rounded-2xl p-8 shadow-2xl">
                    <p className="text-5xl font-bold text-green-900 mb-6">Құттықтаймыз!</p>
                    <div className="bg-white rounded-xl p-8 inline-block">
                      <div className="text-8xl mb-4">{winner.avatar}</div>
                      <div className="text-5xl font-bold text-gray-900 mb-4">{winner.username}</div>
                    </div>
                    <p className="text-5xl font-bold text-green-900 mt-6 leading-tight">
                      1 000 000 ₸<br />ұтып ал!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Start Button */}
            <button
              onClick={startLottery}
              disabled={isSpinning}
              className={`w-full mt-6 py-5 rounded-xl font-bold text-2xl transition-all transform hover:scale-105 shadow-xl ${
                isSpinning
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-green-900'
              }`}
            >
              {isSpinning ? 'Таңдап жатыр...' : winner ? 'Қайта бастау' : 'Ұтысты бастау!'}
            </button>
          </div>

          {/* Right Side - JANA POST */}
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-3xl shadow-2xl p-16 border-4 border-green-500 w-full h-full flex flex-col items-center justify-center transform hover:scale-105 transition-transform">
              <img
                src="/jana-post-logo.svg"
                alt="JANA POST"
                className="w-full h-auto"
                style={{ filter: 'invert(32%) sepia(78%) saturate(1034%) hue-rotate(86deg) brightness(93%) contrast(89%)' }}
              />
              <div className="mt-12 flex gap-4 justify-center">
                <Sparkles className="w-14 h-14 animate-spin-slow drop-shadow-lg" style={{ color: '#1C8818' }} />
                <Sparkles className="w-14 h-14 animate-spin-slow drop-shadow-lg" style={{ color: '#1C8818', animationDelay: '0.5s' }} />
                <Sparkles className="w-14 h-14 animate-spin-slow drop-shadow-lg" style={{ color: '#1C8818', animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-8 text-white space-y-6">
          <p className="text-3xl font-bold">🎁 #jpнаходки хэштегімен видео түсіріп, 1 000 000 теңге ұтып алыңыз! 🎁</p>

          {/* Large Hashtag Display */}
          <div className="py-12 bg-white/10 backdrop-blur-sm rounded-3xl border-4 border-white/30">
            <div className="text-7xl font-black text-white drop-shadow-2xl tracking-wider">
              #jpнаходки
            </div>
          </div>
        </div>
      </div>

      {/* Winner Modal */}
      {showModal && winner && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-auto relative animate-scale-in">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 text-4xl font-bold z-10"
            >
              ×
            </button>

            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-4 animate-bounce" />
                <h2 className="text-5xl font-bold text-green-700 mb-4">Құттықтаймыз!</h2>
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl p-6 inline-block shadow-xl">
                  <div className="text-7xl mb-3">{winner.avatar}</div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{winner.username}</div>
                  <div className="text-3xl font-bold text-green-800">1 000 000 ₸ жеңіп алды!</div>
                </div>
              </div>

              {/* Video Player */}
              <div className="flex justify-center" id="tiktok-embed-container">
                <blockquote
                  className="tiktok-embed"
                  cite={`https://www.tiktok.com/${winner.username}/video/${winner.videoId}`}
                  data-video-id={winner.videoId}
                  style={{ maxWidth: '605px', minWidth: '325px' }}
                >
                  <section>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title={winner.username}
                      href={`https://www.tiktok.com/${winner.username}?refer=embed`}
                    >
                      {winner.username}
                    </a>
                    <p>Loading TikTok video...</p>
                  </section>
                </blockquote>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={closeModal}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-12 py-4 rounded-xl text-xl font-bold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  Жабу
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
