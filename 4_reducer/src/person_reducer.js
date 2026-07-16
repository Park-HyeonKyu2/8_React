export default function personReducer(person, action){
    switch (action.type) {
        case "added": {
            const { name, title } = action
            return {
                ...person,
                mentors: [...person.mentors, {name, title}]
            }
        } break;

        case "updated": {
            const { prev, next } = action
            return {
                ...person,
                mentors : person.mentors.map((mentor) => {
                    if(mentor.name === prev) {
                        return { ...mentor, name: next }
                    }
                    return mentor
                })
            }
        }break;
        case "deleted": {
            return {
                ...person,
                mentors : person.mentors.filter((mentor) => mentor.name !== action.name)
            }
        } break;

        default: {
            throw Error(`알 수 없는 액션 타입: ${action.type}`)
        }
    }
}