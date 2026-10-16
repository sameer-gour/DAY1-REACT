import Card from './card'

let data = [
  {
    name: "Shamir Gour",
    nickname: "sam",
    city: "Roorkee",
    img: "https://i.pinimg.com/736x/61/3c/52/613c526416525ff37d1ac856af0b8061.jpg"
  },
  {
    name: "Munner Gour",
    nickname: "munna",
    city: "Roorkee",
    img: "https://i.pravatar.cc/300?img=12"
  },
  {
    name: "Rahul Sharma",
    nickname: "rahul",
    city: "Delhi",
    img: "https://i.pravatar.cc/300?img=13"
  },
  {
    name: "Aman Verma",
    nickname: "aman",
    city: "Dehradun",
    img: "https://i.pravatar.cc/300?img=14"
  },
  {
    name: "Arjun Singh",
    nickname: "arjun",
    city: "Noida",
    img: "https://i.pravatar.cc/300?img=15"
  },
  {
    name: "Mohit Kumar",
    nickname: "mohit",
    city: "Haridwar",
    img: "https://i.pravatar.cc/300?img=16"
  },
  {
    name: "Adil Khan",
    nickname: "adi",
    city: "Meerut",
    img: "https://i.pravatar.cc/300?img=17"
  },
  {
    name: "Rohit Gupta",
    nickname: "rohit",
    city: "Delhi",
    img: "https://i.pravatar.cc/300?img=18"
  },
  {
    name: "Sameer Malik",
    nickname: "sammy",
    city: "Roorkee",
    img: "https://i.pravatar.cc/300?img=19"
  },
  {
    name: "Faizan Ahmad",
    nickname: "faizi",
    city: "Saharanpur",
    img: "https://i.pravatar.cc/300?img=20"
  },
  {
    name: "Vikas Chauhan",
    nickname: "vikas",
    city: "Muzaffarnagar",
    img: "https://i.pravatar.cc/300?img=21"
  },
  {
    name: "Irfan Ali",
    nickname: "irfan",
    city: "Haridwar",
    img: "https://i.pravatar.cc/300?img=22"
  },
  {
    name: "Deepak Joshi",
    nickname: "deepu",
    city: "Dehradun",
    img: "https://i.pravatar.cc/300?img=23"
  },
  {
    name: "Zaid Khan",
    nickname: "zaddy",
    city: "Noida",
    img: "https://i.pravatar.cc/300?img=24"
  },
  {
    name: "Karan Mehta",
    nickname: "karan",
    city: "Gurugram",
    img: "https://i.pravatar.cc/300?img=25"
  },
  {
    name: "Imran Ansari",
    nickname: "immy",
    city: "Delhi",
    img: "https://i.pravatar.cc/300?img=26"
  },
  {
    name: "Nikhil Yadav",
    nickname: "nikhil",
    city: "Meerut",
    img: "https://i.pravatar.cc/300?img=27"
  },
  {
    name: "Ayaan Siddiqui",
    nickname: "ayaan",
    city: "Saharanpur",
    img: "https://i.pravatar.cc/300?img=28"
  },
  {
    name: "Sahil Kumar",
    nickname: "sahil",
    city: "Roorkee",
    img: "https://i.pravatar.cc/300?img=29"
  },
  {
    name: "Yash Agarwal",
    nickname: "yash",
    city: "Chandigarh",
    img: "https://i.pravatar.cc/300?img=30"
  }
];

function App() {
  return (
    <div className='flex flex-wrap gap-5 p-5'>
        
        {data.map((item,idx)=>(
          <Card data={item} key={idx}/>
        ))}
        
        
    </div>
  )
}

export default App