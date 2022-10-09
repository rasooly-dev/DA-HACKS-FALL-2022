const tutors = [
    {
        id: 1,
        name: "John Doe",
        rate: 20,
        rating: 4,
        subjects: ["MATH", "BIOL"],
        specialSubjects: ["MATH"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: 'M•W•F 5pm-8pm',
        image: 'https://picsum.photos/400'
    },
	{
        id: 2,
        name: "LeBron James",
        rate: 70,
        rating: 5,
        subjects: ["PEA", "BIOL"],
        specialSubjects: ["PEA"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: 'M•••F 6am-8pm',
        image: 'https://picsum.photos/300'
    },
	{
        id: 3,
        name: "Garald Jasur",
        rate: 12,
        rating: 3,
        subjects: ["CHEM"],
        specialSubjects: ["CHEM"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: '••W•F 4pm-9pm',
        image: 'https://picsum.photos/200'
    },
	{
        id: 4,
        name: "Mohan Jaak",
        rate: 50,
        rating: 4,
        subjects: ["MATH", "CIS"],
        specialSubjects: ["MATH"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: 'M•WTF 2pm-3pm',
        image: 'https://picsum.photos/300'
    },
	{
        id: 5,
        name: "Jamal Lue",
        rate: 10,
        rating: 2,
        subjects: ["EWRT"],
        specialSubjects: ["EWRT"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: 'M••THF 5pm-8pm',
        image: 'https://picsum.photos/200'
    },
	{
        id: 6,
        name: "Joey Nguyen",
        rate: 5,
        rating: 4,
        subjects: ["MATH"],
        specialSubjects: ["MATH"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: 'M•••• 6am-8am',
        image: 'https://picsum.photos/600'
    },
	{
        id: 7,
        name: "Tony Nguyen",
        rate: 23,
        rating: 5,
        subjects: ["MATH", "CIS"],
        specialSubjects: ["CIS"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: 'MTW•F 6am-10pm',
        image: 'https://picsum.photos/200'
    },
	{
        id: 8,
        name: "Timothy Crawford",
        rate: 50,
        rating: 2,
        subjects: ["ITAL", "BIOL"],
        specialSubjects: ["ITAL"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: 'M•••F 3pm-8pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 9,
        name: "Niel Johnson",
        rate: 5,
        rating: 4,
        subjects: ["EWRT", "SPAN"],
        specialSubjects: ["EWRT"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: '••••F 5pm-10pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 10,
        name: "Youngjin Jung",
        rate: 77,
        rating: 5,
        subjects: ["MATH", "ASTR", "CIS"],
        specialSubjects: ["CIS"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: '•••TH• 5am-6pm',
        image: 'https://picsum.photos/400'
    },
	{
        id: 11,
        name: "Rasol Alofi",
        rate: 42069,
        rating: 5,
        subjects: ["MATH", "CIS"],
        specialSubjects: ["CIS"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: '••WTHF 3pm-11pm',
        image: 'https://picsum.photos/300'
    },
	{
        id: 12,
        name: "Alex Pianetta",
        rate: 50,
        rating: 5,
        subjects: ["MATH", "CIS"],
        specialSubjects: ["CIS"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: 'M-T-W-TH-F 6am-12pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 13,
        name: "Jim Carter",
        rate: 20,
        rating: 2,
        subjects: ["HIST"],
        specialSubjects: ["HIST"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: '••••F 5pm-10pm',
        image: 'https://picsum.photos/400'
    },
	{
        id: 14,
        name: "Marcos Ramos",
        rate: 60,
        rating: 3,
        subjects: ["ARTS"],
        specialSubjects: ["ARTS"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: 'M•W•• 3pm-11pm',
        image: 'https://picsum.photos/300'
    },
	{
        id: 15,
        name: "Lee Jieun",
        rate: 90,
        rating: 5,
        subjects: ["MUSI", "ARTS"],
        specialSubjects: ["MUSI"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: '••W•• 8pm-10pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 16,
        name: "Landon Shein",
        rate: 20,
        rating: 5,
        subjects: ["PEA", "PHYS"],
        specialSubjects: ["PHYS"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: 'M•W•F 5pm-8pm',
        image: 'https://picsum.photos/400'
    },
	{
        id: 17,
        name: "Ndija Anderson",
        rate: 25,
        rating: 4,
        subjects: ["PHYS", "BIOL"],
        specialSubjects: ["PHYS"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: 'M•••• 7pm-8pm',
        image: 'https://picsum.photos/300'
    },
	{
        id: 18,
        name: "Alexandra Li",
        rate: 22,
        rating: 4,
        subjects: ["MATH", "CHEM"],
        specialSubjects: ["CHEM"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: 'M•••F 7am-10am',
        image: 'https://picsum.photos/500'
    },
	{
        id: 19,
        name: "Daniel Jimenez",
        rate: 80,
        rating: 3,
        subjects: ["ARTS", "MATH"],
        specialSubjects: ["ARTS"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: '••WTHF 10pm-11pm',
        image: 'https://picsum.photos/400'
    },
	{
        id: 20,
        name: "Julian Richard",
        rate: 30,
        rating: 1,
        subjects: ["PEA", "BUS"],
        specialSubjects: ["BUS"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
        availability: 'M-T-W-TH-F 6am-12pm',
        image: 'https://picsum.photos/300'
    }
    
]

module.exports = {
    tutors
}