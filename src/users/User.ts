const userObject: UserType[] = [
    {
        name: 'Sxpherr',
        password: '9xIqwi-p',
        age: 11,
        isMale: true,
        skills: ["Sniper", "Fullstack Developer"]
    },
    {
        name: 'Pylon',
        password: 'pylonishere',
        age: 16,
        isMale: true,
        skills: ["no lifer", "simp", "fergfamnab"]
    }
]

interface UserType {
    name: string,
    password: string,
    age: number,
    isMale: boolean,
    skills?: string[],
}

console.log('Updating...')
console.log(userObject)
