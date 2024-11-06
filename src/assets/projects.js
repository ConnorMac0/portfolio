import map from './images/map.jpg';
import sound from './images/sound-wave.jpg';
import tutela from './images/tutela.png';
import tictactoe from './images/tic-tac-toe.png';
import checklist from './images/checklist.jpg';

export const projects = [
    {
        title: "Tutela",
        stack: ["React", "Express", "Stripe"],
        image: tutela,
        link: "https://github.com/ConnorMac0/tutela"
    },
    {
        title: "DeepFake Voice Detection",
        stack: ["ML", "Python", "TensorFlow"],
        image: sound,
        link: "https://github.com/ConnorMac0/DeepFakeAudioDetection"
    },
    {
        title: "Find My Shelter",
        stack: ["HTML", "Google APIs", "PHP"],
        image: map,
        link: "https://github.com/ConnorMac0/FindMyShelter"
    },
    {
        title: "Terminal Tic-Tac-Toe",
        stack: ["Minimax", "C++", "AI"],
        image: tictactoe,
        link: "https://github.com/ConnorMac0/tic-tac-toe"
    },
    {
        title: "Chapter Tracker",
        stack: ["Python", "Pandas", "Tkinter"],
        image: checklist,
        link: "https://github.com/ConnorMac0/ChapterTracker"
    },
]