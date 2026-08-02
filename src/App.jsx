import React, { useState } from 'react';
import { Play, Loader, CheckCircle, AlertCircle, Zap } from 'lucide-react';

export default function DroneWalkthroughGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [progress, setProgress] = useState('');
  const [error, setError] = useState(null);
  const [logs, setLogs] = useState([]);

  const propertyImages = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-1118656019576025785/original/2486781c-6ce5-4d9a-9d39-f467c5c83520.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1118656019576025785/original/39ccd867-ff77-43d1-8311-0caa04db92c7.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1118656019576025785/original/641085b1-83f6-4b70-a155-3cc2a9f358f2.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1118656019576025785/original/24549fbe-88d0-40fa-9120-4eacee2b25eb.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1118656019576025785/original/b429d6e6-417a-421b-8702-01d626a2a1e1.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1118656019576025785/original/237ae0c6-55e5-4195-8b5c-4395600a3a90.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1118656019576025785/original/3715bef3-9482-48cb-96cf-6bf4c5bcdb59.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1118656019576025785/original/4c2dc83d-91e0-448a-99af-8f62e023ca5f.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1118656019576025785/original/977b6271-4f5c-4478-ae86-286b33f72605.jpeg",
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1118656019576025785/original/ba2d0f1e-69a3-4d62-9245-a46592867ea4.jpeg",
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1118656019576025785/original/aaeb15ed-923c-4902-8544-71468c816e5e.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1118656019576025785/original/01a792fc-57b9-48a0-a5dd-ed0c0ce89627.jpeg",
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1118656019576025785/original/a3d35750-bc88-4160-bf51-4a0d4551abc0.jpeg",
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1118656019576025785/original/71b3cb96-4346-4501-8dcb-d6894ffd28eb.jpeg",
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1118656019576025785/original/c31a6070-ee6c-4551-a90a-1b76b96691fc.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1118656019576025785/original/4d237f88-fa42-4d9b-a103-ee27debd12b6.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1118656019576025785/original/f6c275ff-a21b-47fa-afa3-4a2618e5a6a2.jpeg",
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1118656019576025785/original/3bc05677-0bb2-4b61-8718-266398b7d63b.jpeg",
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1118656019576025785/original/8ae0b30c-ad9d-449d-8e76-cd445501b6a9.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1118656019576025785/original/a45ec632-ca8b-4939-b191-99b48fd6bfd8.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1118656019576025785/original/3d123fb8-18f8-4032-b1bf-6e17a118ef98.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1118656019576025785/original/a3b0783f-e631-4706-8ad6-5b0fc71eb0ca.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-1118656019576025785/original/095a2faf-02e5-4985-9027-21d4f0eb8d3a.jpeg"
  ];

  const addLog = (message) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const startGeneration = async () => {
    setIsGenerating(true);
    setProgress('Initializing VIEWMAX generation...');
    setError(null);
    setLogs([]);
    setVideoUrl(null);
    addLog('🎬 Starting drone-style property walkthrough generation');
    addLog(`📸 Processing ${propertyImages.length} property images`);

    try {
      addLog('Calling Claude API with VIEWMAX MCP server...');
      setProgress('Generating 23 cinematic drone-style video clips...');

      const response = await fetch('/api/generate-walkthrough', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 16000,
          messages: [
            {
              role: 'user',
              content: `Generate a professional drone-style property walkthrough video from these 23 images of Casa Becks luxury villa in La Oliva, Canary Islands.

CRITICAL: Use ONLY VIEWMAX MCP server tools.

STEP 1: Generate 23 video clips using VIEWMAX:generate_video
For each image, use these exact parameters:
- model: "Veo 3.1"
- duration: "3"
- orientation: "landscape"
- resolution: "1080p"

Use these drone-style cinematic prompts (one for each image in order):
1. "Aerial drone shot of luxury villa exterior, smooth ascending reveal showing manicured landscaping and entrance"
2. "Drone flyover of property entrance gate and driveway, gentle forward glide"
3. "Aerial view of heated swimming pool from above, slow circular drone orbit"
4. "Drone shot descending toward pool terrace showing sun loungers and outdoor furniture"
5. "Aerial perspective of villa roofline and architecture, slow pan across"
6. "Drone view of garden area with Mediterranean vegetation, gentle forward movement"
7. "Aerial shot of outdoor seating terrace, smooth descending angle"
8. "Drone footage of villa side profile, cinematic sweeping motion"
9. "Aerial view of driveway and adjacent areas, smooth crane-like movement"
10. "Drone shot through windows into living area, gentle forward glide"
11. "Aerial interior perspective of open-plan living, smooth descent"
12. "Drone view of master bedroom through windows, lateral tracking"
13. "Aerial perspective of spa-like bathroom, smooth approach"
14. "Drone shot of modern kitchen, slow panoramic sweep"
15. "Aerial view of secondary bedroom, gentle floating motion"
16. "Drone footage of designer bathroom, smooth centered approach"
17. "Aerial shot of dining area, cinematic diagonal pan"
18. "Drone view of hallway and connecting spaces, smooth forward glide"
19. "Aerial perspective of entertainment setup, gentle orbit"
20. "Drone shot of pool deck lounge furniture, smooth tracking"
21. "Aerial view of BBQ area, gentle descending motion"
22. "Drone footage of roof terrace with ocean view, sweeping panorama"
23. "Aerial final drone shot of entire property, slow cinematic reveal"

Images (in order):
${propertyImages.map((url, i) => `${i+1}. ${url}`).join('\n')}

STEP 2: Generate voiceover using VIEWMAX:generate_voiceover
- text: "Welcome to Casa Becks, a stunning luxury villa in La Oliva, Canary Islands. This beautifully designed home features two spacious bedrooms, two modern bathrooms, and exclusive amenities including a private heated pool, rooftop terrace with ocean views, and outdoor entertainment areas. Perfect for an unforgettable getaway."
- voiceId: Choose a professional, warm, calm male voice

STEP 3: Compose all clips using VIEWMAX:compose_video
- Create 23 clips, each 3 seconds
- Overlay the voiceover
- Set aspectRatio to "16:9"

Return ONLY the final video URL when complete.`
            }
          ],
          mcp_servers: [
            {
              "type": "url",
              "url": "https://www.viewmax.io/api/mcp",
              "name": "viewmax-mcp"
            }
          ]
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'API request failed');
      }

      addLog('✅ API call successful');
      
      const responseText = data.content?.[0]?.text || '';
      addLog(`📝 Response received: ${responseText.substring(0, 100)}...`);

      // Look for video URL in response
      const urlMatch = responseText.match(/https:\/\/[^\s'"<>)]+\.(mp4|mov|webm|wav)/i);
      
      if (urlMatch) {
        setVideoUrl(urlMatch[0]);
        addLog(`🎬 Video URL found: ${urlMatch[0]}`);
        setProgress('✅ Walkthrough video ready!');
      } else {
        addLog('⏳ Video is rendering on VIEWMAX servers...');
        setProgress('Video generation in progress. Check back in 5-15 minutes.');
        addLog('Note: The video URL will appear once VIEWMAX finishes encoding.');
      }

    } catch (err) {
      addLog(`❌ Error: ${err.message}`);
      setError(err.message);
      setProgress('');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-8 h-8 text-yellow-400" />
            <h1 className="text-4xl font-bold text-white">Casa Becks Drone Walkthrough</h1>
          </div>
          <p className="text-slate-300 text-lg">23 images → 70-second cinematic drone tour with VIEWMAX</p>
          <p className="text-slate-400 text-sm mt-2">La Oliva, Canary Islands • Luxury Villa</p>
        </div>

        {/* Image Preview */}
        <div className="bg-slate-700 rounded-lg p-6 mb-6 border border-slate-600">
          <div className="grid grid-cols-6 gap-2 mb-6">
            {propertyImages.slice(0, 12).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Room ${idx + 1}`}
                className="w-full aspect-square object-cover rounded border border-slate-500"
              />
            ))}
            <div className="col-span-6 flex justify-center pt-2">
              <span className="text-slate-300 text-sm">+11 more images</span>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={startGeneration}
            disabled={isGenerating}
            className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition ${
              isGenerating
                ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg'
            }`}
          >
            {isGenerating ? (
              <>
                <Loader className="w-6 h-6 animate-spin" />
                Generating Video...
              </>
            ) : (
              <>
                <Play className="w-6 h-6" />
                Generate 70-Second Walkthrough
              </>
            )}
          </button>
        </div>

        {/* Progress */}
        {progress && (
          <div className={`p-4 rounded-lg mb-6 flex items-center gap-3 ${
            progress.includes('✅') 
              ? 'bg-green-900 border border-green-700' 
              : 'bg-blue-900 border border-blue-700'
          }`}>
            {progress.includes('✅') ? (
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            ) : (
              <Loader className="w-5 h-5 text-blue-400 animate-spin flex-shrink-0" />
            )}
            <span className="text-white">{progress}</span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="p-4 bg-red-900 rounded-lg flex items-center gap-3 mb-6 border border-red-700">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <span className="text-red-100">{error}</span>
          </div>
        )}

        {/* Video Output */}
        {videoUrl && (
          <div className="p-6 bg-slate-700 rounded-lg border border-green-600 mb-6">
            <h2 className="text-white font-bold text-xl mb-4">🎬 Your Drone Walkthrough</h2>
            <video
              controls
              className="w-full rounded-lg mb-4 bg-black"
              src={videoUrl}
            />
            <a
              href={videoUrl}
              download="casa-becks-drone-walkthrough.mp4"
              className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
            >
              Download MP4
            </a>
          </div>
        )}

        {/* Logs */}
        {logs.length > 0 && (
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-600">
            <h3 className="text-slate-300 font-semibold mb-3">Generation Log</h3>
            <div className="bg-black rounded p-3 text-xs font-mono text-slate-300 max-h-48 overflow-y-auto">
              {logs.map((log, idx) => (
                <div key={idx} className="mb-1">
                  {log}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
