import p1 from "../Images/p1.png";
import p2 from "../Images/p2.png";
import p3 from "../Images/p3.png";
import p4 from "../Images/p4.png";
import p5 from "../Images/p5.png";
import p6 from "../Images/p6.png";
import t1 from "../Images/t1.png";
import t2 from "../Images/t2.png";
import t3 from "../Images/t3.png";
import t4 from "../Images/t4.png";
export const toDo=[
    {
        id:1,
        title:"Brainstorming",
        desc:"Breainstorming brings team members' diverse experience into play,",
        textures:[],
        images:[p1,p4,p3],
        priority:"Low",
        comments:12,
        files:0
    },
    {
        id:2,
        title:"Research",
        desc:"User research helps you to create an optimal product for users.",
        textures:[],
        images:[p2,p5],
        priority:"High",
        comments:10,
        files:3
    },
    {
        id:3,
        title:"Wireframes",
        desc:"Low fidelity wireframes include the most basic content and visuals.",
        textures:[],
        images:[p1,p2,p4],
        priority:"High",
        comments:15,
        files:5
    }
]
export const onProgress=[
    {
        id:4,
        title:"Onboarding Illustrations",
        desc:"",
        textures:[t1],
        images:[p1,p2,p4],
        priority:"Low",
        comments:14,
        files:15  
    },
    {
        id:5,
        title:"Moodboard",
        desc:"",
        textures:[t2,t3],
        images:[p6],
        priority:"Low",
        comments:9,
        files:10  
    }
]
export const onCompleted=[
    {
        id:6,
        title:"Mobile App Design",
        desc:"",
        textures:[t4],
        images:[p1,p2,p4],
        priority:"Completed",
        comments:14,
        files:15  
    },
    {
        id:6,
        title:"Design System",
        desc:"It just needs to adapt the UI from what you did before ",
        textures:[],
        images:[p1,p3,p4],
        priority:"Completed",
        comments:12,
        files:15  
    }
]