import StoryCard from "./StoryCard";
import King from "../Logo/king.jpg";
import Hill from "../Logo/hill.jpg";
import Hill2 from "../Logo/hillback.jpg";



const stories = [
    // {
    //     name: "kluivert Ssali",
    //     src: {King},
    //     profile: {King},
    // },
    // {
    //     name: "Nalwanga Hilda",
    //     src: {Hill},
    //     profile: {Hill2},
    // },
    {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
]; 

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) =>(
                <StoryCard
                  key={story.src}
                  name={story.name}
                  src={story.src}
                  profile={story.profile}
                />
            ))}
        </div>
    )
}
  
export default Stories
