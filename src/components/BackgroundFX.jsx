export default function BackgroundFX() {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none fixed inset-0 z-0 overflow-hidden'
    >
      <div className='gridbg noise absolute inset-0 opacity-80' />

      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(124,58,237,0.08),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)]' />

      <div className='absolute -left-24 top-20 h-72 w-72 rounded-full bg-[rgba(168,85,247,0.18)] blur-[120px]' />
      <div className='absolute right-[-6rem] top-[22%] h-80 w-80 rounded-full bg-[rgba(124,58,237,0.12)] blur-[140px]' />
      <div className='absolute bottom-[-8rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[rgba(168,85,247,0.10)] blur-[160px]' />

      <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent' />
    </div>
  );
}
