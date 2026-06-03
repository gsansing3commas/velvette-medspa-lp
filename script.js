// Scroll reveals
const io = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ==============================================================
   TRUGEN WIRE-UP (replace with your real values)
   Recommended: do NOT put your TruGen API key here. Create the
   conversation server-side via a Cloudflare Worker at /api/conversation
   that calls https://api.trugen.ai/v1/conversations with your key,
   then mount the returned session into #trugen-mount.
   ============================================================== */
// Example:
// document.getElementById('trugen-mount').addEventListener('click', async () => {
//   const res = await fetch('/api/conversation', { method:'POST' });
//   const session = await res.json();
//   // mount TruGen player/iframe with session details here
// });