import StoryCard from "./StoryCard";


const stories = [
    // {
    //     name: "kluivert Ssali",
    //     src: "https://media-exp1.licdn.com/dms/image/C5603AQGqyioiU7N3KQ/profile-displayphoto-shrink_200_200/0/1621117106565?e=1639612800&v=beta&t=VeKqETf7xfWnrK1HgEGHG5UH3amzkqhQoYOcft94su8",
    //     profile: "https://media-exp1.licdn.com/dms/image/C5603AQGqyioiU7N3KQ/profile-displayphoto-shrink_200_200/0/1621117106565?e=1639612800&v=beta&t=VeKqETf7xfWnrK1HgEGHG5UH3amzkqhQoYOcft94su8",
    // },
    {
        name: "Nalwanga Hilda",
        src: "https://www.google.com/imgres?imgurl=http%3A%2F%2Freigniteafrica.org%2Fwp-content%2Fuploads%2F2019%2F11%2Flll-800x661.jpg&imgrefurl=http%3A%2F%2Freigniteafrica.org%2F2019%2F11%2F03%2Flow-income-first-generation-students-and-career-pathways-are-academic-scholarships-enough%2F&tbnid=LBkDLRrYxDjw1M&vet=12ahUKEwjr4PjProb0AhWM0oUKHU4CAwwQMygEegQIARAw..i&docid=xCy0swwvMwlOuM&w=800&h=661&q=Nalwanga%20Hilda&ved=2ahUKEwjr4PjProb0AhWM0oUKHU4CAwwQMygEegQIARAw",
        profile: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smith.edu%2Fprofile%2Fhilda-nalwanga&psig=AOvVaw1aVIkMTgUntFuIA_DmIO_w&ust=1636378376245000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJisq-muhvQCFQAAAAAdAAAAABAD",
    },
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
