function App() {
  return (
  <div className="h-screen flex flex-col items-center justify-center gap-6 bg-white outline-none">
    <h1 className="text-8xl text-black font-semibold press-start">4n5hu</h1>
    <div className="flex items-center gap-4 text-2xl lucida">
      <a href="https://github.com/anshu189" target="_blank" rel="noreferrer">Github</a><span>|</span>
      <a href="https://www.linkedin.com/in/4n5hu" target="_blank" rel="noreferrer">Linkedin</a><span>|</span>
      <a href="https://advrtic.com" target="_blank" rel="noreferrer">Advrtic</a>
    </div>
    <a className="flex items-center gap-3 border-2 border-[#DDDDDD] rounded-lg p-2 px-4 mt-6 hover:border-black duration-500" href="https://drive.google.com/file/d/1YUDYAXXqejsXw2xkyCqBbE1VUxOEAy83/view?usp=sharing" target="_blank" rel="noreferrer">Download Resume
        <svg className="w-3 rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
      </a>
  </div>
  );
}

export default App;