const USER = 
{
    userId: 9,
    name: "Ankit Panelist 5",
    email: "ankitbhanja99+panelis5@gmail.com",
    role: "panelist",
    assignedHackathon: 5,
    available: false,
};

const HACKATHONS = 
[
    {
        hackathonId: 1,
        name: "Hack 2",
        theme: "Telecom",
        startDate: "2024-03-21 17:16:22",
        ideaSubmissionDeadline: "2024-03-21 17:17:25",
        shortListDeadline: "2024-03-21 17:16:31",
        implementationSubmissionDeadline: "2024-03-21 17:17:34",
        reviewStartTime: "2024-03-21 17:17:36",
        reviewEndTime: "2024-03-21 17:16:40",
        description: "ndnsjndjnsdjd",
        prizes: "mnskdnksdnk",
        rules: "sndnsdjndjsn",
        judgingCriteria: "kdmksmdksmd",
        isCompleted: true,
        firstTeamId: null,
        secondTeamId: null,
        thirdTeamId: null,
    },
    {
        hackathonId: 2,
        name: "HAck3",
        theme: "Telecom",
        startDate: "2024-03-21 22:04:46",
        ideaSubmissionDeadline: "2024-03-21 22:05:48",
        shortListDeadline: "2024-03-21 22:05:51",
        implementationSubmissionDeadline: "2024-03-21 22:05:53",
        reviewStartTime: "2024-03-21 22:06:56",
        reviewEndTime: "2024-03-21 22:08:01",
        description: "dsdsd",
        prizes: "dsdsdsd",
        rules: "sddsdsd",
        judgingCriteria: "sdsddsd",
        isCompleted: true,
        firstTeamId: null,
        secondTeamId: null,
        thirdTeamId: null,
    },
    {
        hackathonId: 3,
        name: "HAck5",
        theme: "Product Engineering",
        startDate: "2024-03-23 22:11:02",
        ideaSubmissionDeadline: "2024-03-21 22:12:06",
        shortListDeadline: "2024-03-21 22:13:09",
        implementationSubmissionDeadline: "2024-03-21 22:14:12",
        reviewStartTime: "2024-03-21 22:18:15",
        reviewEndTime: "2024-03-21 22:20:20",
        description: "mkakkmds",
        prizes: "sdssdsd",
        rules: "kmdskdmskdmsd",
        judgingCriteria: "dsdsdsd",
        isCompleted: true,
        firstTeamId: null,
        secondTeamId: null,
        thirdTeamId: null,
    },
    {
        hackathonId: 4,
        name: "Hello 24",
        theme: "Product Engineering",
        startDate: "2024-03-08 04:37:00",
        ideaSubmissionDeadline: "2024-03-08 04:37:00",
        shortListDeadline: "2024-03-08 04:37:00",
        implementationSubmissionDeadline: "2024-03-08 04:37:00",
        reviewStartTime: "2024-03-08 04:37:00",
        reviewEndTime: "2024-03-08 04:37:00",
        description: "Helooeoe",
        prizes: "njejnejne",
        rules: "Rules",
        judgingCriteria: "jnejnejnejn",
        isCompleted: false,
        firstTeamId: null,
        secondTeamId: null,
        thirdTeamId: null,
    },
    {
        hackathonId: 5,
        name: "TrialHack1",
        theme: "Life Sciences",
        startDate: "2024-03-22 08:42:25",
        ideaSubmissionDeadline: "2024-03-21 11:42:39",
        shortListDeadline: "2024-03-23 11:42:44",
        implementationSubmissionDeadline: "2024-03-22 11:42:48",
        reviewStartTime: "2024-03-21 11:42:51",
        reviewEndTime: "2024-03-23 11:42:54",
        description: "Description1",
        prizes: "Prizes1",
        rules: "Rules1",
        judgingCriteria: "Judging Criteria 1",
        isCompleted: false,
        firstTeamId: null,
        secondTeamId: null,
        thirdTeamId: null,
    },
    {
        hackathonId: 6,
        name: "Trial Hackathon 2",
        theme: "Banking and Wealth",
        startDate: "2024-03-22 15:16:34",
        ideaSubmissionDeadline: "2024-03-21 15:16:43",
        shortListDeadline: "2024-03-21 15:16:47",
        implementationSubmissionDeadline: "2024-03-23 15:16:51",
        reviewStartTime: "2024-03-21 15:16:54",
        reviewEndTime: "2024-03-23 15:16:57",
        description: "Description 1",
        prizes: "Prizes 1",
        rules: "Guideline1",
        judgingCriteria: "Judging Criteria 1",
        isCompleted: false,
        firstTeamId: null,
        secondTeamId: null,
        thirdTeamId: null,
    },
    {
        hackathonId: 7,
        name: "Ank",
        theme: "Telecom",
        startDate: "2024-03-16 11:57:03",
        ideaSubmissionDeadline: "2024-03-24 11:57:07",
        shortListDeadline: "2024-03-24 11:57:11",
        implementationSubmissionDeadline: "2024-03-24 11:57:14",
        reviewStartTime: "2024-03-24 11:57:16",
        reviewEndTime: "2024-03-24 11:57:19",
        description: "hshhs",
        prizes: "sjjss",
        rules: "jjsjj",
        judgingCriteria: "jnnj",
        isCompleted: false,
        firstTeamId: null,
        secondTeamId: null,
        thirdTeamId: null,
    },
];

const EVALUATORS = [
    {
        userId: 2,
        name: "Ankit Panelist",
        email: "panelist+ankitbhanja99@gmail.com",
        role: "panelist",
        assignedHackathon: -1,
        available: true,
    },
    {
        userId: 3,
        name: "Ankit Panelist 2",
        email: "panelist2+ankitbhanja99@gmail.com",
        role: "panelist",
        assignedHackathon: -1,
        available: true,
    },
    {
        userId: 4,
        name: "Ankit Panelist 3",
        email: "panelist3+ankitbhanja99@gmail.com",
        role: "panelist",
        assignedHackathon: -1,
        available: true,
    },
    {
        userId: 5,
        name: "Ankit Judge",
        email: "judge+ankitbhanja99@gmail.com",
        role: "judge",
        assignedHackathon: 4,
        available: false,
    },
    {
        userId: 6,
        name: "Ankit Judge 2",
        email: "judge2+ankitbhanja99@gmail.com",
        role: "panelist",
        assignedHackathon: -1,
        available: true,
    },
    {
        userId: 7,
        name: "Ankit Panelist 4",
        email: "ankitbhanja99+panelist4@gmail.com",
        role: "panelist",
        assignedHackathon: 4,
        available: false,
    },
    {
        userId: 9,
        name: "Ankit Panelist 5",
        email: "ankitbhanja99+panelis5@gmail.com",
        role: "panelist",
        assignedHackathon: 5,
        available: false,
    },
    {
        userId: 10,
        name: "Ankit Judge 5",
        email: "ankitbhanja99+judge5@gmail.com",
        role: "judge",
        assignedHackathon: 5,
        available: false,
    },
    {
        userId: 16,
        name: "Panelist 8",
        email: "ankitbhanja99+panelist8@gmail.com",
        role: "panelist",
        assignedHackathon: 6,
        available: false,
    },
    {
        userId: 17,
        name: "Judge 8",
        email: "ankitbhanja99+judge8@gmail.com",
        role: "judge",
        assignedHackathon: 6,
        available: false,
    },
];

const TEAMS = [
    {
        teamId: 2,
        name: "Team1",
        ideaTitle: "Idea 55",
        ideaBody: "Idea 58 Description",
        ideaRepo: "https://thehub.incedoinc.com/SitePages/Incedo.aspx",
        ideaFiles: "https://www.google.co.in/",
        status: "implemented",
        ideaDomain: "Cloud and Digital",
        consolidatedRating: null,
        hackathonId: 5,
        teamUserDetailsDTOs: [
            {
                userId: 12,
                name: "Ankit Participant 55",
                email: "ankitbhanja99+participant55@gmail.com",
                leader: true,
            },
            {
                userId: 11,
                name: "Ankit Participant 5",
                email: "ankitbhanja99+participant5@gmail.com",
                leader: false,
            },
        ],
    },
    {
        teamId: 3,
        name: "Team3",
        ideaTitle: "Idea 55",
        ideaBody: "Idea 58 Description",
        ideaRepo: "https://thehub.incedoinc.com/SitePages/Incedo.aspx",
        ideaFiles: "https://www.google.co.in/",
        status: "implemented",
        ideaDomain: "Cloud and Digital",
        consolidatedRating: null,
        hackathonId: 5,
        teamUserDetailsDTOs: [
            {
                userId: 12,
                name: "Ankit Participant 55",
                email: "ankitbhanja99+participant55@gmail.com",
                leader: true,
            },
            {
                userId: 11,
                name: "Ankit Participant 5",
                email: "ankitbhanja99+participant5@gmail.com",
                leader: false,
            },
        ],
    },
    {
        teamId: 4,
        name: "Team4",
        ideaTitle: "Idea 55",
        ideaBody: "Idea 58 Description",
        ideaRepo: "https://thehub.incedoinc.com/SitePages/Incedo.aspx",
        ideaFiles: "https://www.google.co.in/",
        status: "implemented",
        ideaDomain: "Cloud and Digital",
        consolidatedRating: null,
        hackathonId: 5,
        teamUserDetailsDTOs: [
            {
                userId: 12,
                name: "Ankit Participant 55",
                email: "ankitbhanja99+participant55@gmail.com",
                leader: true,
            },
            {
                userId: 11,
                name: "Ankit Participant 5",
                email: "ankitbhanja99+participant5@gmail.com",
                leader: false,
            },
        ],
    },
];

const REQUESTS = [
    {
        name: "John Doe",
        email: "john.doe@example.com",
        details:
            "I recently discovered Creative Tim, and it's been a game-changer for my design projects. As a freelance designer, their resources have helped me elevate my work to the next level. Plus, their pricing is incredibly reasonable. Highly recommend!",
    },
    {
        name: "Alice Smith",
        email: "alice.smith@example.com",
        details:
            "Creative Tim has been an invaluable resource for me as a designer. Whether it's for personal projects or professional endeavors, their products never disappoint. Their team is also incredibly supportive and responsive. Definitely worth every penny!",
    },
    {
        name: "Michael Johnson",
        email: "michael.johnson@example.com",
        details:
            "I've been using Creative Tim for all my design needs, and I couldn't be happier with the results. Their products are top-notch, and the affordability factor is a huge bonus. Kudos to the team for their outstanding work!",
    },
];

export { HACKATHONS, USER, EVALUATORS, TEAMS, REQUESTS };
