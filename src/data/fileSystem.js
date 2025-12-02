export const fileSystem = [
    {
        id: 'about',
        type: 'text',
        label: 'About Me',
        icon: '/text_icon.svg',
        content: `Hello! I'm Edward Alder.

I am a mobile software engineer, currently working at SoFi on their mobile app. Previously, I worked at Amazon on the Amazon Shopping mobile app.

Feel free to explore my projects and get in touch via LinkedIn!`
    },
    {
        id: 'resume',
        type: 'file',
        label: 'Resume',
        icon: '/resume_icon.svg',
        action: 'download',
        data: {
            file: '/resume.pdf',
            fileName: 'Edward-Alder-Resume.pdf'
        }
    },
    {
        id: 'linkedin',
        type: 'link',
        label: 'LinkedIn',
        icon: '/linkedin_icon.svg',
        action: 'link',
        data: {
            url: 'https://www.linkedin.com/in/edward-alder/',
            name: 'LinkedIn'
        }
    },
    {
        id: 'projects',
        type: 'folder',
        label: 'Projects',
        icon: '/folder.svg', // Need to create this
        children: [
            {
                id: 'stickyournotes',
                type: 'link',
                label: 'StickYourNotes',
                icon: '/stickyournotes_icon.svg',
                action: 'link',
                data: {
                    url: 'https://stickyournotes.com',
                    name: 'StickYourNotes'
                }
            },
            {
                id: 'arrowops',
                type: 'link',
                label: 'Arrow Ops',
                icon: '/arrowops_icon.png',
                action: 'link',
                data: {
                    url: 'https://www.arrowops.dev',
                    name: 'Arrow Ops'
                }
            },
            {
                id: 'numbit',
                type: 'link',
                label: 'Numbit',
                icon: '/numbit_icon.svg',
                action: 'link',
                data: {
                    url: 'https://www.numbit.dev/',
                    name: 'Numbit'
                }
            },
            {
                id: 'chirpy',
                type: 'link',
                label: 'Chirpy',
                icon: '/chirpy_icon.svg',
                action: 'link',
                data: {
                    url: 'https://chirpy-self.vercel.app/',
                    name: 'Chirpy'
                }
            }
        ]
    },
    {
        id: 'system',
        type: 'system',
        label: 'System Properties',
        icon: '/computer_icon.png',
        content: null,
        desktop: false
    }
    ,
    {
        id: 'browser',
        type: 'browser',
        label: 'Internet Explorer',
        icon: '/internet_icon.png',
        content: null
    }
];
