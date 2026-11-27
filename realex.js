const linkedinJobs = [
  {
    id: 101,
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Bengaluru, Karnataka (Hybrid)",
    salary: 1400000
  },
  {
    id: 102,
    title: "Full Stack Engineer",
    company: "CloudScale India",
    location: "Remote",
    salary: 1850000
  },
  {
    id: 103,
    title: "AI Community Intelligence Engineer",
    company: "Kyanon Digital",
    location: "Remote",
    salary: 2150000
  },
  {
    id: 104,
    title: "Backend Node.js Developer",
    company: "FinEdge Systems",
    location: "Chennai, Tamil Nadu (On-site)",
    salary: 1200000
  },
  {
    id: 105,
    title: "UI/UX Product Designer",
    company: "PixelCraft Studio",
    location: "Hyderabad, Telangana (Hybrid)",
    salary: 1100000
  }
];

//filter jobs that salary should be greater the 15L

let res = linkedinJobs.filter((n)=>{
    return n.salary>1500000  
})
console.log(res);

//display the company name alone
let res1 = res.map((n)=>{
    return n.company
})
console.log(res1);