const tutors = [
    {
        id: 1,
        name: "John Doe",
        rate: 20,
        rating: 4,
        subjects: ["Math", "Science"],
        specialSubjects: ["Math"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: 'M•W•F 5pm-8pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 2,
        name: "LeBron James",
        rate: 70,
        rating: 5,
        subjects: ["PE", "Science"],
        specialSubjects: ["PE}"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: 'M•••F 6am-8pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 3,
        name: "Garald Jasur",
        rate: 12,
        rating: 3,
        subjects: ["Chemistry"],
        specialSubjects: ["Chemistry"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: '••W•F 4pm-9pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 4,
        name: "Mohan Jaak",
        rate: 50,
        rating: 4,
        subjects: ["Math", "Computer Science"],
        specialSubjects: ["Math"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: 'M•WTF 2pm-3pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 5,
        name: "Jamal Lue",
        rate: 10,
        rating: 2,
        subjects: ["English"],
        specialSubjects: ["English"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: 'M••THF 5pm-8pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 6,
        name: "Joey Nguyen",
        rate: 5,
        rating: 4,
        subjects: ["Math"],
        specialSubjects: ["Math"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: 'M•••• 6am-8am',
        image: 'https://picsum.photos/500'
    },
	{
        id: 7,
        name: "Tony Nguyen",
        rate: 23,
        rating: 5,
        subjects: ["Math", "Computer Science"],
        specialSubjects: ["Computer Science"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: 'MTW•F 6am-10pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 8,
        name: "Timothy Crawford",
        rate: 50,
        rating: 2,
        subjects: ["Circuits", "Science"],
        specialSubjects: ["Science"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: 'M•••F 3pm-8pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 9,
        name: "Niel Johnson",
        rate: 5,
        rating: 4,
        subjects: ["English", "Spanish"],
        specialSubjects: ["English"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: '••••F 5pm-10pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 10,
        name: "Youngjin Jung",
        rate: 77,
        rating: 5,
        subjects: ["Math", "Auto", "Computer Science"],
        specialSubjects: ["Computer Science"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: '•••TH• 5am-6pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 11,
        name: "Rasol Alofi",
        rate: 50,
        rating: 5,
        subjects: ["Math", "Computer Science"],
        specialSubjects: ["Computer Science"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: '••WTHF 3pm-11pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 12,
        name: "Alex Pianetta",
        rate: 50,
        rating: 5,
        subjects: ["Math", "Computer Science"],
        specialSubjects: ["Computer Science"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: 'MTWTHF 6am-12pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 13,
        name: "Jim Carter",
        rate: 20,
        rating: 2,
        subjects: ["History"],
        specialSubjects: ["History"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: '••••F 5pm-10pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 14,
        name: "Marcos Ramos",
        rate: 60,
        rating: 3,
        subjects: ["Art"],
        specialSubjects: ["Art"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: 'M•W•• 3pm-11pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 15,
        name: "Lee Jieun",
        rate: 90,
        rating: 5,
        subjects: ["Music", "Art"],
        specialSubjects: ["Music"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: '••W•• 8pm-10pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 16,
        name: "Landon Shein",
        rate: 20,
        rating: 5,
        subjects: ["PE", "Physics"],
        specialSubjects: ["Physics"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: 'M•W•F 5pm-8pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 17,
        name: "Ndija Anderson",
        rate: 25,
        rating: 4,
        subjects: ["Physics", "Science"],
        specialSubjects: ["Physics"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: 'M•••• 7pm-8pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 18,
        name: "Alexandra Li",
        rate: 22,
        rating: 4,
        subjects: ["Math", "Chemistry"],
        specialSubjects: ["Chemistry"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: 'M•••F 7am-10am',
        image: 'https://picsum.photos/500'
    },
	{
        id: 19,
        name: "Daniel Jimenez",
        rate: 80,
        rating: 3,
        subjects: ["Art", "Math"],
        specialSubjects: ["Art"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: '••WTHF 10pm-11pm',
        image: 'https://picsum.photos/500'
    },
	{
        id: 20,
        name: "Julian Richard",
        rate: 30,
        rating: 1,
        subjects: ["PE", "Law"],
        specialSubjects: ["Law"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        availability: 'MTWTHF 6am-12pm',
        image: 'https://picsum.photos/500'
    }
    
]

module.exports = {
    tutors
}