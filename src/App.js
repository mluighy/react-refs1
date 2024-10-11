import React, { useRef } from 'react';

export default function VideoPlayer() {
  const refVideo = useRef();
  const refProcess = useRef();

  console.log('REF', refVideo.current);

  const fnPlay = () => {
    refVideo.current.play();
  };
  const fnPause = () => {
    refVideo.current.pause();
  };
  const fnPaused = () => {
    refProcess.current.innerText = 'Paused';
  };
  const fnPlaying = () => {
    refProcess.current.innerText = 'Playing';
  };
  // src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"

  return (
    <div className="max-w-[500px] space-y-4 p-8 mx-auto">
      <h1 className="text-center font-bold text-3xl">Video Player</h1>
      <video
        ref={refVideo}
        onPlay={fnPlaying}
        onPause={fnPaused}
        src="https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
      />
      <div className="flex justify-between">
        <button onClick={fnPause} className="text-orange-500 font-semibold">
          Pause
        </button>
        <div ref={refProcess}></div>
        <button onClick={fnPlay} className="text-indigo-500 font-semibold">
          Play
        </button>
      </div>
    </div>
  );
}
